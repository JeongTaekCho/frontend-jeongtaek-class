import * as S from "../boardDetail/BoardDetail.styled";
import { Modal, Rate } from "antd";
import "antd/dist/antd.css";
import { ICommentItem } from "./commentList.types";

const CommentItemUi = ({
  isEditRateValue,
  onChangeUpdateCommentRate,
  commentId,
  udComment,
  onCommentEdit,
  toggleCommentEdit,
  commentEditSubmit,
  onChangeUdComment,
  comment,
  commentPsModal,
  commentDelPassword,
  onChangeCommentDelPassword,
  onCommentPsModal,
  closeCommentPsModal,
  commentDeleteSubmit,
}: ICommentItem) => {
  return (
    <>
      <S.CommentViewBox key={comment._id}>
        <S.CommentViewContainer>
          <S.CommentViewProfileBox>
            <S.CommentProfileImgBox>
              <S.CommentViewProfileImg></S.CommentViewProfileImg>
            </S.CommentProfileImgBox>
            <S.CommentRatingContentBox>
              <S.CommentNameAndRating>
                <S.CommentViewName>{comment?.writer}</S.CommentViewName>
                <S.CommentRatingBox>
                  <Rate allowHalf value={comment?.rating} disabled />
                </S.CommentRatingBox>
              </S.CommentNameAndRating>
              <S.CommentViewContent>{comment?.contents}</S.CommentViewContent>
              <S.CommentViewDate>
                {comment?.createdAt.slice(0, 10)}
              </S.CommentViewDate>
            </S.CommentRatingContentBox>
          </S.CommentViewProfileBox>
          <S.CommentViewBtnBox>
            <S.DefaultBtn id={comment?._id} onClick={toggleCommentEdit}>
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
            </S.DefaultBtn>
            <S.DefaultBtn id={comment?._id} onClick={onCommentPsModal}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="#BDBDBD"
                />
              </svg>
            </S.DefaultBtn>
          </S.CommentViewBtnBox>
        </S.CommentViewContainer>
        {onCommentEdit ? (
          <S.CommentContainer>
            <S.CommentHead>
              <S.CommentInput
                type="text"
                placeholder="작성자"
                name="writer"
                defaultValue={String(comment?.writer)}
                disabled
              />
              <S.CommentInput
                type="password"
                placeholder="비밀번호"
                name="udPassword"
                onChange={onChangeUdComment}
              />
              <S.CommentStarBox>
                <Rate
                  allowHalf
                  defaultValue={comment?.rating}
                  onChange={onChangeUpdateCommentRate}
                />
              </S.CommentStarBox>
            </S.CommentHead>
            <S.CommentTextareaBox>
              <S.CommentTextarea
                placeholder="수정할 댓글을 입력해주세요."
                name="udComment"
                onChange={onChangeUdComment}
                maxLength={99}
                defaultValue={comment?.contents}
              />
              <S.CommentSubmitBox>
                <S.CommentLengthBox>
                  {`${
                    udComment ? udComment.length : comment?.contents.length
                  } /100`}
                </S.CommentLengthBox>
                <S.CommentModifyBtn onClick={commentEditSubmit}>
                  수정하기
                </S.CommentModifyBtn>
              </S.CommentSubmitBox>
            </S.CommentTextareaBox>
          </S.CommentContainer>
        ) : null}
      </S.CommentViewBox>
      {commentPsModal ? (
        <Modal
          title="Basic Modal"
          open={commentPsModal}
          onOk={commentDeleteSubmit}
          onCancel={closeCommentPsModal}
        >
          <S.CommentPasswordInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangeCommentDelPassword}
          />
        </Modal>
      ) : null}
    </>
  );
};
export default CommentItemUi;
