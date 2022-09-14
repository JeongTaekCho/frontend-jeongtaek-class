import { NextRouter, useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import React, { useState, useEffect, ChangeEvent, MouseEvent } from "react";
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
import {
  IMutation,
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
} from "../../../commons/types/generated/types";
import { ImyVariables } from "./BoardDetail.types";

const BoardDetail = () => {
  // 상태관리

  const [writer, setWriter] = useState(""); // 작성자
  const [comment, setComment] = useState(""); // 댓글
  const [password, setPassword] = useState(""); // 비밀번호
  const [onModal, setOnModal] = useState(false); // 상세주소 모달
  const [commentPsModal, setCommentPsModal] = useState(false); // 댓글 삭제시 비밀번호 모달
  const [commentDelPassword, setCommentDelPassword] = useState(""); // 댓글 삭제시 비밓번호
  const [commentId, setCommentId] = useState("");
  const [onCommentEdit, setOnCommentEdit] = useState(false);
  const [udPassword, setUdPassword] = useState(""); // 비밀번호
  const [udComment, setUdComment] = useState(""); // 댓글
  const [commentError, setCommentError] = useState(false);
  const [commentRateValue, setCommentRateValue] = useState(0);
  const [isEditRateValue, setIsEditCommentRateValue] = useState(0);

  // 유즈 라우터
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (writer && comment && password) {
      setCommentError(false);
    }
  }, [writer, comment, password]);

  // 게시글 데이터 쿼리
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.id),
      },
    }
  );

  // 댓글 데이터 쿼리
  const commentResult = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENT, {
    variables: {
      boardId: String(router.query.id),
    },
  });

  const onChangeCommentRate = (event: number) => {
    setCommentRateValue(event);
  };
  const onChangeUpdateCommentRate = (event: number) => {
    setIsEditCommentRateValue(event);
  };

  // 게시글 삭제 뮤테이션
  const [deleteBoard] =
    useMutation<Pick<IMutation, "deleteBoard">>(DELETE_BOARD);

  // 댓글 삭제 뮤테이션
  const [commentDelete] =
    useMutation<Pick<IMutation, "deleteBoardComment">>(DELETE_COMMENT);

  // 좋아요 개수 업 뮤테이션
  const [likeUpApi] = useMutation<Pick<IMutation, "likeBoard">>(LIKE_UP);

  // 싫어요 개수 업 뮤테이션
  const [disLikeUpApi] =
    useMutation<Pick<IMutation, "dislikeBoard">>(LIKE_DOWN);

  // 댓글 생성 뮤테이션
  const [createComment] =
    useMutation<Pick<IMutation, "createBoardComment">>(CREATE_COMMENT);

  // 댓글 수정 뮤테이션
  const [editComment] =
    useMutation<Pick<IMutation, "updateBoardComment">>(EDIT_COMMENT);

  // 댓글 비밀번호 팝업 ON
  const onCommentPsModal = async (event: MouseEvent<HTMLButtonElement>) => {
    setCommentPsModal(true);
    setCommentId(event.currentTarget.id);
  };
  // 댓글 비밀번호 팝업 Off
  const closeCommentPsModal = () => {
    setCommentPsModal(false);
  };

  // 댓글 수정 박스 ON/OFF
  const toggleCommentEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setCommentId(event.currentTarget.id);
    setOnCommentEdit(!onCommentEdit);
  };

  // 게시글 삭제 버튼 ONCLICK
  const boardDeleteSubmit = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.id,
        },
      });
      alert("게시글 삭제가 완료되었습니다.");
      router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) alert(error);
    }
  };

  // 댓글 작성 버튼 ONCLICK

  const onClickCommentSubmit = async () => {
    if (!writer || !comment || !password) {
      setCommentError(true);
    } else {
      try {
        await createComment({
          variables: {
            boardId: router.query.id,
            createBoardCommentInput: {
              writer,
              password,
              contents: comment,
              rating: commentRateValue,
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
      } catch (error) {
        if (error instanceof Error) alert(error);
      }
    }
  };

  // 댓글 수정 버튼 ONCLICK

  const commentEditSubmit = async () => {
    try {
      const myVariables: ImyVariables = {
        boardCommentId: commentId,
        updateBoardCommentInput: {},
      };
      if (udPassword) myVariables.password = udPassword;
      if (udComment) myVariables.updateBoardCommentInput.contents = udComment;
      if (udComment)
        myVariables.updateBoardCommentInput.rating = isEditRateValue;
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
    } catch (error: any) {
      alert(error);
    }
  };

  // 댓글 삭제 버튼 ONCLICK
  const commentDeleteSubmit = async () => {
    try {
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
    } catch (error) {
      alert(error);
    }
  };

  // 좋아요 버튼 ONCLICK
  const onClickLikeBtn = async () => {
    try {
      await likeUpApi({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.id,
            },
          },
        ],
      });
    } catch (error: any) {
      alert(error);
    }
  };

  // 싫어요 버튼 ONCLICK
  const onClickDisLikeBtn = async () => {
    try {
      await disLikeUpApi({
        variables: {
          boardId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.id,
            },
          },
        ],
      });
    } catch (error: any) {
      alert(error);
    }
  };

  // 댓글 비밀번호 ONCHANGE
  const onChangeCommentDelPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentDelPassword(event.target.value);
  };

  // 댓글 인풋 ONCHANGE
  const onChangeComment = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
  const onChangeUdComment = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
  };

  // 날짜 데이터 슬라이스
  const boardDetailDate: string = data?.fetchBoard.createdAt.slice(0, 10);

  // 게시글 수정페이지로 이동

  const goBoardEdit = () => {
    router.push(`/boards/${router.query.id}/edit`);
  };

  return (
    <>
      <BoardDetailUi
        onModal={onModal}
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
        closeCommentPsModal={closeCommentPsModal}
        commentDeleteSubmit={commentDeleteSubmit}
        boardDeleteSubmit={boardDeleteSubmit}
        goBoardEdit={goBoardEdit}
        onCommentEdit={onCommentEdit}
        toggleCommentEdit={toggleCommentEdit}
        commentEditSubmit={commentEditSubmit}
        onChangeUdComment={onChangeUdComment}
        commentId={commentId}
        udComment={udComment}
        commentError={commentError}
        commentRateValue={commentRateValue}
        onChangeCommentRate={onChangeCommentRate}
        isEditRateValue={isEditRateValue}
        onChangeUpdateCommentRate={onChangeUpdateCommentRate}
      />
    </>
  );
};

export default BoardDetail;
