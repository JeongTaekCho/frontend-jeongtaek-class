const qqq = () => {
  let aaa: Number = 1;

  aaa = 2;

  // x타입명시
  let bbb: string = "반갑다";

  // 문자타입 (선언과 할당 분리)
  let ccc: string;
  ccc = "123";

  // 숫자타입
  let ddd: number = 10;
  ddd = 123;

  // 불린타입
  let eee: boolean = true;
  eee = false;

  // eee = "false" // 이건 true임 문자열이라

  //배열타입
  let fff: number[] = [123];
  let ggg: string[] = ["문자열", "만", "들어가는", "배열"];
  let hhh: (string | number | boolean | null)[] = [
    "Asd",
    123,
    true,
    "asd",
    null,
  ];

  //객체타입

  interface IProfile {
    name: string;
    age: string | number;
    school: string;
  }

  const profile: IProfile = {
    name: "조정택",
    age: 26,
    school: "코드캠프",
  };

  profile.age = "4살";

  //함수타입 => 어디서 몇번이든 호출이 가능하므로, 타입추론 할 수 없음 (반드시 타입명시 해야함!)

  const add = (n1: number, n2: number, unit: string): string => {
    return n1 + n2 + unit;
  };

  const result = add(1000, 1020, "원"); // 결과의 리턴 타입도 예측 가능!!

  //any타입
  let qqq: any = "철수"; // 자바스크립트와 동일!!

  return (
    <>
      <div></div>
    </>
  );
};

export default qqq;
