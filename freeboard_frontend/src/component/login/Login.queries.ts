import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;
