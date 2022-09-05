import { useState } from "react";
import { DefaultInput, BlueButton } from "./boardWrite.styles";

const BoardWriteUI = ({
  onClickSubmit,
  onChangeWriter,
  onChangeTitle,
  onChangeContent,
  btn,
}) => {
  //자바스크립트 영역

  return (
    <>
      작성자 : <DefaultInput type="text" onChange={onChangeWriter} /> <br />
      제목 : <DefaultInput type="text" onChange={onChangeTitle} />
      <br />
      내용 : <DefaultInput type="text" onChange={onChangeContent} /> <br />
      <BlueButton btn={btn} onClick={onClickSubmit}>
        Graphql - API 요청하기
      </BlueButton>
    </>
  );
};

export default BoardWriteUI;
