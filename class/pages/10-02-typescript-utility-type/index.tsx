export default function TypescriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  type IProfile2 = {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  };

  // 1. Pick 타입 (원하는 타입만 골라서 사용)
  type aaa = Pick<IProfile, "name" | "age">;

  // 2. Omit 타입 (타입 제외)
  type bbb = Omit<IProfile, "hobby">;

  // 3. Partial 타입 (있어도 되고 없어도 되게 ?)
  type ccc = Partial<IProfile>;

  // 4. Required 타입(타입을 필수로 바꿔줌)
  type ddd = Required<IProfile>;

  // 5. Record 타입
  type eee = "철수" | "영희" | "훈이"; // Union타입
  let child: eee;
  child = "철수"; // "철수" "훈이" "영희" 만 들어갈 수 있음

  type fff = Record<eee, IProfile>;

  // ===== (type vs interface) 차이 : 선언병합 =====
  interface IProfile {
    candy: number;
  }

  let profile: Partial<IProfile> = {};
  profile.age = 25;
}
