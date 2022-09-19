import { gql } from "@apollo/client";

export const FETCH_BOARDS_COUNTS = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
