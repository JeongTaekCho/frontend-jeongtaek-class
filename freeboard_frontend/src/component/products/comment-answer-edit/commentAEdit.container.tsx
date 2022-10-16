import { useMutation } from "@apollo/client";
import { useState } from "react";
import { errorModal, successModal } from "../../common/modal/modal-function";
import CommentAnswer from "../comment-answer/comment-answer.container";
import CommentEditAnswerUi from "./commentAEdit.presenter";
import { UPDATE_ANSWER } from "./commentAEdit.queries";

const CommentEditAnswer = ({ answer, setIsActive }) => {
  const [commentText, setCommentText] = useState("");

  console.log(CommentAnswer);

  const onChangeCommentAnswer = (event) => {
    setCommentText(event.target.value);
  };

  const [updateAnswer] = useMutation(UPDATE_ANSWER);

  const onClickupdateAnswer = async () => {
    try {
      await updateAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: commentText,
          },
          useditemQuestionAnswerId: answer._id,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      setCommentText("");
      setIsActive(false);
      successModal("답글을 수정하였습니다.");
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  return (
    <CommentEditAnswerUi
      onChangeCommentAnswer={onChangeCommentAnswer}
      commentText={commentText}
      onClickupdateAnswer={onClickupdateAnswer}
      answer={answer}
    />
  );
};

export default CommentEditAnswer;
