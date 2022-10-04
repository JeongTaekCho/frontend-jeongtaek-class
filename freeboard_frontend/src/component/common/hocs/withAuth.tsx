import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenData } from "../../../store";
import { errorModal } from "../modal/modal-function";

export const withAuth = (Component: any) => (props: any) => {
  const [accessToken] = useRecoilState(accessTokenData);

  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      errorModal("로그인을 해주세요.");
      setTimeout(() => {
        void router.push("/login");
      }, 1500);
    }
  }, []);

  return <Component {...props} />;
};
