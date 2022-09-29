import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  width: 340px;
  margin: 0 auto;
  padding: 90px 0 60px;
`;

export const LoginTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  color: #000;
  text-align: center;
  margin-bottom: 15px;
`;

export const LoginForm = styled.form`
  width: 100%;
`;

export const LoginDefaultInput = styled.input`
  width: 100%;
  height: 54px;
  border: 1px solid #ddd;
  background: #fff;
  padding: 14px;
  outline: none;
  margin-bottom: 10px;
`;

export const LoginFindContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  margin-bottom: 10px;
`;

export const LoginFindButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  color: #333;
  border: none;
  background: none;
  cursor: pointer;
`;

export const LoginFindSpan = styled(LoginFindButton.withComponent("span"))``;

export const LoginBtn = styled.button`
  width: 100%;
  height: 54px;
  border: none;
  background: ${(props: any) => props.theme.mainColor};
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const JoinBtn = styled(LoginBtn)`
  background: #fff;
  border: 1px solid ${(props: any) => props.theme.mainColor};
  color: ${(props: any) => props.theme.mainColor};
  margin-bottom: 0;
`;

export const loginError = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: red;
  margin: 0 0 4px;
`;
