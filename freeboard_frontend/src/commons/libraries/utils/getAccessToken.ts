import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async () => {
  const graphQLClient = new GraphQLClient(
    "https://backend09.codebootcamp.co.kr/graphql",
    { credentials: "include" }
  );

  const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
  const newAccessToken = result.restoreAccessToken.accessToken;
  return newAccessToken;
};
