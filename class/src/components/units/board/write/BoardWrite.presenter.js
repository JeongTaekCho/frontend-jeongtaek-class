import { useState } from "react";
import { DefaultInput, BlueButton } from "./boardWrite.styles";

const BoardWriteUI = ({
  onClickSubmit,
  onChangeWriter,
  onChangeTitle,
  onChangeContent,
  btn,
  isEdit,
  onClickUpdate,
}) => {
  //자바스크립트 영역

  return (
    <>
      작성자 : <DefaultInput type="text" onChange={onChangeWriter} /> <br />
      제목 : <DefaultInput type="text" onChange={onChangeTitle} />
      <br />
      내용 : <DefaultInput type="text" onChange={onChangeContent} /> <br />
      <BlueButton btn={btn} onClick={isEdit ? onClickUpdate : onClickSubmit}>
        {isEdit ? "수정" : "등록"}하기
      </BlueButton>
    </>
  );
};

export default BoardWriteUI;
