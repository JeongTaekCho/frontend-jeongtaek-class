import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_QUESTION_ANSWER } from "../productDetail/ProductDetail.querys";
import CommentAnswerUi from "./comment-answer.presenter";

const CommentAnswer = ({ isActive }) => {
  const [commentAnswer, setCommentAnswer] = useState("");

  const onChangeCommentAnswer = (event) => {
    setCommentAnswer(event.target.value);
  };

  const [createCommentAnswer] = useMutation(CREATE_QUESTION_ANSWER);

  const onClickCommentAnswerBtn = async () => {
    await createCommentAnswer({
      // variables: {
      //   createUseditemQuestionAnswerInput: {
      //     contents: commentAnswer,
      //   },
      //   useditemQuestionId :
      // },
    });
  };

  return (
    <CommentAnswerUi
      onChangeCommentAnswer={onChangeCommentAnswer}
      isActive={isActive}
    />
  );
};

export default CommentAnswer;
