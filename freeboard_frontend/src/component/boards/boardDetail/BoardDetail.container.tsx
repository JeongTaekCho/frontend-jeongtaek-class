import { NextRouter, useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import React, { useState, useEffect, ChangeEvent } from "react";
import BoardDetailUi from "./BoardDetail.presenter";

import {
  FETCH_BOARD,
  LIKE_UP,
  LIKE_DOWN,
  CREATE_COMMENT,
  FETCH_COMMENT,
  DELETE_COMMENT,
  DELETE_BOARD,
  EDIT_COMMENT,
} from "./BoardDetail.querys";

const BoardDetail = () => {
  //상태관리

  const [writer, setWriter]: (string | Function)[] = useState(""); // 작성자
  const [comment, setComment]: (string | Function)[] = useState(""); // 댓글
  const [password, setPassword]: (string | Function)[] = useState(""); // 비밀번호
  const [onModal, setOnModal]: (boolean | Function)[] = useState(false); // 상세주소 모달
  const [likeCount, setLikeCount]: (number | Function)[] = useState(0); // 좋아요 개수
  const [disLikeCount, setDisLikeCount]: (number | Function)[] = useState(0); // 싫어요 개수
  const [commentPsModal, setCommentPsModal]: (boolean | Function)[] =
    useState(false); // 댓글 삭제시 비밀번호 모달
  const [commentDelPassword, setCommentDelPassword]: (string | Function)[] =
    useState(""); // 댓글 삭제시 비밓번호
  const [commentId, setCommentId]: (string | Function)[] = useState("");
  const [onCommentEdit, setOnCommentEdit]: (boolean | Function)[] =
    useState(false);
  const [udPassword, setUdPassword]: (string | Function)[] = useState(""); // 비밀번호
  const [udComment, setUdComment]: (string | Function)[] = useState(""); // 댓글

  // 유즈 라우터
  const router: NextRouter = useRouter();

  // 게시글 데이터 쿼리
  const { data }: { data: any } = useQuery(FETCH_BOARD, {
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

  // 댓글 수정 뮤테이션
  const [editComment] = useMutation(EDIT_COMMENT);

  // 댓글 비밀번호 팝업 ON
  const onCommentPsModal = async (event: any) => {
    setCommentPsModal(true);
    setCommentId(event.currentTarget.id);
  };
  // 댓글 비밀번호 팝업 Off
  const CloseCommentPsModal = () => {
    setCommentPsModal(false);
  };

  //댓글 수정 박스 ON/OFF
  const toggleCommentEdit = (event: any) => {
    setCommentId(event.currentTarget.id);
    setOnCommentEdit(!onCommentEdit);
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
    setWriter("");
    setComment("");
    setPassword("");
  };

  //댓글 수정 버튼 ONCLICK

  const commentEditSubmit = async () => {
    try {
      interface ImyVariables {
        boardCommentId: string;
        password: string;
        updateBoardCommentInput: {
          rating: 1;
          content: string;
        };
      }
      const myVariables = {
        boardCommentId: commentId,
        password: "",
        updateBoardCommentInput: {
          rating: 1,
          contents: udComment,
        },
      };
      if (udPassword) myVariables.password = udPassword;
      if (udComment) myVariables.updateBoardCommentInput.contents = udComment;
      await editComment({
        variables: myVariables,
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: {
              boardId: router.query.id,
            },
          },
        ],
      });
      setUdComment("");
      setUdPassword("");
      setOnCommentEdit(false);
    } catch (error) {
      alert(error);
    }
  };

  // 댓글 삭제 버튼 ONCLICK
  const commentDeleteSubmit = async (event: any) => {
    await commentDelete({
      variables: {
        password: commentDelPassword,
        boardCommentId: commentId,
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
  const onChangeCommentDelPassword = (event: any) => {
    setCommentDelPassword(event.target.value);
  };

  // 댓글 인풋 ONCHANGE
  const onChangeComment = (event: ChangeEvent<HTMLInputElement>) => {
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

  // 댓글수정 인풋 ONCHANGE
  const onChangeUdComment = (event: any) => {
    const {
      target: { name, value },
    } = event;

    if (name === "udPassword") {
      setUdPassword(value);
    } else if (name === "udComment") {
      setUdComment(value);
    }
  };

  // 주소 상세보기 팝업창 ON/OFF
  const onModalBtn = () => {
    setOnModal(!onModal);
    let a = 1;
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
        onCommentEdit={onCommentEdit}
        toggleCommentEdit={toggleCommentEdit}
        commentEditSubmit={commentEditSubmit}
        onChangeUdComment={onChangeUdComment}
        commentId={commentId}
        udComment={udComment}
      />
    </>
  );
};

export default BoardDetail;
