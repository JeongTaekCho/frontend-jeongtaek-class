import { useState } from "react";
import { IBoard } from "../../../commons/types/generated/types";

interface IPorps {
  el: IBoard;
}

export default function BoardCommentItem({ el }: IPorps) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div>
      {!isEdit && (
        <div>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      )}
      {isEdit && (
        <input type="text" placeholder="수정할 내용을 입력해주세요." />
      )}
    </div>
  );
}
