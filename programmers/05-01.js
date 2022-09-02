// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.

// 100~90 → "A"

// 89~80 → "B"

// 79~70 → "C"

// 69~60 → "D"

// 59점 이하는 "F"

// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

// **`입력 인자`**

// - score - 숫자열

// **`주의 사항`**

// -

function grade(score) {
  if (score > 100 || score < 0) {
    console.log("잘못된 점수입니다.");
  } else if (score <= 100 && score >= 90) {
    console.log("A");
  } else if (score <= 89 && score >= 80) {
    console.log("B");
  } else if (score <= 79 && score >= 70) {
    console.log("C");
  } else if (score <= 69 && score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}
