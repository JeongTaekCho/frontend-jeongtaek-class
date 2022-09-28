import { gql } from "@apollo/client";

export const FETCH_BOARDS_COUNTS = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;
