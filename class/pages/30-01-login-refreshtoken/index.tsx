import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";
import { accessTokenState } from "../../src/store";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($password: String!, $email: String!) {
    loginUserExample(password: $password, email: $email) {
      accessToken
    }
  }
`;

const LoginPage = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  console.log(accessToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  };

  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER_EXAMPLE);

  const onClickLogin = async () => {
    try {
      // 1.로그인해서 accessToken 받아오기
      const result = await loginUserExample({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result?.data?.loginUserExample.accessToken;

      if (!accessToken) {
        Modal.error({ content: "로그인에 실패 했습니다. 다시 시도해주세요." });
        return;
      }

      setAccessToken(String(accessToken));

      void router.push("/30-02-login-refreshtoken-success");

      // 2.accessToken을 globalState에 저장하기
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="이메일을 입력해라"
        onChange={onChangeEmail}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해라"
        onChange={onChangePassword}
      />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
};

export default LoginPage;
