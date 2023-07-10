import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { accessTokenState } from "../../../src/commons/stores";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: any): void => {
    setEmail(event.currentTarget.value);
  };

  const onChangePassword = (event: any): void => {
    setPassword(event.currentTarget.value);
  };

  const onClickLogin = async (): Promise<void> => {
    // TODO 1. 로그인 mutation 날려서 accessToken 받아오기
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;
    // TODO 2. 받아온 accessToken을 Global State에 저장 - recoil
    if (accessToken === undefined) {
      alert("로그인 실패");
      return;
    }
    setAccessToken(String(accessToken));
    // TODO localStorage 에 저장 - 보안상 문제 발상 ( 임시 사용 )
    localStorage.setItem("accessToken", accessToken);

    // TODO 3. 로그인 성공
    void router.push("/section23/23-05-login-check-success-hoc");
  };

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
