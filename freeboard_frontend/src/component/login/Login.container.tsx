import LoginUi from "./Login.presetner";
import { NextRouter, useRouter } from "next/router";

const Login = () => {
  const router: NextRouter = useRouter();
  const goRegister = async () => {
    await router.push("/register");
  };

  return <LoginUi goRegister={goRegister} />;
};

export default Login;
