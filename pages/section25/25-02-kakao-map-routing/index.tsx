import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter();

  const onClickMove = (): void => {
    void router.push("/section25/25-02-kakao-map-routing-moved");
  };

  return (
    <>
      <button onClick={onClickMove}>페이지 이동</button>
      <br />
      {/* 매 페이지를 다운 받는 방법. 구방식 */}
      <a href="/section25/25-02-kakao-map-routing-moved">
        페이지 이동하기 (a 태그)
      </a>
      <br />
      <Link href="/section25/25-02-kakao-map-routing-moved">
        <a>페이지 이동하기 (Link 태그)</a>
      </Link>
    </>
  );
}

/**
 * link 태그 사용 못하는 상황은 클릭이라는 이벤트로 이동하지 않을 경우가 있다.
 * 그땐 router 사용
 * 즉, 클릭 이벤트로 페이지 이동할때 사용
 */
