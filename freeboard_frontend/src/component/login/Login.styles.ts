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

export const GoogleLogin = styled.button`
  background-position: 25px 0px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-block;
  height: 50px;
  line-height: 50px;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
  width: 100%;
  border-radius: 3px;
  outline: rgb(255, 255, 255) none 0px;
  padding-left: 20%;
  transition: all 0.2s cubic-bezier(0.72, 0.01, 0.56, 1) 0s;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  background: rgb(255, 255, 255)
    url("https://raw.githubusercontent.com/eswarasai/social-login/master/img/google-plus.png")
    no-repeat scroll 5px 0px / 50px 50px padding-box border-box;
  border: 1px solid #f95621;
  margin: 10px 0;
  span {
    color: #f95621;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    border: 0px none rgb(220, 74, 61);
    outline: rgb(255, 255, 255) none 0px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-size: 16px;
    font-weight: 500;
  }
  &:hover {
    border-color: #f95621;
    background: #f95621
      url("https://raw.githubusercontent.com/eswarasai/social-login/master/img/google-plus-white.png")
      no-repeat scroll 5px 0px / 50px 50px padding-box border-box;
    -webkit-transition: all 0.8s ease-out;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease-out;

    &:hover span {
      color: #fff;
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -ms-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all 0.3s ease;
    }
  }
`;
