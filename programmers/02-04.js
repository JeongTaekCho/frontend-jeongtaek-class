// **006. 배열의 기능**

// **`문제 설명`**

// 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.

let fruits = ["사과", "바나나"];

for (let i = 0; i < fruits; i++) {
  fruits[i] = `맛있는${fruits}`;
}
