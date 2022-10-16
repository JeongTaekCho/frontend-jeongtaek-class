import * as S from "../comment-answer/comment-answer.styles";

const CommentEditAnswerUi = ({
  onChangeCommentAnswer,
  onClickupdateAnswer,
  commentText,
  answer,
}) => {
  console.log(answer);
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
              placeholder="수정할 내용을 입력해주세요."
              maxLength={99}
              onChange={onChangeCommentAnswer}
              value={commentText || answer?.contents}
              defaultValue={answer?.contents}
            />
            <S.CommentAnswerSubmitBox>
              <S.CommentAnswerLeftBox>
                <span>{commentText.length || answer?.contents.length}/100</span>
              </S.CommentAnswerLeftBox>
              <S.CommentAnswerSubmit
                type="submit"
                onClick={onClickupdateAnswer}
              >
                답글수정
              </S.CommentAnswerSubmit>
            </S.CommentAnswerSubmitBox>
          </S.CommentAnswerContentBox>
        </S.CommentAnswerContainer>
      </S.CommentAnswerBox>
    </>
  );
};

export default CommentEditAnswerUi;
