import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { commentAnswerId } from "../../../store";
import { errorModal, successModal } from "../../common/modal/modal-function";
import { CREATE_QUESTION_ANSWER } from "../productDetail/ProductDetail.querys";
import CommentAnswerUi from "./comment-answer.presenter";
import { DELETE_ANSWER, FETCH_QUESTION_ANSWER } from "./comment-answer.queries";

const CommentAnswer = ({ isAnswerActive }) => {
  const [commentAnswer, setCommentAnswer] = useState("");
  const [isPwModal, setIsPwModal] = useState(false);
  const [commentId, setCommentId] = useRecoilState(commentAnswerId);
  const [answerId, setAnswerId] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onChangeCommentAnswer = (event) => {
    setCommentAnswer(event.target.value);
  };

  const { data: questionAnswerDatas } = useQuery(FETCH_QUESTION_ANSWER, {
    variables: {
      useditemQuestionId: commentId,
    },
  });

  const [createCommentAnswer] = useMutation(CREATE_QUESTION_ANSWER);

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

  // 답글 등록
  const onClickCommentAnswerBtn = async () => {
    try {
      if (commentAnswer) {
        await createCommentAnswer({
          variables: {
            createUseditemQuestionAnswerInput: {
              contents: commentAnswer,
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
        setCommentAnswer("");
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
      onChangeCommentAnswer={onChangeCommentAnswer}
      onClickCommentAnswerBtn={onClickCommentAnswerBtn}
      questionAnswerDatas={questionAnswerDatas}
      isAnswerActive={isAnswerActive}
      commentAnswer={commentAnswer}
      onClickCommentAnswerDelete={onClickCommentAnswerDelete}
      isPwModal={isPwModal}
      onClickPwOpen={onClickPwOpen}
      onClickPwClose={onClickPwClose}
      isActive={isActive}
      onClickUpdateAnswer={onClickUpdateAnswer}
    />
  );
};

export default CommentAnswer;
