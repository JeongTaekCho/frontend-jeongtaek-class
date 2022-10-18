import { gql, useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FETCH_BOARD = gql`
  query ($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

const staticRoutedPage = () => {
  const client = useApolloClient();

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const router = useRouter();

  const onClickPage = (boardId) => (event: MouseEvent<HTMLSpanElement>) => {
    void router.push(`32-08-data-prefetch-moved/${boardId}`);
  };

  const prefetchBoard = (boardId: string) => async () => {
    // useQuery
    // useLazyQuery
    // useApolloClient

    await client.query({
      query: FETCH_BOARD,
      variables: {
        boardId,
      },
    });

    console.log(data);
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>작성자: {el.writer}</span>&nbsp;&nbsp;
          <span
            onClick={onClickPage(el._id)}
            onMouseOver={prefetchBoard(el._id)}
          >
            제목: {el.title}
          </span>
          &nbsp;&nbsp;
        </div>
      ))}
    </>
  );
};

export default staticRoutedPage;
