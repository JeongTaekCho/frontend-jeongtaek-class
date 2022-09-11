import { useQuery } from "@apollo/client";
import { FETCH_BOARD, FETCH_BEST_BOARD } from "./BoardList.querys";
import BoardListUi from "./BoardList.presenter";

const BoardList = () => {
  const { data }: { data: any } = useQuery(FETCH_BOARD);

  const boardBestPost: any = useQuery(FETCH_BEST_BOARD);

  return (
    <>
      <BoardListUi data={data} boardBestPost={boardBestPost} />
    </>
  );
};

export default BoardList;
