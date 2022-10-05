import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

const DefaultInput = styled.input`
  width: 200px;
  height: 40px;
  border: 1px solid #ddd;
  background-color: #fff;
`;

export default function InputDefault(props: IProps) {
  return <DefaultInput type={props.type} {...props.register} />;
}
