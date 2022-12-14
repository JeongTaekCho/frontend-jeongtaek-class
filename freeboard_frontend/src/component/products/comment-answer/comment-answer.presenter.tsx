import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { getDate } from "../../../commons/libraries/utils";
import { userInfo } from "../../../store";
import CommentEditAnswer from "../comment-answer-edit/commentAEdit.container";
import * as S from "./comment-answer.styles";

const CommentAnswerUi = ({
  onClickCommentAnswerDelete,
  isPwModal,
  onClickPwOpen,
  onClickPwClose,
  isActive,
  onClickUpdateAnswer,
  answer,
  setIsActive,
}) => {
  const [userDatas] = useRecoilState(userInfo);
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
            <S.MyImgBox
              style={{ backgroundImage: `url(${answer.user.picture})` }}
            ></S.MyImgBox>
            <S.CommentContentsBox>
              <S.CommentWriter>{answer.user.name}</S.CommentWriter>
              <S.CommentCon>{answer.contents}</S.CommentCon>
              <S.CommentDate>
                {getDate(new Date(answer.createdAt))}
              </S.CommentDate>
            </S.CommentContentsBox>
            {userDatas?.fetchUserLoggedIn?._id === answer.user._id ? (
              <S.CommentBtnBox>
                <S.AnswerBtn onClick={onClickUpdateAnswer}>
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
                <S.AnswerBtn onClick={onClickPwOpen(answer._id)}>
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
            ) : null}
          </S.CommentAnswerTextBox>
        </S.CommentAnswerContainer>
        <Modal
          title="?????? ??????"
          open={isPwModal}
          onOk={onClickCommentAnswerDelete}
          onCancel={onClickPwClose}
        >
          <p>????????? ?????? ???????????????????</p>
        </Modal>
      </S.CommentAnswerBox>
      {isActive && (
        <CommentEditAnswer
          answer={answer}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      )}
    </>
  );
};

export default CommentAnswerUi;
