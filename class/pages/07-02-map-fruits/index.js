//밖에 만든이유 : 백엔드에서 받아온데이터라고 가정했을 때 컴포넌트 리렌더링돼도 다시 안만들어짐

const FRUITS = [
  { number: 1, title: "레드향" }, // <div>1 레드향</div>
  { number: 2, title: "샤인머스켓" }, // <div>2 샤인머스켓</div>
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
  { number: 10, title: "귤" },
  { number: 10, title: "귤" },
  { number: 10, title: "귤" },
  { number: 10, title: "귤" },
  { number: 10, title: "귤" },
  { number: 10, title: "귤" },
];

const MapFriutsPage = () => {
  const aaa = [
    { number: 1, title: "레드향" }, // <div>1 레드향</div>
    { number: 2, title: "샤인머스켓" }, // <div>2 샤인머스켓</div>
    { number: 3, title: "산청딸기" },
  ].map((el) => (
    <div>
      {el.number} - {el.title}
    </div>
  ));

  //실부 백엔드 데이터 예제
  const ccc = FRUITS.map((item) => (
    <div>
      {item.number} - {item.title}
    </div>
  ));

  return (
    <>
      {FRUITS.map((item) => (
        <div>
          {item.number} - {item.title}
        </div>
      ))}
    </>
  );
};

export default MapFriutsPage;
