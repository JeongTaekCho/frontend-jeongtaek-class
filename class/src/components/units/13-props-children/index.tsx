interface IProps {
  school: string;
  children: JSX.Element;
}

export default function Example(props: IProps) {
  return (
    <>
      <div>안녕하세요 영희입니다.</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>안녕하세요 맹구입니다.</div>
    </>
  );
}
