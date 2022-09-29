import LoginUi from "./Login.presetner";
import { NextRouter, useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [loginIdError, setLoginIdError] = useState(false);
  const [loginPwError, setLoginPwError] = useState(false);

  const router: NextRouter = useRouter();

  useEffect(() => {
    if (loginId) {
      setLoginIdError(false);
    }
    if (loginPw) {
      setLoginPwError(false);
    }
  }, [loginId, loginPw]);

  const onChangeLoginInput = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === "loginId") {
      setLoginId(value);
    } else if (name === "loginPw") {
      setLoginPw(value);
    }
  };

  const onClickLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!loginId) {
      setLoginIdError(true);
    }
    if (!loginPw) {
      setLoginPwError(true);
    }
  };

  const goRegister = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await router.push("/register");
  };

  return (
    <LoginUi
      goRegister={goRegister}
      onChangeLoginInput={onChangeLoginInput}
      onClickLogin={onClickLogin}
      loginIdError={loginIdError}
      loginPwError={loginPwError}
    />
  );
};

export default Login;
