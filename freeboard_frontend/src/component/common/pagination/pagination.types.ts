import { MouseEvent } from "react";

export interface IPagination {
  startPage: number;
  lastPage: number;
  pageNum: number;
  onClickPrevPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickNextPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface IPaginationRefetch {
  refetch: () => void;
}