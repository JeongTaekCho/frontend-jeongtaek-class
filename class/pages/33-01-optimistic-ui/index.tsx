import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { string } from "yup";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage() {
  const { data: boardDatas } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: {
      boardId: "이따가 하드코딩",
    },
  });

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLike = async () => {
    await likeBoard({
      variables: {
        boardId: "하드코딩예정",
      },
      // update(cache, { data }) {
      //   cache.writeQuery({
      //     query: FETCH_BOARD,
      //     variables: { boardId: "하드코딩" },
      //     data: {
      //       fetchBoard: {
      //         _id: "하드코딩하기",
      //         __typename: "Board",
      //         likeCount: data?.likeBoard,
      //       },
      //     },
      //   });
      // },
      optimisticResponse: {
        likeBoard: (boardDatas?.fetchBoard.likeCount ?? 0) + 1,
      },
    });
  };

  return (
    <>
      <div>좋아요 개수 : {boardDatas?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기</button>
    </>
  );
}
