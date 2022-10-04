// 1. 함수를 리턴하는 함수
// function aaa() {
//   const apple = 10;

//   return function bbb() {
//     const banana = 20;

//     console.log(banana);
//     console.log(apple);
//   };
// }
// aaa()();

//
//
// 2. 함수를 리턴하는 함수 - 인자
// function aaa(apple) {
//   return function (banana) {
//     console.log(banana);
//     console.log(apple);
//   };
// }
// aaa(10)(20);

//
//
// 3. 함수를 리턴하는 함수 - 화살표함수
// const aaa = (apple) => (banana) => {
//   console.log(banana);
//   console.log(apple);
// };
// aaa(10)(20);

// 4. 함수를 리턴하는 함수 - 3개

const aaa = (apple) => (banana) => (tomato) => {
  console.log(banana);
  console.log(apple);
  console.log(tomato);
};
aaa(10)(20)(30);
