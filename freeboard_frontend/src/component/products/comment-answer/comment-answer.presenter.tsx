import * as S from "./comment-answer.styles";

const CommentAnswerUi = ({ onChangeCommentAnswer, isActive }) => {
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
          <S.CommentAnswerTextBox>
            <S.MyImgBox></S.MyImgBox>
            <S.CommentContentsBox>
              <S.CommentWriter>답글쓴사람</S.CommentWriter>
              <S.CommentCon>답글 내용이 들어갑니당.</S.CommentCon>
            </S.CommentContentsBox>
          </S.CommentAnswerTextBox>
        </S.CommentAnswerContainer>
      </S.CommentAnswerBox>
      {isActive ? (
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
                placeholder="답글을 등록해주세요."
                onChange={onChangeCommentAnswer}
              />
              <S.CommentAnswerSubmitBox>
                <S.CommentAnswerLeftBox>
                  <span>0/100</span>
                </S.CommentAnswerLeftBox>
                <S.CommentAnswerSubmit type="submit">
                  답글등록
                </S.CommentAnswerSubmit>
              </S.CommentAnswerSubmitBox>
            </S.CommentAnswerContentBox>
          </S.CommentAnswerContainer>
        </S.CommentAnswerBox>
      ) : null}
    </>
  );
};

export default CommentAnswerUi;
