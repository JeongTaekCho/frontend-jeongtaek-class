import { gql } from "@apollo/client";

// export const USER_LOGIN = gql`
//   mutation loginUserExample($password: String!, $email: String!) {
//     loginUserExample(password: $password, email: $email) {
//       accessToken
//     }
//   }
// `;
export const USER_LOGIN = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;
