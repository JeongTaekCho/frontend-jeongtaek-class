import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $content: String) {
    #타임적는곳
    createBoard(writer: $writer, title: $title, contents: $content) {
      #실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;
