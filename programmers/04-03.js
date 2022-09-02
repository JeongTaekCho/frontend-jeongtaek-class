// **025. 문자열 삽입**

// **`문제 설명`**

// num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다.

// num이 3일 경우에는 "1-2-3"입니다.

// **`입력 인자`**

// - num은 숫자열입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.

function makeNumber(num) {
  let str = "";

  for (let i = 1; i <= num; i++) {
    str = str += i;
    str = str += "-";
  }
  str = str.slice(0, str.length - 1);

  return str;
}
