import { Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IPagination {
  startPage: number;
  lastPage: number;
  pageNum: number;
  onClickPrevPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickNextPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IPaginationRefetch {
  refetch: (value: any) => void;
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
  boardCounts: Pick<IQuery, "fetchBoardsCount">;
}
