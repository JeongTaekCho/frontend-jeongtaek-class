import Link from "next/link";
import * as S from "./BoardDetail.styled";
import { IBoardDetailProps } from "./BoardDetail.types";
import { Rate } from "antd";
import "antd/dist/antd.css";
import ReactPlayer from "react-player/youtube";
import CommentItem from "../commentList/commentList.container";
import InfiniteScroll from "react-infinite-scroller";
import DOMPurify from "dompurify";

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
  boardDeleteSubmit,
  goBoardEdit,
  commentError,
  commentRateValue,
  onChangeCommentRate,
  autoClick,
  commentResult,
  infiniteFun,
}: IBoardDetailProps) => {
  return (
    <>
      <S.BoardDetailContainer>
        <S.BoardDetailTitleContainer>
          <S.DetailWriterAndDateBox>
            <S.DetailProfileImg></S.DetailProfileImg>
            <S.DetailTitleAndDate>
              <S.BoardDetailTitle>{data?.fetchBoard.title}</S.BoardDetailTitle>
              <S.DetailWriterAndDate>
                <S.BoardWriter>{data?.fetchBoard.writer}</S.BoardWriter>
                <S.DetailDate>Date : {boardDetailDate}</S.DetailDate>
              </S.DetailWriterAndDate>
            </S.DetailTitleAndDate>
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
          {/* <S.BoardDetailTitle>{data?.fetchBoard.title}</S.BoardDetailTitle> */}
          {data?.fetchBoard.images.map((image, index) => {
            return (
              <S.DetailImage
                src={`https://storage.googleapis.com/${image.replaceAll(
                  " ",
                  "%20"
                )}`}
                key={index}
              />
            );
          })}
          {process.browser ? (
            <S.DetailContentBox
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(String(data?.fetchBoard.contents)),
              }}
            ></S.DetailContentBox>
          ) : (
            <S.DetailContentBox></S.DetailContentBox>
          )}
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
            <S.LikeAndUnLIkeContainer>
              <S.DefaultBtn onClick={autoClick}>
                <img src="/board/likeBtn.png" />
              </S.DefaultBtn>

              <S.LikeText style={{ color: "#828282" }}>
                ????????? 10000??? ??????
              </S.LikeText>
            </S.LikeAndUnLIkeContainer>
          </S.LikeAndUnLikeBox>
        </S.BoardDetailContentContainer>
        <S.BoardBtnContainer>
          <Link href="/boards">
            <S.BoardDefaultBtn>????????????</S.BoardDefaultBtn>
          </Link>
          <S.BoardDefaultBtn onClick={goBoardEdit}>????????????</S.BoardDefaultBtn>
          <S.BoardDefaultBtn onClick={boardDeleteSubmit}>
            ????????????
          </S.BoardDefaultBtn>
        </S.BoardBtnContainer>
        <S.CommentTitleBox>
          <div>
            <img src="/board/commentTitle.png" />
          </div>
          <S.CommentTitle>??????</S.CommentTitle>
        </S.CommentTitleBox>
        <S.CommentContainer>
          <S.CommentHead>
            <S.CommentInput
              type="text"
              placeholder="?????????"
              name="writer"
              value={writer}
              onChange={onChangeComment}
            />
            <S.CommentInput
              type="password"
              placeholder="????????????"
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
              placeholder="??????????????? ?????? ??? ???????????????, ?????? ??????, ?????? ??????, ?????? ?????? ????????? ???????????? ??? ????????? ??? ?????????, ?????? ?????? ???????????? ????????? ??????????????? ????????????. ??????????????????."
              name="comment"
              value={comment}
              onChange={onChangeComment}
              maxLength={99}
            />
            <S.CommentSubmitBox>
              <S.CommentLengthBox>{comment.length}/100</S.CommentLengthBox>
              <S.CommentSubmit onClick={onClickCommentSubmit}>
                ????????????
              </S.CommentSubmit>
            </S.CommentSubmitBox>
          </S.CommentTextareaBox>
        </S.CommentContainer>
        <S.CommentErrorText>
          {commentError ? "????????? ??????????????????." : null}
        </S.CommentErrorText>
      </S.BoardDetailContainer>
      <InfiniteScroll
        useWindow={true}
        pageStart={0}
        loadMore={infiniteFun}
        hasMore={true}
      >
        {commentResult?.fetchBoardComments.map((comment) => {
          return <CommentItem key={comment._id} comment={comment} />;
        })}
      </InfiniteScroll>
    </>
  );
};

export default BoardDetailUi;
