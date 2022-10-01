import LoginUi from "./Login.presetner";
import { NextRouter, useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "./Login.queries";
import { useRecoilState } from "recoil";
import { accessTokenData } from "../../store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../commons/types/generated/types";
import { errorModal, successModal } from "../common/modal/modal-function";
import "antd/dist/antd.css";

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [loginIdError, setLoginIdError] = useState(false);
  const [loginPwError, setLoginPwError] = useState(false);

  const [, setAccessToken] = useRecoilState(accessTokenData);

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

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(USER_LOGIN);

  const onClickLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!loginId) {
      setLoginIdError(true);
    }
    if (!loginPw) {
      setLoginPwError(true);
    }

    try {
      if (loginId && loginPw) {
        const result = await loginUser({
          variables: {
            email: loginId,
            password: loginPw,
          },
        });
        if (result.data === null && result === undefined) return;
        const accessToken = result?.data?.loginUser.accessToken;

        setAccessToken(String(accessToken));
        successModal("로그인 성공!!");
        void router.push("/");
      }
    } catch (error) {
      if (error instanceof Error) errorModal(error.message);
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
