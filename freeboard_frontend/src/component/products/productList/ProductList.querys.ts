import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query {
    fetchUseditems {
      _id
      name
      remarks
      contents
    }
  }
`;
