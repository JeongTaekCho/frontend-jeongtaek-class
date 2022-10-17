import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { themeState } from "../../src/store";
import { styleBgColor, stylePrimaryColor } from "../../src/styles/commonStyles";

const Wrapper = styled.section``;

const Title = styled.h1`
  color: ${(props) => props.theme.primaryColor};
`;

const Content = styled.div`
  padding: 30px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.bgColor};
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  color: ${(props) => props.theme.backgroundColor};
`;

export default function Page() {
  const [theme, setTheme] = useRecoilState(themeState);

  const onClickBtn = () => {
    setTheme(theme);
  };

  console.log(theme);

  return (
    <Wrapper>
      <Title>공통 CSS 연습</Title>
      <Content>
        <p>테스트용 박스 영역 입니다.</p>
      </Content>
      <Button onClick={onClickBtn}>버튼입니다.</Button>
    </Wrapper>
  );
}
