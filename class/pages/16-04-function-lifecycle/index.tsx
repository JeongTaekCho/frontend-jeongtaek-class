import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClassCounterPage() {
  const router = useRouter();

  const [count, setCount] = useState(0);

  // 1. 하나로 합치기 가능
  useEffect(() => {
    console.log("변경될 때 실행되라");
  }, [count]);

  useEffect(() => {
    console.log("그려지고 나서 실행");

    return () => {
      console.log("사라질 때 실행");
    };
  }, []);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  // 2. useEffect의 잘못된 사용 예제 - 추가렌더링, 무한루프

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("나는 언제 실행 돼?");

  return (
    <div>
      {count}
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
