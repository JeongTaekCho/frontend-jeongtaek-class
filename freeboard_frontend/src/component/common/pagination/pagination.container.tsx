import { MouseEvent, useState } from "react";
import PaginationUi from "./pagination.presetner";
import { IPaginationRefetch } from "./pagination.types";
import { FETCH_BOARDS_COUNTS } from "./pagination.querys";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";

const Pagination = ({ refetch, pageNum, setPageNum }: IPaginationRefetch) => {
  const [startPage, setStartPage] = useState(1);

  const { data: boardCounts } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNTS);

  const lastPage = Math.ceil(Number(boardCounts?.fetchBoardsCount) / 10);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    refetch({
      page: Number(event.currentTarget.id),
    });

    setPageNum(Number(event.currentTarget.value));
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    refetch({
      page: startPage - 10,
    });
    setPageNum(0);
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
    }

    refetch({
      page: startPage + 10,
    });
    setPageNum(0);
  };

  return (
    <PaginationUi
      startPage={startPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickPage={onClickPage}
      lastPage={lastPage}
      pageNum={pageNum}
    />
  );
};

export default Pagination;
