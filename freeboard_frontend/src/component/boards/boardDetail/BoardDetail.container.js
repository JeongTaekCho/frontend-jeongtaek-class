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
  DELETE_BOARD,
} from "./BoardDetail.querys";

const BoardDetail = () => {
  //상태관리

  const [writer, setWriter] = useState(""); // 작성자
  const [comment, setComment] = useState(""); // 댓글
  const [password, setPassword] = useState(""); // 비밀번호
  const [onModal, setOnModal] = useState(false); // 상세주소 모달
  const [likeCount, setLikeCount] = useState(0); // 좋아요 개수
  const [disLikeCount, setDisLikeCount] = useState(0); // 싫어요 개수
  const [commentPsModal, setCommentPsModal] = useState(false); // 댓글 삭제시 비밀번호 모달
  const [commentDelPassword, setCommentDelPassword] = useState(""); // 댓글 삭제시 비밓번호

  // 유즈 라우터
  const router = useRouter();

  // 게시글 데이터 쿼리
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  // 댓글 데이터 쿼리
  const commentResult = useQuery(FETCH_COMMENT, {
    variables: {
      boardId: router.query.id,
    },
  });

  // 좋아요 싫어요 카운트 변경시 유즈이펙트
  useEffect(() => {
    setLikeCount(data && data.fetchBoard.likeCount);
  }, [data]);

  useEffect(() => {
    setDisLikeCount(data && data.fetchBoard.dislikeCount);
  }, [data]);

  // 게시글 삭제 뮤테이션
  const [deleteBoard] = useMutation(DELETE_BOARD);

  // 댓글 삭제 뮤테이션
  const [commentDelete] = useMutation(DELETE_COMMENT);

  // 좋아요 개수 업 뮤테이션
  const [likeUpApi] = useMutation(LIKE_UP);

  // 싫어요 개수 업 뮤테이션
  const [disLikeUpApi] = useMutation(LIKE_DOWN);

  // 댓글 생성 뮤테이션
  const [createComment] = useMutation(CREATE_COMMENT);

  // 댓글 비밀번호 팝업 ON
  const onCommentPsModal = async (event) => {
    setCommentPsModal(true);
  };
  // 댓글 비밀번호 팝업 Off
  const CloseCommentPsModal = () => {
    setCommentPsModal(false);
  };

  // 게시글 삭제 버튼 ONCLICK
  const boardDeleteSubmit = async () => {
    deleteBoard({
      variables: {
        boardId: router.query.id,
      },
    });
    alert("게시글 삭제가 완료되었습니다.");
    router.push(`/boards`);
  };

  // 댓글 작성 버튼 ONCLICK
  const onClickCommentSubmit = async () => {
    console.log(router);
    await createComment({
      variables: {
        boardId: router.query.id,
        createBoardCommentInput: {
          writer,
          password,
          contents: comment,
          rating: 1,
        },
      },
      refetchQueries: [
        {
          query: FETCH_COMMENT,
          variables: {
            boardId: router.query.id,
          },
        },
      ],
    });
    // router.reload();
  };

  // 댓글 삭제 버튼 ONCLICK
  const commentDeleteSubmit = async (event) => {
    console.log(event);
    await commentDelete({
      variables: {
        password: commentDelPassword,
        boardCommentId: event.target.id,
      },
    });
    setCommentPsModal(false);
  };

  // 좋아요 버튼 ONCLICK
  const onClickLikeBtn = () => {
    likeUpApi({
      variables: {
        boardId: router.query.id,
      },
    });
    setLikeCount(likeCount + 1);
  };

  // 싫어요 버튼 ONCLICK
  const onClickDisLikeBtn = () => {
    disLikeUpApi({
      variables: {
        boardId: router.query.id,
      },
    });
    setDisLikeCount(disLikeCount + 1);
  };

  // 댓글 비밀번호 ONCHANGE
  const onChangeCommentDelPassword = (event) => {
    setCommentDelPassword(event.target.value);
  };

  // 댓글 인풋 ONCHANGE
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

  // 주소 상세보기 팝업창 ON/OFF
  const onModalBtn = () => {
    setOnModal(!onModal);
  };

  // 날짜 데이터 슬라이스
  const boardDetailDate = data?.fetchBoard.createdAt.slice(0, 10);

  // 게시글 수정페이지로 이동

  const goBoardEdit = () => {
    router.push(`/boards/${router.query.id}/edit`);
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
        data={data}
        commentResult={commentResult.data}
        commentPsModal={commentPsModal}
        commentDelPassword={commentDelPassword}
        onChangeCommentDelPassword={onChangeCommentDelPassword}
        onCommentPsModal={onCommentPsModal}
        CloseCommentPsModal={CloseCommentPsModal}
        commentDeleteSubmit={commentDeleteSubmit}
        boardDeleteSubmit={boardDeleteSubmit}
        goBoardEdit={goBoardEdit}
      />
    </>
  );
};

export default BoardDetail;
