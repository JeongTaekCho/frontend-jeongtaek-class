import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);
  const handleClickCountUp = () => {
    setCount(count + 1);
  };
  const handleClickCountDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleClickCountUp}>카운트올리기!!</button>
      <button onClick={handleClickCountDown}>카운트내리기!!</button>
    </>
  );
}
