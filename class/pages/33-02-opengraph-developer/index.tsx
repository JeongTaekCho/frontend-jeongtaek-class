// 개발자일때 => 디스코드(개발자)

import axios from "axios";

export default function opengraphDeveloperPage() {
  const onClickEnter = async () => {
    // 채팅데이터에 주소가 있는지 찾기(https:// 로 시작하는 것)
    // 해당주소로 스크래핑하기
    const result = await axios.get("https://www.gmarket.co.kr");
    console.log(result.data);
    // 메마태그에서 opengraph(og:) 찾기
    console.log(
      result.data.split("<meta").filter((el: string) => el.includes("og:"))
    );
  };

  return (
    <>
      <button onClick={onClickEnter}>채팅입력 후 엔터치기!!</button>
    </>
  );
}
