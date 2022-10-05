import styled from "@emotion/styled";

const DefaultButton = styled.button`
  width: 200px;
  height: 40px;
  border: 1px solid #ddd;
  background-color: #fff;
`;

interface IProps {
  type: "button";
}

export default function ButtonDefault(props) {
  return (
    <DefaultButton type={props.type} {...props.register}>
      {props.title}
    </DefaultButton>
  );
}
