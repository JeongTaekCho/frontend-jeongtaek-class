import * as S from "./BoardDetail.styled";

const BoardDetailUi = ({
  onModal,
  likeCount,
  disLikeCount,
  writer,
  comment,
  password,
  onChangeComment,
  onClickLikeBtn,
  onClickDisLikeBtn,
  onModalBtn,
  boardDetailDate,
  onClickCommentSubmit,
  goBoardWrite,
  data,
  commentResult,
  commentArray,
}) => {
  console.log(commentResult);
  return (
    <>
      <S.BoardDetailContainer>
        <S.BoardDetailTitleContainer>
          <S.DetailWriterAndDateBox>
            <S.DetailProfileImg></S.DetailProfileImg>
            <S.DetailWriterAndDate>
              <S.DetailWriter>{data?.fetchBoard.writer}</S.DetailWriter>
              <S.DetailDate>Data : {boardDetailDate}</S.DetailDate>
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
                  {data?.fetchBoard.boardAddress.address}
                </S.DetailAddressText>
                <S.DetailAddressText>
                  {data?.fetchBoard.boardAddress.addressDetail}
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
            <iframe src={data?.fetchBoard.youtubeUrl}></iframe>
          </S.IframeContainer>
          <S.LikeAndUnLikeBox>
            <S.LikeAndUnLIkeContainer>
              <S.DefaultBtn onClick={onClickLikeBtn}>
                <img src="/board/likeBtn.png" />
              </S.DefaultBtn>

              <S.LikeText style={{ color: "#FFD600" }}>{likeCount}</S.LikeText>
            </S.LikeAndUnLIkeContainer>
            <S.LikeAndUnLIkeContainer>
              <S.DefaultBtn onClick={onClickDisLikeBtn}>
                <img src="/board/unLikeBtn.png" />
              </S.DefaultBtn>

              <S.LikeText style={{ color: "#828282" }}>
                {disLikeCount}
              </S.LikeText>
            </S.LikeAndUnLIkeContainer>
          </S.LikeAndUnLikeBox>
        </S.BoardDetailContentContainer>
        <S.BoardBtnContainer>
          <S.BoardDefaultBtn>목록으로</S.BoardDefaultBtn>
          <S.BoardDefaultBtn>수정하기</S.BoardDefaultBtn>
          <S.BoardDefaultBtn>삭제하기</S.BoardDefaultBtn>
          <S.BoardDefaultBtn onClick={goBoardWrite}>
            게시글 작성(임시)
          </S.BoardDefaultBtn>
        </S.BoardBtnContainer>
        <S.CommentTitleBox>
          <img src="/board/commentTitle.png" />
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
              <S.DefaultBtn>
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                    fill="#BDBDBD"
                  />
                </svg>
              </S.DefaultBtn>
            </S.CommentStarBox>
          </S.CommentHead>
          <S.CommentTextareaBox>
            <S.CommentTextarea
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다. 입력해주세요."
              name="comment"
              value={comment}
              onChange={onChangeComment}
              maxLength="99"
            />
            <S.CommentSubmitBox>
              <S.CommentLengthBox>{comment.length}/100</S.CommentLengthBox>
              <S.CommentSubmit onClick={onClickCommentSubmit}>
                등록하기
              </S.CommentSubmit>
            </S.CommentSubmitBox>
          </S.CommentTextareaBox>
        </S.CommentContainer>
        {/* <S.CommentContainer>
          <S.CommentHead>
            <S.CommentInput type="text" placeholder="작성자" />
            <S.CommentInput type="password" placeholder="비밀번호" />
            <S.CommentStarBox>
              <S.DefaultBtn>
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                    fill="#BDBDBD"
                  />
                </svg>
              </S.DefaultBtn>
            </S.CommentStarBox>
          </S.CommentHead>
          <S.CommentTextareaBox>
            <S.CommentTextarea placeholder="수정할 댓글을 입력해주세요." />
            <S.CommentSubmitBox>
              <S.CommentLengthBox>10/100</S.CommentLengthBox>
              <S.CommentModifyBtn>수정하기</S.CommentModifyBtn>
            </S.CommentSubmitBox>
          </S.CommentTextareaBox>
        </S.CommentContainer> */}
        {/* <p>{commentResult.data?.fetchBoardComments[0].contents}</p> */}
      </S.BoardDetailContainer>
      {commentResult?.fetchBoardComments.map((comment, i) => {
        return (
          <S.CommentViewContainer key={comment.i}>
            <S.CommentViewProfileBox>
              <S.CommentViewProfileImg></S.CommentViewProfileImg>
              <S.CommentRatingContentBox>
                <S.CommentNameAndRating>
                  <S.CommentViewName>{comment?.writer}</S.CommentViewName>
                  <S.CommentRatingBox>
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                        fill="#FFD600"
                      />
                    </svg>
                  </S.CommentRatingBox>
                </S.CommentNameAndRating>
                <S.CommentViewContent>
                  진짜 유익하고 좋은 정보입니다.
                </S.CommentViewContent>
                <S.CommentViewDate>2021.02.22</S.CommentViewDate>
              </S.CommentRatingContentBox>
            </S.CommentViewProfileBox>
            <S.CommentViewBtnBox>
              <S.DefaultBtn>
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
              <S.DefaultBtn>
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
              </S.DefaultBtn>
            </S.CommentViewBtnBox>
          </S.CommentViewContainer>
        );
      })}
    </>
  );
};

export default BoardDetailUi;
