import ChildPage from "./02-child";

const ParentPage = () => {
  // 컴포넌트는 그냥 함수에 불과
  // 따라서 props도 그냥 매개변수에 불과 즉, 내 마음대로 이름변경 가능.

  return (
    <>
      {/* <ChildPage count={3} /> */}
      {ChildPage({ count: 5, number: 10 })}
    </>
  );
};

export default ParentPage;
