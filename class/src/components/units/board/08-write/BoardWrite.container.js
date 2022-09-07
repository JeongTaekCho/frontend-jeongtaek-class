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
    if (event.target.value && title && content) {
      setBtn(true);
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && content) {
      setBtn(true);
    }
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
    if (writer && title && event.target.value) {
      setBtn(true);
    }
  };

  console.log(writer);

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
  };
  return (
    <>
      <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        btn={btn}
        writer={writer}
        title={title}
        content={content}
      />
    </>
  );
};

export default BoardWrite;
