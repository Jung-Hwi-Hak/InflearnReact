import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { useRecoilState } from "recoil";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../../commons/stores";

// 서버데이터
const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken] = useRecoilState(accessTokenState);

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
  // prettier-ignore
  return (
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
  )
}
