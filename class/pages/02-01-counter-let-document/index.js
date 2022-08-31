export default function CounterLetDocumentPage() {
  const handleClickCountUp = () => {
    const count = Number(document.getElementById("count").innerText) + 1;
    document.getElementById("count").innerText = count;
  };
  const handleClickCountDown = () => {
    const count = Number(document.getElementById("count").innerText) - 1;
    document.getElementById("count").innerText = count;
  };

  return (
    <>
      <div id="count">0</div>
      <button onClick={handleClickCountUp}>카운트올리기!!</button>
      <button onClick={handleClickCountDown}>카운트내리기!!</button>
    </>
  );
}
