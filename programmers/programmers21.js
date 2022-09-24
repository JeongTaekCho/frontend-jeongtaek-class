// 하샤드 수
// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.
// 입출력 예
// arr	return
// 10	true
// 12	true
// 11	false
// 13	false
// 입출력 예 설명
// 입출력 예 #1
// 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

// Reference Code ( for )

function solution(n) {
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      // 제곱근을 찾은 경우 (제곱의 값이 n과 동일한 경우)
      answer = i + 1;
      return answer * answer;

      // answer ** 2  -- 거듭제곱 연산자
      // Math.pow( answer, 2 )  -- 제곱 메소드
    }
  }
  // 제곱근을 찾지 못한 경우 (-1 을 리턴)
  return answer;

  // Reference Code ( Math.sqrt )

  // function solution(n) {
  //     const sqrt = Math.sqrt(n);
  //     if( n % sqrt === 0 ) {
  //         return (sqrt + 1) ** 2;
  //     }
  //     return -1;
  // }

  // Reference Code ( Math.sqrt, Number.isInteger )

  // function solution(n) {
  //     let sqrt = Math.sqrt(n);
  //     if( Number.isInteger( sqrt ) === true ) {
  //         // 제곱근일 경우 (= 정수인 경우) true 반환
  //         sqrt++;
  //         return sqrt * sqrt;

  //     } else {
  //         // 제곱근이 아닐 경우 (= 정수가 아닐 경우) false 반환
  //         return -1;
  //     }
}
