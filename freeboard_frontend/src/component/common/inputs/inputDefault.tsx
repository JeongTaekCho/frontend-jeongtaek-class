import styled from "@emotion/styled";
import { FieldValues, UseFormRegister } from "react-hook-form";

const DefaultInput = styled.input`
  width: 100%;
  height: 5.2rem;
  border: 1px solid #bdbdbd;
  outline: none;
  padding: 1.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
`;

interface IProps {
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
}

const InputDefault = (props: IProps) => {
  return (
    <DefaultInput
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
      style={props.style}
    />
  );
};

export default InputDefault;
