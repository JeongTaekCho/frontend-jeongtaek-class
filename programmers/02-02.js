// **004. 배열의 기능**

// **`문제 설명`**

// 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - length를 이용해서 문제를 풀어야 합니다.
// - push를 이용해서 문제를 풀어야 합니다.
// - 마지막 요소를 꺼낼 때 length를 사용하는 이유는 무엇일까요.

const fruits = ["사과", "바나나", "파인애플"];

let newFruits = [];

newFruits.push(fruits[fruits.length - 1]);

console.log(newFruits);
