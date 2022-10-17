import { gql, useQuery } from "@apollo/client";
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

const staticRoutedPage = () => {
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

  return (
    <>
      {
        // 임시 배열 10개를 생성하며 데이터가 없을 때도 높이 30px을 유지하여 reflow 방지
        (data?.fetchBoards ?? new Array(10).fill(1)).map((el) => (
          <div key={el._id} style={{ height: "30px" }}>
            <span>작성자: {el.writer}</span>&nbsp;&nbsp;
            <span>제목: {el.title}</span>&nbsp;&nbsp;
          </div>
        ))
      }
      <div style={{ display: "flex" }}>
        {new Array(10).fill(1).map((_, index) => (
          <div key={index + 1}>
            <span
              style={{ cursor: "pointer", margin: "15px" }}
              onClick={onClickPage}
              id={String(index + 1)}
            >
              {index + 1}
            </span>
          </div>
        ))}
      </div>

      <span style={{ cursor: "pointer" }} onClick={onClickPage} id="1">
        {" "}
        1{" "}
      </span>
      <span style={{ cursor: "pointer" }} onClick={onClickPage} id="2">
        {" "}
        2{" "}
      </span>
      <span style={{ cursor: "pointer" }} onClick={onClickPage} id="3">
        {" "}
        3{" "}
      </span>
    </>
  );
};

export default staticRoutedPage;
