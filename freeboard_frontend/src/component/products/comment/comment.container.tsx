import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { commentAnswerId } from "../../../store";
import { errorModal, successModal } from "../../common/modal/modal-function";
import ProductCommentUi from "./comment.presetner";
import { DELETE_QUESTION } from "./comment.queries";

const ProductComment = ({ comment }) => {
  const [isAnswerActive, setIsAnswerActive] = useState(false);
  const [isPwModal, setIsPwModal] = useState(false);
  const [commentId, setCommentId] = useRecoilState(commentAnswerId);

  const onClickAnswerToggle = (commentId) => () => {
    setIsActive((prev) => !prev);
    setCommentId(commentId);
  };
  const onClickViewAnswer = (commentId) => (event) => {
    setCommentId(commentId);
    setIsAnswerActive((prev) => !prev);
  };
  const onClickPwModalOpen = (commentId) => () => {
    setIsPwModal(true);
    setCommentId(commentId);
  };
  const onClickPwModalClose = () => {
    setIsPwModal(false);
  };

  const [deleteQuestion] = useMutation(DELETE_QUESTION);

  const onClickDeleteQuestion = (commentId) => async () => {
    try {
      await deleteQuestion({
        variables: {
          useditemQuestionId: commentId,
        },
        update(cache, { data }) {
          console.log(data);
          cache.modify({
            fields: (prev, { readField }) => {},
          });
        },
      });
      setIsPwModal(false);
      successModal("문의사항이 삭제 되었습니다.");
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  return (
    <ProductCommentUi
      onClickAnswerToggle={onClickAnswerToggle}
      comment={comment}
      isAnswerActive={isAnswerActive}
      onClickViewAnswer={onClickViewAnswer}
      isPwModal={isPwModal}
      onClickPwModalOpen={onClickPwModalOpen}
      onClickPwModalClose={onClickPwModalClose}
      onClickDeleteQuestion={onClickDeleteQuestion}
    />
  );
};

export default ProductComment;
