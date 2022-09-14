import { useQuery } from "@apollo/client";
import { FETCH_BOARD, FETCH_BEST_BOARD } from "./BoardList.querys";
import BoardListUi from "./BoardList.presenter";
import { IQuery } from "../../../commons/types/generated/types";

const BoardList = () => {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARD);

  const { data: boardBestPost } =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST_BOARD);

  return (
    <>
      <BoardListUi data={data} boardBestPost={boardBestPost} />
    </>
  );
};

export default BoardList;
