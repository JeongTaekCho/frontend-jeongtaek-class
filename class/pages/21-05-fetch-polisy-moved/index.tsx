import { gql, useQuery } from "@apollo/client";
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
  const { data } = useQuery(FETCH_BOARDS);

  const [isOpen, setIsOpen] = useState(false);

  const onClickIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={onClickIsOpen}>
        버튼을 클릭하면 새로운 컴포넌트가 나타납니다.
      </button>
      {isOpen ? <FetchPolicyExample /> : null}
    </>
  );
};

export default GlobalStatePage;
