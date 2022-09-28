import { useQuery } from "@apollo/client";
import { FETCH_BOARD, FETCH_BEST_BOARD } from "./BoardList.querys";
import BoardListUi from "./BoardList.presenter";
import { IQuery } from "../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent, useState } from "react";
import _ from "lodash";

const BoardList = () => {
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARD);
  const [searchData, setSearchData] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [keyword, setKeyword] = useState("");
  const [pageNum, setPageNum] = useState(0);

  const onClickSearchBoard = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await refetch({
      startDate,
      endDate,
      // search: searchData,
    });
  };

  const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setStartDate(
      new Intl.DateTimeFormat("ko-KR").format(new Date(event[0]._d))
    );
    setEndDate(new Intl.DateTimeFormat("ko-KR").format(new Date(event[1]._d)));
  };

  const searchGet = _.debounce((value) => {
    void refetch({
      page: 1,
      search: value,
    });
    setKeyword(value);
    setPageNum(0);
  }, 500);

  const onChangeSearchData = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
    searchGet(event.target.value);
  };

  const { data: boardBestPost } =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST_BOARD);

  console.log(searchData, startDate, endDate);

  return (
    <>
      <BoardListUi
        data={data}
        boardBestPost={boardBestPost}
        onChangeSearchData={onChangeSearchData}
        searchData={searchData}
        refetch={refetch}
        onClickSearchBoard={onClickSearchBoard}
        onChangeDate={onChangeDate}
        keyword={keyword}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </>
  );
};

export default BoardList;
