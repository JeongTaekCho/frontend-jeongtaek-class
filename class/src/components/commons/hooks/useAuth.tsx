import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("로그인을 먼저 해주세요.");
      void router.push("/");
    }
  }, []);
}
