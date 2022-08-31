// **010. 객체의 키&값 삭제**

// **`문제 설명`**

// 주어진  student는 "철수"에 대한 정보를 모아둔 객체입니다.

// 그런데 철수와 관련이 없는 drink라는 키가 있네요.

// student에서 { drink: "사이다" }를 삭제해주세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 객체에서 키&값을 삭제하는 명령어는 무엇인가요.

let student = {
  name: "철수",
  drink: "사이다",
};

delete student.drink;

console.log(student);
