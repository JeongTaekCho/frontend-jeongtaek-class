import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IBoardListUi {
  data?: Pick<IQuery, "fetchBoards">;
  boardBestPost?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onChangeSearchData: (event: ChangeEvent<HTMLInputElement>) => void;
  searchData: string;
  refetch: () => void;
  onClickSearchBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeDate: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
  boardCounts?: Pick<IQuery, "fetchBoardsCount">;
}
