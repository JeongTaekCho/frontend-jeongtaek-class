import { useState } from "react";
import { DefaultInput, BlueButton } from "./boardWrite.styles";

const BoardWriteUI = ({
  onClickSubmit,
  onChangeWriter,
  onChangeTitle,
  onChangeContent,
  btn,
  writer,
  content,
  title,
}) => {
  //자바스크립트 영역

  return (
    <>
      작성자 :{" "}
      <DefaultInput type="text" onChange={onChangeWriter} value={writer} />{" "}
      <br />
      제목 : <DefaultInput type="text" onChange={onChangeTitle} value={title} />
      <br />
      내용 :{" "}
      <DefaultInput
        type="text"
        onChange={onChangeContent}
        value={content}
      />{" "}
      <br />
      <BlueButton btn={btn} onClick={onClickSubmit}>
        Graphql - API 요청하기
      </BlueButton>
    </>
  );
};

export default BoardWriteUI;
