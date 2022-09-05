import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import {
  BoardDetailContainer,
  BoardDetailTitleContainer,
  DetailWriterAndDateBox,
  DetailProfileImg,
  DetailWriter,
  DetailDate,
  DetailWriterAndDate,
  ShareAndGpsBox,
  DefaultBtn,
  BoardDetailContentContainer,
  BoardDetailTitle,
  DetailImage,
  DetailContentBox,
  IframeContainer,
  LikeAndUnLikeBox,
  LikeAndUnLIkeContainer,
  LikeText,
  DetailAddressBox,
  DetailAddressText,
  BoardBtnContainer,
  BoardDefaultBtn,
  CommentTitleBox,
  CommentTitle,
  CommentHead,
  CommentInput,
  CommentStarBox,
  CommentTextareaBox,
  CommentTextarea,
  CommentSubmitBox,
  CommentSubmit,
  CommentLengthBox,
  CommentContainer,
  CommentModifyBtn,
} from "../../../../styles/emotion";

//게시글 정보 받아오기
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      user {
        _id
        email
        name
        picture
        userPoint {
          _id
          amount
        }
        createdAt
        updatedAt
        deletedAt
      }
      createdAt
      updatedAt
      deletedAt
      boardAddress {
        _id
        zipcode
        address
        addressDetail
        createdAt
        updatedAt
        deletedAt
      }
    }
  }
`;

//좋아요 개수 업!
const LIKE_UP = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

//싫어요 개수 업!
const LIKE_DOWN = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;

//댓글 작성하기
const CREATE_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      boardId: $boardId
      createBoardCommentInput: $createBoardCommentInput
    ) {
      _id
      writer
      contents
    }
  }
`;

const FETCH_COMMENT = gql`
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      deletedAt
    }
  }
`;

const BoardDetail = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });
  const commentResult = useQuery(FETCH_COMMENT, {
    variables: {
      page: 1,
      boardId: router.query.id,
    },
  });

  //상태관리
  const [onModal, setOnModal] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [disLikeCount, setDisLikeCount] = useState(0);
  const [writer, setWriter] = useState("");
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setLikeCount(data && data.fetchBoard.likeCount);
  }, likeCount);
  useEffect(() => {
    setDisLikeCount(data && data.fetchBoard.dislikeCount);
  }, disLikeCount);

  const onChangeComment = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "writer") {
      setWriter(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "comment") {
      setComment(value);
    }
  };

  const [likeUpApi] = useMutation(LIKE_UP);
  const [disLikeUpApi] = useMutation(LIKE_DOWN);

  const onClickLikeBtn = () => {
    likeUpApi({
      variables: {
        boardId: router.query.id,
      },
    });
    setLikeCount(likeCount + 1);
  };

  const onClickDisLikeBtn = () => {
    disLikeUpApi({
      variables: {
        boardId: router.query.id,
      },
    });
    setDisLikeCount(disLikeCount + 1);
  };

  const onModalBtn = () => {
    setOnModal(!onModal);
  };

  const boardDetailDate = data?.fetchBoard.createdAt.slice(0, 10);

  const [createComment] = useMutation(CREATE_COMMENT);

  const onClickCommentSubmit = async () => {
    const result = await createComment({
      variables: {
        boardId: router.query.id,
        createBoardCommentInput: {
          writer,
          password,
          contents: comment,
          rating: 0.3,
        },
      },
    });
    alert("댓글 작성 완료");
  };

  return (
    <>
      <BoardDetailContainer>
        <BoardDetailTitleContainer>
          <DetailWriterAndDateBox>
            <DetailProfileImg></DetailProfileImg>
            <DetailWriterAndDate>
              <DetailWriter>{data?.fetchBoard.writer}</DetailWriter>
              <DetailDate>Data : {boardDetailDate}</DetailDate>
            </DetailWriterAndDate>
          </DetailWriterAndDateBox>
          <ShareAndGpsBox>
            <DefaultBtn>
              <img src="/board/shareBtn.png"></img>
            </DefaultBtn>
            <DefaultBtn onClick={onModalBtn}>
              <img src="/board/location.png"></img>
            </DefaultBtn>
            {onModal ? (
              <DetailAddressBox>
                <DetailAddressText>
                  {data?.fetchBoard.boardAddress.address}
                </DetailAddressText>
                <DetailAddressText>
                  {data?.fetchBoard.boardAddress.addressDetail}
                </DetailAddressText>
              </DetailAddressBox>
            ) : null}
          </ShareAndGpsBox>
        </BoardDetailTitleContainer>
        <BoardDetailContentContainer>
          <BoardDetailTitle>{data?.fetchBoard.title}</BoardDetailTitle>
          <DetailImage>추후 이미지로 바꿀 예정</DetailImage>
          <DetailContentBox>{data?.fetchBoard.contents}</DetailContentBox>
          <IframeContainer>
            <iframe src={data?.fetchBoard.youtubeUrl}></iframe>
          </IframeContainer>
          <LikeAndUnLikeBox>
            <LikeAndUnLIkeContainer>
              <DefaultBtn onClick={onClickLikeBtn}>
                <img src="/board/likeBtn.png" />
              </DefaultBtn>

              <LikeText style={{ color: "#FFD600" }}>{likeCount}</LikeText>
            </LikeAndUnLIkeContainer>
            <LikeAndUnLIkeContainer>
              <DefaultBtn onClick={onClickDisLikeBtn}>
                <img src="/board/unLikeBtn.png" />
              </DefaultBtn>

              <LikeText style={{ color: "#828282" }}>{disLikeCount}</LikeText>
            </LikeAndUnLIkeContainer>
          </LikeAndUnLikeBox>
        </BoardDetailContentContainer>
        <BoardBtnContainer>
          <BoardDefaultBtn>목록으로</BoardDefaultBtn>
          <BoardDefaultBtn>수정하기</BoardDefaultBtn>
          <BoardDefaultBtn>삭제하기</BoardDefaultBtn>
          <BoardDefaultBtn
            onClick={() => {
              router.push("/boards/boardWrite");
            }}
          >
            게시글 작성(임시)
          </BoardDefaultBtn>
        </BoardBtnContainer>
        <CommentTitleBox>
          <img src="/board/commentTitle.png" />
          <CommentTitle>댓글</CommentTitle>
        </CommentTitleBox>
        <CommentContainer>
          <CommentHead>
            <CommentInput
              type="text"
              placeholder="작성자"
              name="writer"
              value={writer}
              onChange={onChangeComment}
            />
            <CommentInput
              type="password"
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={onChangeComment}
            />
            <CommentStarBox>
              <DefaultBtn>
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
              </DefaultBtn>
            </CommentStarBox>
          </CommentHead>
          <CommentTextareaBox>
            <CommentTextarea
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다. 입력해주세요."
              name="comment"
              value={comment}
              onChange={onChangeComment}
              maxLength="99"
            />
            <CommentSubmitBox>
              <CommentLengthBox>{comment.length}/100</CommentLengthBox>
              <CommentSubmit onClick={onClickCommentSubmit}>
                등록하기
              </CommentSubmit>
            </CommentSubmitBox>
          </CommentTextareaBox>
        </CommentContainer>
        {/* <CommentContainer>
          <CommentHead>
            <CommentInput type="text" placeholder="작성자" />
            <CommentInput type="password" placeholder="비밀번호" />
            <CommentStarBox>
              <DefaultBtn>
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
              </DefaultBtn>
            </CommentStarBox>
          </CommentHead>
          <CommentTextareaBox>
            <CommentTextarea placeholder="수정할 댓글을 입력해주세요." />
            <CommentSubmitBox>
              <CommentLengthBox>10/100</CommentLengthBox>
              <CommentModifyBtn>수정하기</CommentModifyBtn>
            </CommentSubmitBox>
          </CommentTextareaBox>
        </CommentContainer> */}
        {/* <p>{commentResult.data?.fetchBoardComments[0].contents}</p> */}
      </BoardDetailContainer>
    </>
  );
};

export default BoardDetail;
