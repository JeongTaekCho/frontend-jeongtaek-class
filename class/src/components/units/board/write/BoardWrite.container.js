import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.querys";

const BoardWrite = ({ isEdit }) => {
  //자바스크립트 영역

  const router = useRouter();

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
    router.push(`/08-05-board/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    // 뮤테이션 등록
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer: writer,
        title: title,
        contents: content,
      },
    });
    // 상세페이지로 이동하기
    router.push(`/08-05-board/${router.query.number}`);
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
      />
    </>
  );
};

export default BoardWrite;
