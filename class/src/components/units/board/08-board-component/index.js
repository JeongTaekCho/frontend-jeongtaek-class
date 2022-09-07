const BoardComponent = ({ titleName }) => {
  return (
    <>
      <h1>{titleName ? "등록" : "수정"} 페이지</h1>
      제목 : <input type="text" />
      <br />
      내용 : <input type="text" />
      <br />
      <button>{titleName ? "등록" : "수정"}하기</button>
    </>
  );
};

export default BoardComponent;
