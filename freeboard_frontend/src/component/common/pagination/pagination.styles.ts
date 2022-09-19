import styled from "@emotion/styled";

export const BoardPageBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;
`;
export const DefaultBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoardPage = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  border: none;
  background: none;
  cursor: pointer;
  &.on {
    color: red;
  }
`;
