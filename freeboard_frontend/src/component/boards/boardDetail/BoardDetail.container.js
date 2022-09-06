import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import BoardDetailUi from "./BoardDetail.presenter";

import {
  FETCH_BOARD,
  LIKE_UP,
  LIKE_DOWN,
  CREATE_COMMENT,
  FETCH_COMMENT,
  DELETE_COMMENT,
} from "./BoardDetail.querys";

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
  const [commentArray, setCommentArray] = useState([]);
  const [commentPsModal, setCommentPsModal] = useState(false);
  const [commentDelPassword, setCommentDelPassword] = useState("");

  const onChangeCommentDelPassword = (event) => {
    setCommentDelPassword(event.target.value);
  };
  const onCommentPsModal = () => {
    setCommentPsModal(true);
  };
  const CloseCommentPsModal = () => {
    setCommentPsModal(false);
  };
  const [commentDelete] = useMutation(DELETE_COMMENT);

  const commentDeleteSubmit = () => {
    commentDelete({
      variables: {
        password: commentDelPassword,
        boardCommentId: "6316115e6cf4690029959f46",
      },
    });
    alert("댓글 삭제 완료");
  };

  useEffect(() => {
    setLikeCount(data && data.fetchBoard.likeCount);
  }, [data]);
  useEffect(() => {
    setDisLikeCount(data && data.fetchBoard.dislikeCount);
  }, [data]);
  useEffect(() => {
    setCommentArray(commentResult.data && commentResult.data.fetchBoardComment);
  }, []);

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

  const goBoardWrite = () => {
    router.push("/boards/boardWrite");
  };

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
    setCommentArray([commentResult.data?.fetchBoardComment]);
    alert("댓글 작성 완료");
    router.reload();
  };
  return (
    <>
      <BoardDetailUi
        onModal={onModal}
        likeCount={likeCount}
        disLikeCount={disLikeCount}
        writer={writer}
        comment={comment}
        password={password}
        onChangeComment={onChangeComment}
        onClickLikeBtn={onClickLikeBtn}
        onClickDisLikeBtn={onClickDisLikeBtn}
        onModalBtn={onModalBtn}
        boardDetailDate={boardDetailDate}
        onClickCommentSubmit={onClickCommentSubmit}
        goBoardWrite={goBoardWrite}
        data={data}
        router={router}
        commentResult={commentResult.data}
        commentArray={commentArray}
        commentPsModal={commentPsModal}
        commentDelPassword={commentDelPassword}
        onChangeCommentDelPassword={onChangeCommentDelPassword}
        onCommentPsModal={onCommentPsModal}
        CloseCommentPsModal={CloseCommentPsModal}
        commentDeleteSubmit={commentDeleteSubmit}
      />
    </>
  );
};

export default BoardDetail;
