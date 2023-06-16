import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components-example/commons/layout";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const client = new ApolloClient({
    uri: "http://backend-example.codebootcamp.co.kr/graphql",
    // uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 컴퓨터 메모리에 백엔드에서 받아온 데이터 임시로 저장해 놓기
  });

  return (
    <div>
      <div>====여기는 _app.js 컴포넌트 입니다.====</div>
      <ApolloProvider client={client}>
        <Layout>
          <Component />
        </Layout>
      </ApolloProvider>
      <div>====여기는 _app.js 컴포넌트 입니다.====</div>
    </div>
  );
}
