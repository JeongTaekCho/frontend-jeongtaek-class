import * as S from "../comment-answer/comment-answer.styles";

const CommentWriteAnswerUi = ({
  onClickCommentAnswerBtn,
  onChangeCommentAnswer,
  commentText,
}) => {
  return (
    <>
      <S.CommentAnswerBox>
        <S.CommentAnswerContainer>
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 11L9 17L7.58 15.58L11.17 12H0V0H2V10H11.17L7.58 6.42L9 5L15 11Z"
              fill="black"
            />
          </svg>
          <S.CommentAnswerContentBox>
            <S.CommentAnswerTextarea
              placeholder="답글을 작성해주세요."
              onChange={onChangeCommentAnswer}
              value={commentText}
              maxLength={99}
            />
            <S.CommentAnswerSubmitBox>
              <S.CommentAnswerLeftBox>
                <span>{commentText.length}/100</span>
              </S.CommentAnswerLeftBox>
              <S.CommentAnswerSubmit
                type="submit"
                onClick={onClickCommentAnswerBtn}
              >
                답글등록
              </S.CommentAnswerSubmit>
            </S.CommentAnswerSubmitBox>
          </S.CommentAnswerContentBox>
        </S.CommentAnswerContainer>
      </S.CommentAnswerBox>
    </>
  );
};

export default CommentWriteAnswerUi;
