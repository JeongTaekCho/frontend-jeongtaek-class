import { Modal } from "antd";
import { getDate } from "../../../commons/libraries/utils";
import CommentAnswer from "../comment-answer/comment-answer.container";
import * as S from "./comment.style";

const ProductCommentUi = ({
  comment,
  isAnswerActive,
  onClickViewAnswer,
  isPwModal,
  onClickPwModalToggle,
  onClickDeleteQuestion,
  onClickPwModalOpen,
  onClickPwModalClose,
}) => {
  return (
    <S.CommentAnswerBox>
      <>
        <S.CommentAnswerContainer>
          <S.MyImgBox></S.MyImgBox>
          <S.CommentContentsBox>
            <S.CommentWriter>{comment.user.name}</S.CommentWriter>
            <S.CommentCon>{comment.contents}</S.CommentCon>
            <S.CommentDate>
              {getDate(new Date(comment.createdAt))}
            </S.CommentDate>
          </S.CommentContentsBox>
          <S.CommentBtnBox>
            <S.AnswerBtn onClick={onClickViewAnswer(comment._id)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z"
                  fill="#BDBDBD"
                />
              </svg>
            </S.AnswerBtn>
            <S.AnswerBtn>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z"
                  fill="#BDBDBD"
                />
              </svg>
            </S.AnswerBtn>
            <S.AnswerBtn onClick={onClickPwModalOpen(comment._id)}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="#BDBDBD"
                />
              </svg>
            </S.AnswerBtn>
          </S.CommentBtnBox>
        </S.CommentAnswerContainer>
        <CommentAnswer isAnswerActive={isAnswerActive} />
      </>
      <Modal
        title="댓글 삭제"
        open={isPwModal}
        onOk={onClickDeleteQuestion(comment._id)}
        onCancel={onClickPwModalClose}
      ></Modal>
    </S.CommentAnswerBox>
  );
};

export default ProductCommentUi;
