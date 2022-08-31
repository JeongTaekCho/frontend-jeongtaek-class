// **009. 객체의 키&값 추가**

// **`문제 설명`**

// student와 school 두 개의 객체가 있습니다.

// student 객체에 school이라는 객체를 할당해야 합니다.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 객체 안에 객체를 만들 수 있습니다.

const student = {
  name: "철수",
  age: 8,
};

const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};
student.school = school;

console.log(student);
