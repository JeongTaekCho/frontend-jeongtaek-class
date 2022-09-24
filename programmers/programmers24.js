// 제일 작은 수 제거하기
// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

// Reference Code ( for 반복문 )

function solution(arr) {
  const answer = [];

  // 1. 제일 작은 수 찾기
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // 2. 제일 작은 수를 제외한 숫자만 배열에 추가
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }

  // 빈 배열인지를 체크한 후
  // 빈 배열일 경우에는 배열에 -1을 담아서 리턴
  // 빈 배열이 아닐 경우에는 2번째 과정의 배열을 리턴
  return answer.length === 0 ? [-1] : answer;
}

// Reference Code ( filter )

function solution(arr) {
  // 배열 안에서 제일 작은 값을 저장
  const min = Math.min(...arr);

  const answer = arr.filter((num) => {
    return num !== min;
  });

  return answer.length === 0 ? [-1] : answer;
}
