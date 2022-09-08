import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query ($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

const GraphqlMutationInputPage = () => {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  return <BoardWrite isEdit={true} data={data} />;
};

export default GraphqlMutationInputPage;
