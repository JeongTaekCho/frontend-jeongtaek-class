import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { commentAnswerId } from "../../../store";
import { errorModal, successModal } from "../../common/modal/modal-function";
import CommentAnswer from "../comment-answer/comment-answer.container";
import CommentWriteAnswerUi from "./commentAWrite.presenter";
import { CREATE_QUESTION_ANSWER } from "./commentAWrite.queries";

const CommentWriteAnswer = ({ setIsAnswerActive }) => {
  const [commentText, setCommentText] = useState("");
  const [createCommentAnswer] = useMutation(CREATE_QUESTION_ANSWER);
  const [commentId] = useRecoilState(commentAnswerId);

  console.log(CommentAnswer);

  const onChangeCommentAnswer = (event) => {
    setCommentText(event.target.value);
  };

  // 답글 등록
  const onClickCommentAnswerBtn = async () => {
    try {
      if (commentText) {
        await createCommentAnswer({
          variables: {
            createUseditemQuestionAnswerInput: {
              contents: commentText,
            },
            useditemQuestionId: commentId,
          },
          update(cache, { data }) {
            cache.modify({
              fields: {
                fetchUseditemQuestionAnswers: (prev) => {
                  return [data, ...prev];
                },
              },
            });
          },
        });
        setCommentText("");
        setIsAnswerActive(false);
        successModal("답글이 등록되었습니다.");
      } else {
        errorModal("답글을 입력해주세요.");
      }
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  return (
    <CommentWriteAnswerUi
      onClickCommentAnswerBtn={onClickCommentAnswerBtn}
      onChangeCommentAnswer={onChangeCommentAnswer}
      commentText={commentText}
    />
  );
};

export default CommentWriteAnswer;
