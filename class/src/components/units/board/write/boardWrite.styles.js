import styled from "@emotion/styled";

export const DefaultInput = styled.input`
  width: 200px;
  height: 40px;
  border: 1px solid red;
`;

export const BlueButton = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  background: ${(props) => (props.btn === false ? "blue" : "red")};
  color: #fff;
  cursor: pointer;
`;
