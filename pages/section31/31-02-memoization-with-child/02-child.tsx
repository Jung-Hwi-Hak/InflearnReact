import { memo } from "react";

function MemoizationWithChildPage(props: any): JSX.Element {
  console.log("자식 컴포넌트 렌더링");

  return (
    <>
      <h1>저는 자식 컴포넌트 입니다.</h1>
    </>
  );
}

/**
 * 모든 컴포넌트에 memo 하는건 좋은 코드가 아니다 - 무조건 리렌더링 해야하는 컴포넌트는 memo가 필요없음
 */
export default memo(MemoizationWithChildPage);
