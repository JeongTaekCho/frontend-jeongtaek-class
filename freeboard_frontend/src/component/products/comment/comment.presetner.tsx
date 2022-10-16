import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { getDate } from "../../../commons/libraries/utils";
import { userInfo } from "../../../store";
import CommentAnswer from "../comment-answer/comment-answer.container";
import * as S from "./comment.style";
import * as A from "../../boards/boardDetail/BoardDetail.styled";
import CommentWriteAnswer from "../comment-answer-write/commentAWrite.container";

const ProductCommentUi = ({
  comment,
  isAnswerActive,
  setIsAnswerActive,
  onClickViewAnswer,
  isPwModal,
  onClickDeleteQuestion,
  onClickPwModalOpen,
  onClickPwModalClose,
  onChangeEditComment,
  onClickEditCommentSubmit,
  isUpdateActive,
  onClickUpdateSvg,
  editComment,
  questionAnswerDatas,
}) => {
  const [userDatas] = useRecoilState(userInfo);
  return (
    <>
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
              {userDatas?.fetchUserLoggedIn?._id === comment.user._id ? (
                <>
                  <S.AnswerBtn onClick={onClickUpdateSvg(comment._id)}>
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
                </>
              ) : null}
            </S.CommentBtnBox>
          </S.CommentAnswerContainer>
        </>
        <Modal
          title="댓글 삭제"
          open={isPwModal}
          onOk={onClickDeleteQuestion}
          onCancel={onClickPwModalClose}
        >
          <p>댓글을 삭제 하시겠습니까?</p>
        </Modal>
      </S.CommentAnswerBox>
      {isUpdateActive && (
        <A.CommentContainer>
          <A.CommentTextareaBox>
            <A.CommentTextarea
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다. 입력해주세요."
              name="comment"
              maxLength={99}
              onChange={onChangeEditComment}
              defaultValue={comment.contents}
            />
            <A.CommentSubmitBox>
              <A.CommentLengthBox>
                {editComment.length || comment.contents.length}/100
              </A.CommentLengthBox>
              <A.CommentSubmit onClick={onClickEditCommentSubmit}>
                수정하기
              </A.CommentSubmit>
            </A.CommentSubmitBox>
          </A.CommentTextareaBox>
        </A.CommentContainer>
      )}
      {isAnswerActive && (
        <CommentWriteAnswer setIsAnswerActive={setIsAnswerActive} />
      )}

      {questionAnswerDatas?.fetchUseditemQuestionAnswers.map((answer) => (
        <CommentAnswer key={answer._id} comment={comment} answer={answer} />
      ))}
    </>
  );
};

export default ProductCommentUi;
