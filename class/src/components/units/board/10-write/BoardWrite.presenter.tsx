import { ChangeEvent, useState } from "react";
import { DefaultInput, BlueButton } from "./boardWrite.styles";
import { IBoardWriteUI } from "./boardWrite.types";

const BoardWriteUI = ({
  onClickSubmit,
  onChangeWriter,
  onChangeTitle,
  onChangeContent,
  onClickUpdate,
  btn,
  data,
  isEdit,
}: IBoardWriteUI) => {
  //자바스크립트 영역

  return (
    <>
      작성자 :{" "}
      <DefaultInput
        type="text"
        onChange={onChangeWriter}
        defaultValue={data?.fetchBoard.writer}
      />{" "}
      <br />
      제목 :{" "}
      <DefaultInput
        type="text"
        onChange={onChangeTitle}
        defaultValue={data?.fetchBoard.title}
      />
      <br />
      내용 :{" "}
      <DefaultInput
        type="text"
        onChange={onChangeContent}
        defaultValue={data?.fetchBoard.contents}
      />{" "}
      <br />
      <BlueButton btn={btn} onClick={isEdit ? onClickUpdate : onClickSubmit}>
        {isEdit ? "수정하기" : "작성하기"}
      </BlueButton>
    </>
  );
};

export default BoardWriteUI;
