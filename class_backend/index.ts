console.log("나는 깜장이야!ts ");

const aaa: number = 2;

import { DataSource } from "typeorm";
import { Board } from "./board.postgres";

// const { ApolloServer, gql } = require("apollo-server"); => 옛날 방식 (commonjs)
import { ApolloServer, gql } from "apollo-server"; // => 최근방식 (module)

// DOCS
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용(example 방식)
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용(backend 방식)
    createBoard(createBoardInput: CreateBoardInput!): String
  }
`;

// API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      //모두 꺼내기
      const result = await Board.find();

      //1개만 골라서 꺼내기
      // await Board.find({ where: { number: 3 } });

      return result; // [{number: 1, writer: "철수", title: "안녕하세요" , contents: "반갑습니다."}, {...}, {...}] 객체 형태로 게시글이 들어가 있음.
    },
  },

  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,

        //하나하나 모두 입력하는 방식
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      return "게시글 등록에 성공하엿습니다. ㅊㅊ";
    },
  },

  // updataBoard: async (parent: any, args: any) => {
  //   await Board.update({ number: 3 }, { writer: "영희" }); // 3번게시물의 작성자를 영희로 바꿔주라는 api
  //   return "게시물 수정 성공";
  // },

  // deleteBoard: async (parent: any, args: any) => {
  //   await Board.delete({ number: 3 });
  //   // await Board.update({ number: 3 }, { isDeleted: true }); // => 실무에서는 실제로 삭제하지 않고 isDeleted라는 컬럼이 true이면 삭제되었다고 가정
  //   // await Board.update({ number : 3 }, { deletedAt : new Date() }) => deletedAt이 null이면 삭제 안된 게시글, new Date() 시간이 들어가 있으면 그 시간에 삭제된 게시글
  // },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  // cors: {
  //   origin: [
  //     // cors 풀어주고 싶은 주소 입력해주기
  //     "http://naver.com",
  //   ],
  // },
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.199.68",
  port: 5009,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속 성공!! 축하한다");

    server.listen(5009).then(({ url }: any) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch((error) => {
    console.log("DB접속 실패");
    console.log("원인 : ");
    console.log(error);
  });
