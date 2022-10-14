import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
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
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2. 버튼 클릭시 직접 실행하면 data에 받아지고, 리렌더링됨
  // const [myquery, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  // 3. axios와 동일
  // const client = useApollpClient();

  const client = useApolloClient();

  const onClickBtn = async () => {
    const result = await client.query({
      query: FETCH_USER_LOGGED_IN,
    });

    console.log(result);
  };

  return (
    <>
      <button onClick={onClickBtn}>클릭하세요.</button>
      {/* {data?.fetchUserLoggedIn.name}님 환영합니다. */}
    </>
  );
};

export default LoginSuccessPage;
