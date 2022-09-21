import { NextRouter, useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import React, { useState, useEffect, ChangeEvent } from "react";
import BoardDetailUi from "./BoardDetail.presenter";

import {
  FETCH_BOARD,
  LIKE_UP,
  LIKE_DOWN,
  CREATE_COMMENT,
  DELETE_BOARD,
  FETCH_COMMENT,
} from "./BoardDetail.querys";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
} from "../../../commons/types/generated/types";
import { errorModal, successModal } from "../../common/modal/modal-function";

const BoardDetail = () => {
  // 상태관리

  const [writer, setWriter] = useState(""); // 작성자
  const [comment, setComment] = useState(""); // 댓글
  const [password, setPassword] = useState(""); // 비밀번호
  const [onModal, setOnModal] = useState(false); // 상세주소 모달
  const [commentError, setCommentError] = useState(false);

  const [commentRateValue, setCommentRateValue] = useState(3);

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
  const { data: commentResult, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_COMMENT, {
    variables: {
      boardId: String(router.query.id),
    },
  });

  // 무한 스크롤

  const infiniteFun = async () => {
    console.log("dd");
    if (commentResult === undefined) return;
    await fetchMore({
      variables: {
        page: Math.ceil(commentResult.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult?.fetchBoardComments,
          ],
        };
      },
    });
  };

  const onChangeCommentRate = (event: number) => {
    setCommentRateValue(event);
  };

  // 게시글 삭제 뮤테이션
  const [deleteBoard] =
    useMutation<Pick<IMutation, "deleteBoard">>(DELETE_BOARD);

  // 좋아요 개수 업 뮤테이션
  const [likeUpApi] = useMutation<Pick<IMutation, "likeBoard">>(LIKE_UP);

  // 싫어요 개수 업 뮤테이션
  const [disLikeUpApi] =
    useMutation<Pick<IMutation, "dislikeBoard">>(LIKE_DOWN);

  // 댓글 생성 뮤테이션
  const [createComment] =
    useMutation<Pick<IMutation, "createBoardComment">>(CREATE_COMMENT);

  // 게시글 삭제 버튼 ONCLICK
  const boardDeleteSubmit = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.id,
        },
      });
      successModal("게시글을 삭제하였습니다.");
      await router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) errorModal(error.message);
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
        setCommentRateValue(0);
        successModal("댓글을 작성하였습니다.");
      } catch (error) {
        if (error instanceof Error) errorModal(error.message);
      }
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
    } catch (error) {
      if (error instanceof Error) alert(error);
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
    } catch (error) {
      if (error instanceof Error) alert(error);
    }
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

  // 주소 상세보기 팝업창 ON/OFF
  const onModalBtn = () => {
    setOnModal(!onModal);
  };

  // 날짜 데이터 슬라이스
  const boardDetailDate: string = data?.fetchBoard.createdAt.slice(0, 10);

  // 게시글 수정페이지로 이동

  const goBoardEdit = async () => {
    await router.push(`/boards/${String(router.query.id)}/edit`);
  };

  const autoClick = async () => {
    for (let i = 0; i < 10000; i++) {
      await onClickLikeBtn();
    }
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
        boardDeleteSubmit={boardDeleteSubmit}
        goBoardEdit={goBoardEdit}
        commentError={commentError}
        commentRateValue={commentRateValue}
        onChangeCommentRate={onChangeCommentRate}
        autoClick={autoClick}
        commentResult={commentResult}
        infiniteFun={infiniteFun}
      />
    </>
  );
};

export default BoardDetail;
