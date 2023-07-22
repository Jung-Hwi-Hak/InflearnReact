import { useCallback, useEffect, useMemo, useState } from "react";

export default function MemoizationPage(): JSX.Element {
  console.log("컴포넌트 렌더링 시작");

  useEffect(() => {}, []);

  let countLet = 0;
  const [state, setState] = useState(0);

  //   1. useMemo로 변수 기억
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // 2. useCallback으로 함수 기억
  const onClickLet = useCallback((): void => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);
  //   const onClickLet = (): void => {
  //     console.log(countLet + 1);
  //     countLet += 1;
  //   };

  // 3. useCallback 사용시 주의사항 => state 사용 주의
  const onClickState = useCallback((): void => {
    console.log(state + 1);
    setState((prev) => prev + 1);
  }, []);
  //   const onClickState = (): void => {
  //     console.log(state + 1);
  //     setState((prev) => prev + 1);
  //   };

  // 4. useMemo로 나만의 useCallback 만들기
  //   const onClickState2 = useMemo(() => {
  //     return (): void => {
  //       console.log(state + 1);
  //       setState((prev) => prev + 1);
  //     };
  //   }, []);
  return (
    <>
      <div>카운트( let ): {countLet}</div>
      <button onClick={onClickLet}>let 카운트 +1</button>
      <div>카운트( state ): {state}</div>
      <button onClick={onClickState}>state 카운트 +1</button>

      <div>카운트( state ): {state}</div>
      <button onClick={onClickState}>state 카운트 +1</button>
    </>
  );
}
