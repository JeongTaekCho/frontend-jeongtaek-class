import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const onClickSignUp = () => {
    console.log("email: ", email, "password: ", password);

    if (email.includes("@")) {
      //메세지 알림 이전 백엔드 API 요청하기
      alert("회원가입을 축하해");
    } else {
      setEmailError("이메일 똑바로 치세여");
    }
  };

  return (
    <>
      이메일 :
      <input
        type="text"
        placeholder="이메일을 입력해주세요."
        onChange={onChangeEmail}
      />
      <div>{emailError}</div>
      비밀번호 :
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={onChangePassword}
      />
      <button onClick={onClickSignUp}>회원가입</button>
    </>
  );
}
