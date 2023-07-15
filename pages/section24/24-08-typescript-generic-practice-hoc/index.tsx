import { useRouter } from "next/router";
import { useEffect } from "react";
import type { ReactElement } from "react";

export const LoginChcek =
  (Component: () => JSX.Element) =>
  // eslint-disable-next-line react/display-name
  <P extends Record<string, unknown>>(props: P): ReactElement<P> => {
    const router = useRouter();
    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용이 가능합니다.");
        void router.push("/section23/23-05-login-check-hoc");
      }
    }, []);

    return <Component {...props} />;
  };
