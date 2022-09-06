import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./BoardList.querys";
import BoardListUi from "./BoardList.presenter";

const BoardList = () => {
  const { data } = useQuery(FETCH_BOARD);

  return (
    <>
      <BoardListUi data={data} />
    </>
  );
};

export default BoardList;
