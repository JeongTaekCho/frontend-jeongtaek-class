import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

const staticRoutedPage = () => {
  const [searchData, setSearchData] = useState();

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({
      search: searchData,
      page: Number(event.currentTarget.id),
    }); // 검색에서 refetch할 때, 사용한 search검색어가 저장되어있는 상태이므로 추가로 search 포함하지 않아도 됨

    console.log(event.currentTarget.id);
  };

  const onClickSearch = async () => {
    await refetch({ search: searchData, page: 1 });
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        검색어 :{" "}
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          onChange={onChangeSearch}
        />
        <button onClick={onClickSearch}>검색하기</button>
      </div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>작성자: {el.writer}</span>&nbsp;&nbsp;
          <span>제목: {el.title}</span>&nbsp;&nbsp;
        </div>
      ))}
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
    </>
  );
};

export default staticRoutedPage;
