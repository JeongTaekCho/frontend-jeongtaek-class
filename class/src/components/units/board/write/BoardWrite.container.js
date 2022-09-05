import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.querys";

const BoardWrite = () => {
  //자바스크립트 영역

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [btn, setBtn] = useState(false);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const [createBoard] = useMutation(CREATE_BOARD);

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
  };
  return (
    <>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        btn={btn}
      />
    </>
  );
};

export default BoardWrite;
