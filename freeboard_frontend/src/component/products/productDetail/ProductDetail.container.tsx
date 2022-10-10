import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { errorModal, successModal } from "../../common/modal/modal-function";
import ProductDetailUi from "./ProductDetail.presenter";
import {
  CREATE_QUESTION,
  FETCH_PRODUCT,
  FETCH_PRODUCT_COMMENT,
} from "./ProductDetail.querys";
import "antd/dist/antd.css";

const ProductDetail = () => {
  // 유즈 라우터
  const router = useRouter();
  const [itemCount, setItemCount] = useState(1);
  const [comment, setComment] = useState("");

  const { data: productInfo } = useQuery(FETCH_PRODUCT, {
    variables: {
      useditemId: router.query.productId,
    },
  });

  useEffect(() => {
    const saveProduct = localStorage.getItem("todayProduct");
    if (saveProduct === null) {
      localStorage.setItem("todayProduct", JSON.stringify([productInfo]));
    } else {
      const parseProduct = JSON.parse(saveProduct);
      parseProduct.push(productInfo);
      localStorage.setItem("todayProduct", JSON.stringify(parseProduct));
    }
  }, [productInfo]);

  const { data: productComments } = useQuery(FETCH_PRODUCT_COMMENT, {
    variables: {
      useditemId: router.query.productId,
    },
  });

  const onChangeComment = (event) => {
    setComment(event.target.value);
    console.log(typeof comment);
  };

  const [createQuestion] = useMutation(CREATE_QUESTION);

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
      />
    </>
  );
};

export default ProductDetail;
