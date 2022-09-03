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
  IfrmaeContainer,
  LikeAndUnLikeBox,
  LikeAndUnLIkeContainer,
  LikeText,
  DetailAddressBox,
  DetailAddressText,
} from "../../../../styles/emotion";

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
      # user
      # createAt
      updatedAt
      # deletedAt
      boardAddress {
        # _id
        zipcode
        address
        addressDetail
        # createAt
        # updateAt
        # deleteAt
      }
    }
  }
`;

const LIKE_UP = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
const LIKE_DOWN = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;

const BoardDetail = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  const [onModal, setOnModal] = useState(false);

  const [likeUpApi] = useMutation(LIKE_UP);
  const [disLikeUpApi] = useMutation(LIKE_DOWN);

  const onClickLikeBtn = () => {
    likeUpApi({
      variables: {
        boardId: router.query.id,
      },
    });
  };

  const onClickDisLikeBtn = () => {
    disLikeUpApi({
      variables: {
        boardId: router.query.id,
      },
    });
  };

  const onModalBtn = () => {
    setOnModal(!onModal);
  };

  console.log(data && data);

  return (
    <>
      <BoardDetailContainer>
        <BoardDetailTitleContainer>
          <DetailWriterAndDateBox>
            <DetailProfileImg></DetailProfileImg>
            <DetailWriterAndDate>
              <DetailWriter>{data?.fetchBoard.writer}</DetailWriter>
              <DetailDate>Data : 2022.09.02</DetailDate>
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
          <IfrmaeContainer>{/* <iframe src=""></iframe> */}</IfrmaeContainer>
          <LikeAndUnLikeBox>
            <LikeAndUnLIkeContainer>
              <DefaultBtn onClick={onClickLikeBtn}>
                <img src="/board/likeBtn.png" />
              </DefaultBtn>

              <LikeText style={{ color: "#FFD600" }}>
                {data?.fetchBoard.likeCount}
              </LikeText>
            </LikeAndUnLIkeContainer>
            <LikeAndUnLIkeContainer>
              <DefaultBtn onClick={onClickDisLikeBtn}>
                <img src="/board/unLikeBtn.png" />
              </DefaultBtn>

              <LikeText style={{ color: "#828282" }}>
                {data?.fetchBoard.dislikeCount}
              </LikeText>
            </LikeAndUnLIkeContainer>
          </LikeAndUnLikeBox>
        </BoardDetailContentContainer>
      </BoardDetailContainer>
    </>
  );
};

export default BoardDetail;
