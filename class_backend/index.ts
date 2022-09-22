console.log("나는 깜장이야!ts ");

const aaa: number = 2;

import { DataSource } from "typeorm";
import { Board } from "./board.postgres";

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
  })
  .catch((error) => {
    console.log("DB접속 실패");
    console.log("원인 : ");
    console.log(error);
  });
