import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

const LoginSuccessPage = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("로그인을 먼저 해주세요.");
      void router.push("/23-03-login-check");
    }
  }, []);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다.</>;
};

export default LoginSuccessPage;
