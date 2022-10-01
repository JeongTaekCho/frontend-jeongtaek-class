import styled from "@emotion/styled";

export const CenterListWrap = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 50px 0 80px;
`;
export const CenterListContainer = styled.div`
  width: 820px;
  margin: 0 auto;
`;

export const CenterListTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #333;
  margin: 10px 0 37px;
`;

export const CenterWriteContent = styled.form`
  width: 100%;
  padding: 4px 20px;
  border-top: 2px solid rgb(51, 51, 51);
`;

export const CenterWriteInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
`;

export const CenterWriteInputTitle = styled.div`
  width: 17.94%;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: flex-start;
  gap: 2px;
  span {
    font-size: 10px;
    color: red;
  }
`;

export const CenterWriteInputBox = styled.div`
  width: 82.05%;
`;

export const CenterWriteDefaultInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: 16px;
  line-height: 42px;
  color: rgb(51, 51, 51);
  outline: none;
`;

export const CenterWriteTextAreaBox = styled.div``;

export const CenterWriteDefaultTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 450px;
  padding: 15px 16px;
  font-size: 16px;
  line-height: 21px;
  word-break: break-all;
  z-index: 1;
  background: none;
  border-radius: 4px;
  color: rgb(51, 51, 51);
  outline: none;
  resize: none;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
`;

export const CenterWriteFile = styled.input`
  display: none;
`;

export const CenterFileBtn = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 6px;
  cursor: pointer;
  margin: 12px 0;
  color: rgb(221, 221, 221);
`;

export const CenterWriteSubmit = styled.button`
  display: block;
  width: 160px;
  height: 56px;
  padding: 0px 10px;
  text-align: center;
  letter-spacing: 0px;
  font-size: 16px;
  line-height: 20px;
  color: white;
  cursor: pointer;
  background-color: #f95621;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  margin: 0 auto;
`;
