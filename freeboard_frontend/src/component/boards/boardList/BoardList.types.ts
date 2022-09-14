import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IBoardListUi {
  data?: Pick<IQuery, "fetchBoards">;
  boardBestPost?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onChangeSearchData: (event: ChangeEvent<HTMLInputElement>) => void;
  searchData: string;
}
