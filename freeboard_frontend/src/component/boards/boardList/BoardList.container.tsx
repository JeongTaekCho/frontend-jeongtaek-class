import { useQuery } from "@apollo/client";
import { FETCH_BOARD, FETCH_BEST_BOARD } from "./BoardList.querys";
import BoardListUi from "./BoardList.presenter";
import { IQuery } from "../../../commons/types/generated/types";
import { ChangeEvent, useState } from "react";

const BoardList = () => {
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARD);
  const [searchData, setSearchData] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  const onClickSearchBoard = () => {
    refetch({
      // startDate,
      // endDate,
      search: searchData,
    });
  };

  // const onChangeDate = (event) => {

  //   console.log(new Date(event[0]._d).toLocaleString());
  // };

  const onChangeSearchData = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };

  const searchRefetch = () => {
    refetch({});
  };

  const { data: boardBestPost } =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST_BOARD);

  return (
    <>
      <BoardListUi
        data={data}
        boardBestPost={boardBestPost}
        onChangeSearchData={onChangeSearchData}
        searchData={searchData}
        refetch={refetch}
        onClickSearchBoard={onClickSearchBoard}
        // onChangeDate={onChangeDate}
      />
    </>
  );
};

export default BoardList;
