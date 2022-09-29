import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import FetchPolicyExample from "../../src/components/units/21-fetch-policy";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const GlobalStatePage = () => {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);

  const [isOpen, setIsOpen] = useState(false);

  const onClickIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onLickMove = () => {
    void router.push("/21-05-fetch-polisy-moved");
  };

  return (
    <>
      <button onClick={onClickIsOpen}>
        버튼을 클릭하면 새로운 컴포넌트가 나타납니다.
      </button>
      {isOpen ? <FetchPolicyExample /> : null}
      <button onClick={onLickMove}>버튼을 클릭하면 페이지가 이동됩니다.</button>
    </>
  );
};

export default GlobalStatePage;
