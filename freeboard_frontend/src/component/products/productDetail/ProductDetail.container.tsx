import { useRouter } from "next/router";
import { useState } from "react";
import ProductDetailUi from "./ProductDetail.presenter";

const ProductDetail = () => {
  const [itemCount, setItemCount] = useState(1);

  const onClickCount = (event) => {
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

  // 유즈 라우터
  //   const router = useRouter();

  return (
    <>
      <ProductDetailUi itemCount={itemCount} onClickCount={onClickCount} />
    </>
  );
};

export default ProductDetail;
