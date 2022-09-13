import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.querys";
import { IBoardWrite, IMyvariables } from "./boardWrite.types";

const BoardWrite = ({ isEdit, data }: IBoardWrite) => {
  //자바스크립트 영역

  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [btn, setBtn] = useState(false);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        // variables 이게 달러 역할을 함.
        writer: writer,
        title: title,
        content: content,
      },
    });
    console.log(result);
    setBtn(true);
    router.push(`/10-01-typescript-board/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const myvariables: IMyvariables = {
      number: Number(router.query.number),
    };
    if (writer) myvariables.writer = writer;
    if (title) myvariables.title = title;
    if (content) myvariables.contents = content;

    // 뮤테이션 등록
    const result = await updateBoard({
      variables: myvariables,
    });
    // 상세페이지로 이동하기
    router.push(`/10-01-typescript-board/${router.query.number}`);
  };

  return (
    <>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        btn={btn}
        isEdit={isEdit}
        onClickUpdate={onClickUpdate}
        data={data}
      />
    </>
  );
};

export default BoardWrite;
