import { gql } from "@apollo/client";

export const POINT_CHARGE = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      # balance
      # status
      # statusDetail
      # useditem
      # user {
      #   _id
      #   email
      #   name
      #   picture
      #     userPoint {
      #       _id
      #       amount
      #       createdAt
      #     }
      #     createdAt
      # }
      createdAt
    }
  }
`;
