import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query (
    $endDate: DateTime
    $startDate: DateTime
    $search: String
    $page: Int
  ) {
    fetchBoards(
      page: $page
      startDate: $startDate
      endDate: $endDate
      search: $search
    ) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        _id
        zipcode
        address
        addressDetail
        createdAt
        updatedAt
        deletedAt
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const FETCH_BEST_BOARD = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      images
      createdAt
    }
  }
`;
