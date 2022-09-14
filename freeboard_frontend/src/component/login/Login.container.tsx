import LoginUi from "./Login.presetner";
import { NextRouter, useRouter } from "next/router";

const Login = () => {
  const router: NextRouter = useRouter();
  const goRegister = () => {
    router.push("/register");
  };

  return <LoginUi goRegister={goRegister} />;
};

export default Login;
