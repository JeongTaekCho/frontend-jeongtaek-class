import styled from "@emotion/styled";

export const CommentAnswerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const CommentAnswerContainer = styled.div`
  width: 95%;
  display: flex;
  gap: 26px;
  border-bottom: 1px solid #bdbdbd;
  padding: 26px 0;
`;
export const CommentAnswerContentBox = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
`;
export const CommentAnswerTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  overflow-y: auto;
  resize: none;
  padding: 20px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  color: #111;
  &::placeholder {
    color: #bdbdbd;
  }
`;
export const CommentAnswerSubmitBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-top: 1px solid #bdbdbd;
`;
export const CommentAnswerLeftBox = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: #bdbdbd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`;
export const CommentAnswerSubmit = styled.button`
  width: 91px;
  height: 100%;
  background-color: #ffd600;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const CommentAnswerTextBox = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  position: relative;
`;
export const MyImgBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
`;
export const CommentContentsBox = styled.div``;
export const CommentWriter = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin-bottom: 5px;
`;
export const CommentCon = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  margin-bottom: 20px;
`;

export const CommentDate = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #bdbdbd;
`;

export const AnswerBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const CommentBtnBox = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
