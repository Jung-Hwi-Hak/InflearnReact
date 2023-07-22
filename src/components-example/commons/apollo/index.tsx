import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from "@apollo/client";
import { useRecoilState } from "recoil";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";

// 서버데이터
const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // TODO 브라우저일 경우에만 실행하기 - localStorage.getItem()
  // ? 첫번째 방법 - process.browser
  // if (process.browser) {
  //   const localStorageAccessToken = localStorage.getItem("accessToken");
  //   setAccessToken(localStorageAccessToken ?? "");
  // } else {
  //   console.log("지금은 프론트엔드 서버 - (next.js - yarn dev 실행중)");
  // }
  // ? 두번째 방법 - typeof window
  // if (typeof window !== "undefined") {
  //   const localStorageAccessToken = localStorage.getItem("accessToken");
  //   setAccessToken(localStorageAccessToken ?? "");
  // } else {
  //   console.log("지금은 프론트엔드 서버 - (next.js - yarn dev 실행중)");
  // }
  // ? 세번째 방법 - useEffect()
  useEffect(() => {
    const localStorageAccessToken = localStorage.getItem("accessToken");
    setAccessToken(localStorageAccessToken ?? "");
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    // graphql 요청시 무조건 header 에 토큰을 넣어 api 요청
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // InMemotyCache 란 글로벌 스테이트이다
    cache: GLOBAL_STATE,
  });
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
