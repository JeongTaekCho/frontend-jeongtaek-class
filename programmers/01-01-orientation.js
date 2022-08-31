let answer = 0; //이동횟수
let current = 1; //로봇의 현재 위치

answer = answer + 1;
current = current + 2;

//49번 반복

if (current !== 100) {
  current = current + 1;
  answer = answer + 1;
}

//50번

// for문 사용해서 풀어보기
let answer = 0; //이동횟수
const limit = 100; //최종 층

for (let i = 0; i < limit; i = i + 2) {
  answer += 1;
}
