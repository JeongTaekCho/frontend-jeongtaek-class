import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

console.log();

const staticRoutedPage = () => {
  const { data: boardsCount } = useQuery(FETCH_BOARDS_COUNT);
  console.log(boardsCount);
  const [startPage, setStartPage] = useState(1);
  const lastPage =
    boardsCount !== null ? Math.ceil(boardsCount?.fetchBoardsCount / 10) : 0;

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({
      page: Number(event.currentTarget.id),
    });

    console.log(event.currentTarget.id);
  };

  const onClickPrevPage = () => {
    if (startPage > 1) {
      setStartPage(startPage - 10);
      void refetch({
        page: startPage - 10,
      });
    }
  };
  const onClickNextPage = () => {
    if (startPage <= lastPage) {
      setStartPage(startPage + 10);
    }

    void refetch({
      page: startPage + 10,
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>작성자: {el.writer}</span>&nbsp;&nbsp;
          <span>제목: {el.title}</span>&nbsp;&nbsp;
        </div>
      ))}
      {/* <div style={{ display: "flex" }}>
        <span onClick={onClickPrevPage} style={{ cursor: "pointer" }}>
          {" "}
          이전{" "}
        </span>
        {new Array(10).fill(1).map((_, index) => {
          if (index + startPage <= lastPage) {
            return (
              <div key={index + startPage}>
                <span
                  style={{ cursor: "pointer", margin: "15px" }}
                  onClick={onClickPage}
                  id={String(index + startPage)}
                >
                  {index + startPage}
                </span>
              </div>
            );
          } else {
            <span></span>;
          }
        })}
        <span onClick={onClickNextPage} style={{ cursor: "pointer" }}>
          다음
        </span>
      </div> */}
      <div style={{ display: "flex" }}>
        <span onClick={onClickPrevPage} style={{ cursor: "pointer" }}>
          {" "}
          이전{" "}
        </span>
        {new Array(10).fill(1).map((_, index) => {
          // (index + startPage <== lastPage) && (

          // )

          if (index + startPage <= lastPage) {
            return (
              <div key={index + startPage}>
                <span
                  style={{ cursor: "pointer", margin: "15px" }}
                  onClick={onClickPage}
                  id={String(index + startPage)}
                >
                  {index + startPage}
                </span>
              </div>
            );
          } else {
            <span></span>;
          }
        })}
        <span onClick={onClickNextPage} style={{ cursor: "pointer" }}>
          다음
        </span>
      </div>
    </>
  );
};

export default staticRoutedPage;
