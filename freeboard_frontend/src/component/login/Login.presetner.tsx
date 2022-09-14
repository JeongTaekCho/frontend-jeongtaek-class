import * as S from "./Login.styles";
import { ILoginUi } from "./Login.types";

const LoginUi = ({ goRegister }: ILoginUi) => {
  return (
    <>
      <S.LoginContainer>
        <S.LoginTitle>로그인</S.LoginTitle>
        <S.LoginForm>
          <S.LoginDefaultInput
            type="text"
            placeholder="아이디를 입력해주세요"
          />
          <S.LoginDefaultInput
            type="text"
            placeholder="비밀번호를 입력해주세요"
          />
          <S.LoginFindContainer>
            <S.LoginFindButton>아이디 찾기</S.LoginFindButton>
            <S.LoginFindSpan>|</S.LoginFindSpan>
            <S.LoginFindButton>비밀번호 찾기</S.LoginFindButton>
          </S.LoginFindContainer>
          <S.LoginBtn>로그인</S.LoginBtn>
          <S.JoinBtn onClick={goRegister}>회원가입</S.JoinBtn>
        </S.LoginForm>
      </S.LoginContainer>
    </>
  );
};

export default LoginUi;
