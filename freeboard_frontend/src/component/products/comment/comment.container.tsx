import { useState } from "react";
import ProductCommentUi from "./comment.presetner";

const ProductComment = () => {
  const [isActive, setIsActive] = useState(false);

  const onClickAnswerToggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <ProductCommentUi
      isActive={isActive}
      onClickAnswerToggle={onClickAnswerToggle}
    />
  );
};

export default ProductComment;
