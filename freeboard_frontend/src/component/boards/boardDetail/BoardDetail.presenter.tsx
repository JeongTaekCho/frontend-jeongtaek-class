import Link from "next/link";
import * as S from "./BoardDetail.styled";
import { IBoardDetailProps } from "./BoardDetail.types";
import { Modal, Rate } from "antd";
import "antd/dist/antd.css";
import ReactPlayer from "react-player/youtube";

const BoardDetailUi = ({
  onModal,
  writer,
  comment,
  password,
  onChangeComment,
  onClickLikeBtn,
  onClickDisLikeBtn,
  onModalBtn,
  boardDetailDate,
  onClickCommentSubmit,
  data,
  commentResult,
  commentPsModal,
  commentDelPassword,
  onChangeCommentDelPassword,
  onCommentPsModal,
  closeCommentPsModal,
  commentDeleteSubmit,
  boardDeleteSubmit,
  goBoardEdit,
  onCommentEdit,
  toggleCommentEdit,
  commentEditSubmit,
  onChangeUdComment,
  commentId,
  udComment,
  commentError,
  commentRateValue,
  onChangeCommentRate,
  isEditRateValue,
  onChangeUpdateCommentRate,
}: IBoardDetailProps) => {
  return (
    <>
      <S.BoardDetailContainer>
        <S.BoardDetailTitleContainer>
          <S.DetailWriterAndDateBox>
            <S.DetailProfileImg></S.DetailProfileImg>
            <S.DetailWriterAndDate>
              <S.DetailWriter>{data?.fetchBoard.writer}</S.DetailWriter>
              <S.DetailDate>Date : {boardDetailDate}</S.DetailDate>
            </S.DetailWriterAndDate>
          </S.DetailWriterAndDateBox>
          <S.ShareAndGpsBox>
            <S.DefaultBtn>
              <img src="/board/shareBtn.png"></img>
            </S.DefaultBtn>
            <S.DefaultBtn onClick={onModalBtn}>
              <img src="/board/location.png"></img>
            </S.DefaultBtn>
            {onModal ? (
              <S.DetailAddressBox>
                <S.DetailAddressText>
                  {data?.fetchBoard.boardAddress?.address}
                </S.DetailAddressText>
                <S.DetailAddressText>
                  {data?.fetchBoard.boardAddress?.addressDetail}
                </S.DetailAddressText>
              </S.DetailAddressBox>
            ) : null}
          </S.ShareAndGpsBox>
        </S.BoardDetailTitleContainer>
        <S.BoardDetailContentContainer>
          <S.BoardDetailTitle>{data?.fetchBoard.title}</S.BoardDetailTitle>
          <S.DetailImage>추후 이미지로 바꿀 예정</S.DetailImage>
          <S.DetailContentBox>{data?.fetchBoard.contents}</S.DetailContentBox>
          <S.IframeContainer>
            <ReactPlayer
              url={String(data?.fetchBoard.youtubeUrl)}
              playing
              controls
              muted
              width={720}
              height={480}
            />
          </S.IframeContainer>
          <S.LikeAndUnLikeBox>
            <S.LikeAndUnLIkeContainer>
              <S.DefaultBtn onClick={onClickLikeBtn}>
                <img src="/board/likeBtn.png" />
              </S.DefaultBtn>

              <S.LikeText style={{ color: "#FFD600" }}>
                {data?.fetchBoard.likeCount}
              </S.LikeText>
            </S.LikeAndUnLIkeContainer>
            <S.LikeAndUnLIkeContainer>
              <S.DefaultBtn onClick={onClickDisLikeBtn}>
                <img src="/board/unLikeBtn.png" />
              </S.DefaultBtn>

              <S.LikeText style={{ color: "#828282" }}>
                {data?.fetchBoard.dislikeCount}
              </S.LikeText>
            </S.LikeAndUnLIkeContainer>
          </S.LikeAndUnLikeBox>
        </S.BoardDetailContentContainer>
        <S.BoardBtnContainer>
          <Link href="/boards">
            <S.BoardDefaultBtn>목록으로</S.BoardDefaultBtn>
          </Link>
          <S.BoardDefaultBtn onClick={goBoardEdit}>수정하기</S.BoardDefaultBtn>
          <S.BoardDefaultBtn onClick={boardDeleteSubmit}>
            삭제하기
          </S.BoardDefaultBtn>
        </S.BoardBtnContainer>
        <S.CommentTitleBox>
          <div>
            <img src="/board/commentTitle.png" />
          </div>
          <S.CommentTitle>댓글</S.CommentTitle>
        </S.CommentTitleBox>
        <S.CommentContainer>
          <S.CommentHead>
            <S.CommentInput
              type="text"
              placeholder="작성자"
              name="writer"
              value={writer}
              onChange={onChangeComment}
            />
            <S.CommentInput
              type="password"
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={onChangeComment}
            />
            <S.CommentStarBox>
              <Rate
                allowHalf
                defaultValue={0}
                value={commentRateValue}
                onChange={onChangeCommentRate}
              />
            </S.CommentStarBox>
          </S.CommentHead>
          <S.CommentTextareaBox>
            <S.CommentTextarea
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다. 입력해주세요."
              name="comment"
              value={comment}
              onChange={onChangeComment}
              maxLength={99}
            />
            <S.CommentSubmitBox>
              <S.CommentLengthBox>{comment.length}/100</S.CommentLengthBox>
              <S.CommentSubmit onClick={onClickCommentSubmit}>
                등록하기
              </S.CommentSubmit>
            </S.CommentSubmitBox>
          </S.CommentTextareaBox>
        </S.CommentContainer>
        <S.CommentErrorText>
          {commentError ? "빈값을 입력해주세요." : null}
        </S.CommentErrorText>
      </S.BoardDetailContainer>
      {commentResult?.fetchBoardComments.map((comment) => {
        return (
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
                  <S.CommentViewContent>
                    {comment?.contents}
                  </S.CommentViewContent>
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
              commentId === comment?._id ? (
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
                        {udComment.length}/100
                      </S.CommentLengthBox>
                      <S.CommentModifyBtn onClick={commentEditSubmit}>
                        수정하기
                      </S.CommentModifyBtn>
                    </S.CommentSubmitBox>
                  </S.CommentTextareaBox>
                </S.CommentContainer>
              ) : null
            ) : null}
          </S.CommentViewBox>
        );
      })}
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

export default BoardDetailUi;
