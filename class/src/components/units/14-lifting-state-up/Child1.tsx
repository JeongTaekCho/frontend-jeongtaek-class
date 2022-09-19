export default function Child1({ count, setCount }) {
  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>자식1의 카운트 {count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </>
  );
}
