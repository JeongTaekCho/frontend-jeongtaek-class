import * as S from "./Login.styles";
import { ILoginUi } from "./Login.types";

const LoginUi = ({
  goRegister,
  onChangeLoginInput,
  onClickLogin,
  loginIdError,
  loginPwError,
}: ILoginUi) => {
  return (
    <>
      <S.LoginContainer>
        <S.LoginTitle>로그인</S.LoginTitle>
        <S.LoginForm>
          <S.LoginDefaultInput
            type="text"
            placeholder="아이디를 입력해주세요"
            name="loginId"
            onChange={onChangeLoginInput}
          />
          {loginIdError && <S.loginError>아이디를 입력해주세요.</S.loginError>}

          <S.LoginDefaultInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="loginPw"
            onChange={onChangeLoginInput}
          />
          {loginPwError && (
            <S.loginError>비밀번호를 입력해주세요.</S.loginError>
          )}

          <S.LoginFindContainer>
            <S.LoginFindButton>아이디 찾기</S.LoginFindButton>
            <S.LoginFindSpan>|</S.LoginFindSpan>
            <S.LoginFindButton>비밀번호 찾기</S.LoginFindButton>
          </S.LoginFindContainer>
          <S.LoginBtn onClick={onClickLogin}>로그인</S.LoginBtn>
          <S.JoinBtn onClick={goRegister}>회원가입</S.JoinBtn>
        </S.LoginForm>
      </S.LoginContainer>
    </>
  );
};

export default LoginUi;
