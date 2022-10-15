import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { errorModal, successModal } from "../../common/modal/modal-function";
import ProductDetailUi from "./ProductDetail.presenter";
import {
  CREATE_QUESTION,
  DELETE_ITEM,
  FETCH_PRODUCT,
  FETCH_PRODUCT_COMMENT,
  PRODUCT_BUY,
  PRODUCT_PICK,
} from "./ProductDetail.querys";
import "antd/dist/antd.css";

const ProductDetail = () => {
  // 유즈 라우터
  const router = useRouter();
  const [itemCount, setItemCount] = useState(1);
  const [comment, setComment] = useState("");

  const [dateleProduct] = useMutation(DELETE_ITEM);
  const { data: productInfo, refetch: piRefetch } = useQuery(FETCH_PRODUCT, {
    variables: {
      useditemId: router.query.productId,
    },
  });

  console.log(productInfo);

  useEffect(() => {
    void piRefetch();

    const saveProduct = localStorage.getItem("todayProduct");
    if (saveProduct === null) {
      if (productInfo) {
        localStorage.setItem("todayProduct", JSON.stringify([productInfo]));
      }
    } else {
      const parseProduct = JSON.parse(saveProduct);
      parseProduct.unshift(productInfo);
      if (parseProduct.length > 4) parseProduct.pop();
      if (productInfo) {
        localStorage.setItem("todayProduct", JSON.stringify(parseProduct));
      }
    }
  }, [productInfo]);

  const { data: productComments } = useQuery(FETCH_PRODUCT_COMMENT, {
    variables: {
      useditemId: router.query.productId,
    },
  });

  const [productBuy] = useMutation(PRODUCT_BUY);

  const onClickProductBuy = async () => {
    try {
      await productBuy({
        variables: {
          useritemId: router.query.productId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      successModal("상품구매를 완료 하였습니다.");
      // router.push(`products/detail/`)
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  const onClickdeleteProduct = async () => {
    try {
      await dateleProduct({
        variables: {
          useditemId: router.query.productId,
        },
      });
      successModal("상품이 삭제되었습니다.");
      const result = JSON.parse(localStorage.getItem("todayProduct"));
      const newResult = result.filter((el) => el._id === productInfo._id);
      localStorage.setItem("todayProduct", newResult);
      void router.push("/products");
      console.log(result);
      console.log(newResult);
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  const onChangeComment = (event) => {
    setComment(event.target.value);
  };

  const onClickGoUpdate = () => {
    void router.push(`/products/detail/${router.query.productId}/edit`);
  };

  const [createQuestion] = useMutation(CREATE_QUESTION);
  const [productPick] = useMutation(PRODUCT_PICK);

  // 댓글 달기
  const onClickQuestionSubmit = async () => {
    try {
      if (comment) {
        await createQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents: comment,
            },
            useditemId: router.query.productId,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestions: (prev, { data }) => {},
              },
            });
          },
        });
        setComment("");
        successModal("문의하신 내용이 등록되었습니다.");
      } else {
        errorModal("내용을 입력해주세요.");
      }
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  const onClickCount = (event: MouseEvent<HTMLButtonElement>) => {
    const {
      target: { name },
    } = event;
    if (name === "minus") {
      setItemCount((prev) => prev - 1);
      if (itemCount < 1) setItemCount(0);
    }
    if (name === "plus") {
      setItemCount((prev) => prev + 1);
    }
  };

  const onClickPick = async () => {
    try {
      await productPick({
        variables: {
          useditemId: router.query.productId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      // successModal("너로 정했따!");
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  return (
    <>
      <ProductDetailUi
        itemCount={itemCount}
        onClickCount={onClickCount}
        productInfo={productInfo}
        onChangeComment={onChangeComment}
        onClickQuestionSubmit={onClickQuestionSubmit}
        comment={comment}
        productComments={productComments}
        onClickGoUpdate={onClickGoUpdate}
        onClickdeleteProduct={onClickdeleteProduct}
        onClickProductBuy={onClickProductBuy}
        onClickPick={onClickPick}
      />
    </>
  );
};

export default ProductDetail;
