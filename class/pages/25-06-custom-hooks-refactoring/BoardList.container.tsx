import { useQuery } from "@apollo/client";
import { FETCH_BOARD, FETCH_BEST_BOARD } from "./BoardList.querys";
import BoardListUi from "./BoardList.presenter";
import { IQuery } from "../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import _ from "lodash";
import { FETCH_BOARDS_COUNTS } from "../../common/pagination/pagination.querys";
import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";
import { useSearch } from "../../src/components/commons/hooks/useSearch";

const BoardList = () => {
  // const [searchData, setSearchData] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // const [keyword, setKeyword] = useState("");
  const [pageNum, setPageNum] = useState(0);

  const { onClickMoveToPage } = useMoveToPage();

  // 유즈 커스텀 훅으로 만들어 뽑아쓰기
  // 유즈 커스텀 훅으로 만들어 뽑아쓰기
  // 유즈 커스텀 훅으로 만들어 뽑아쓰기
  // 유즈 커스텀 훅으로 만들어 뽑아쓰기

  const { keyword, onChangeKeyword } = useSearch();

  // 유즈 커스텀 훅으로 만들어 뽑아쓰기
  // 유즈 커스텀 훅으로 만들어 뽑아쓰기
  // 유즈 커스텀 훅으로 만들어 뽑아쓰기
  // 유즈 커스텀 훅으로 만들어 뽑아쓰기

  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARD);

  useEffect(() => {
    void bestRefetch();
  }, [data]);

  const { data: boardBestPost, refetch: bestRefetch } =
    useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(FETCH_BEST_BOARD);

  const { data: boardCounts, refetch: countRefetch } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNTS);

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

  const getdebouncing = _.debounce((value) => {
    void refetch({
      page: 1,
      search: value,
    });
    void countRefetch({
      search: value,
    });
    setKeyword(value);
    setPageNum(0);
    console.log(value);
  }, 500);

  const onChangeSearchData = (event: ChangeEvent<HTMLInputElement>) => {
    getdebouncing(event.target.value);
  };

  return (
    <>
      <BoardListUi
        data={data}
        boardBestPost={boardBestPost}
        onChangeSearchData={onChangeSearchData}
        // searchData={searchData}
        refetch={refetch}
        onClickSearchBoard={onClickSearchBoard}
        onChangeDate={onChangeDate}
        keyword={keyword}
        pageNum={pageNum}
        setPageNum={setPageNum}
        boardCounts={boardCounts}
        onClickMoveToPage={onClickMoveToPage}
      />
    </>
  );
};

export default BoardList;
