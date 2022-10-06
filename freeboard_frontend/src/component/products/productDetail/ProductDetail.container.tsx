import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductDetailUi from "./ProductDetail.presenter";
import { FETCH_PRODUCT } from "./ProductDetail.querys";

const ProductDetail = () => {
  // 유즈 라우터
  const router = useRouter();
  const [itemCount, setItemCount] = useState(1);
  const { data: productInfo } = useQuery(FETCH_PRODUCT, {
    variables: {
      useditemId: router.query.productId,
    },
  });

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
      />
    </>
  );
};

export default ProductDetail;
