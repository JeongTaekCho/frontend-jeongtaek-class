import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      seller {
        _id
        email
        name
        picture
        createdAt
      }
      createdAt
    }
  }
`;
