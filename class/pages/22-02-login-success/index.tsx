import { gql, useQuery } from "@apollo/client";
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
  return <>{data?.fetchUserLoggedIn.name}님 환영합니다.</>;
};

export default LoginSuccessPage;
