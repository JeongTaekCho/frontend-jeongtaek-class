import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, FETCH_BEST_BOARD } from "./BoardList.querys";
import BoardListUi from "./BoardList.presenter";

const BoardList = () => {
  const { data } = useQuery(FETCH_BOARD);

  const boardBestPost = useQuery(FETCH_BEST_BOARD);

  return (
    <>
      <BoardListUi data={data} boardBestPost={boardBestPost} />
    </>
  );
};

export default BoardList;
