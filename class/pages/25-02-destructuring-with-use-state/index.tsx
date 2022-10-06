import { useState } from "react";

export default function CounterStatePage() {
  const result = useState(0);

  const handleClickCountUp = () => {
    result[1](6);
  };
  const handleClickCountDown = () => {
    result[1](0);
  };

  return (
    <>
      <div>{result[0]}</div>
      <button onClick={handleClickCountUp}>카운트올리기!!</button>
      <button onClick={handleClickCountDown}>카운트내리기!!</button>
    </>
  );
}
