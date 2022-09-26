import Link from "next/link";
import * as S from "./BoardDetail.styled";
import { IBoardDetailProps } from "./BoardDetail.types";
import { Rate } from "antd";
import "antd/dist/antd.css";
import ReactPlayer from "react-player/youtube";
import CommentItem from "../commentList/commentList.container";
import InfiniteScroll from "react-infinite-scroller";

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
  console.log(commentResult);

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
          <S.DetailImage
            src={`https://storage.googleapis.com/${data?.fetchBoard.images}`}
          />
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
            <S.LikeAndUnLIkeContainer>
              <S.DefaultBtn onClick={autoClick}>
                <img src="/board/likeBtn.png" />
              </S.DefaultBtn>

              <S.LikeText style={{ color: "#828282" }}>
                좋아요 10000개 찍기
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
      {/* <S.CommentListBox> */}
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
      {/* </S.CommentListBox> */}
    </>
  );
};

export default BoardDetailUi;
