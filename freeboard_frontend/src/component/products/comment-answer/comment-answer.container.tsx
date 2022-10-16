import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { errorModal, successModal } from "../../common/modal/modal-function";
import CommentAnswerUi from "./comment-answer.presenter";
import { DELETE_ANSWER, FETCH_QUESTION_ANSWER } from "./comment-answer.queries";

const CommentAnswer = ({ comment, answer }) => {
  const [isPwModal, setIsPwModal] = useState(false);

  const [answerId, setAnswerId] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [onClickDeleteAnswer] = useMutation(DELETE_ANSWER);

  const onClickPwOpen = (answerId) => () => {
    setIsPwModal(true);
    setAnswerId(answerId);
  };
  const onClickPwClose = () => {
    setIsPwModal(false);
  };

  const onClickUpdateAnswer = () => {
    setIsActive((prev) => !prev);
  };

  const onClickCommentAnswerDelete = async () => {
    try {
      await onClickDeleteAnswer({
        variables: {
          useditemQuestionAnswerId: answerId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: (prev, { readField }) => {},
          });
        },
      });
      setIsPwModal(false);
      successModal("답글이 삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  return (
    <CommentAnswerUi
      onClickCommentAnswerDelete={onClickCommentAnswerDelete}
      isPwModal={isPwModal}
      onClickPwOpen={onClickPwOpen}
      onClickPwClose={onClickPwClose}
      isActive={isActive}
      onClickUpdateAnswer={onClickUpdateAnswer}
      answer={answer}
      setIsActive={setIsActive}
    />
  );
};

export default CommentAnswer;
