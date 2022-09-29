import { useState } from "react";

const StatePrevPage = () => {
  const [count, setCount] = useState(0);
  const handleClickCountUp = () => {
    // 1. 화살표 함수
    setCount((prev) => prev + 1);

    // 2. 함수 선언식
    setCount(function (prev) {
      return prev + 1;
    });

    // 3. 함수안에 로직 넣기
    setCount((prev) => {
      // 로직추가
      // if
      // for 다 가능
      // ...

      return prev + 2;
    });

    // 4. 매개변수 바꿔보기
    setCount(
      (ajdklajsldkjaslkdjaskldjaslk) => ajdklajsldkjaslkdjaskldjaslk + 1
    );
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleClickCountUp}>카운트올리기!!</button>
    </>
  );
};

export default StatePrevPage;
