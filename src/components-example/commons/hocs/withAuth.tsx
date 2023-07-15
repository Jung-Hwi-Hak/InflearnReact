import { useRouter } from "next/router";
import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LoginChcek =
  (Component: any) =>
  // eslint-disable-next-line react/display-name
  (props: any): any => {
    const router = useRouter();
    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용이 가능합니다.");
        void router.push("/section23/23-05-login-check-hoc");
      }
    }, []);

    return <Component {...props} />;
  };
