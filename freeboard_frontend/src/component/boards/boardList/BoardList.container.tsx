import { useQuery } from "@apollo/client";
import { FETCH_BOARD, FETCH_BEST_BOARD } from "./BoardList.querys";
import BoardListUi from "./BoardList.presenter";
import { IQuery } from "../../../commons/types/generated/types";
import { ChangeEvent, useState } from "react";

const BoardList = () => {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARD);
  const [searchData, setSearchData] = useState("");
  console.log(searchData);

  const onChangeSearchData = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
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
      />
    </>
  );
};

export default BoardList;
