import styled from "@emotion/styled";

export const CommentAnswerBox = styled.div`
  width: 100%;
`;
export const CommentAnswerContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid #bdbdbd;
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

export const CommentPasswordInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #111;
  outline: none;
  padding: 10px;
`;
