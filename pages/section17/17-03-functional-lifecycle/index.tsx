import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage(): JSX.Element {
  const router = useRouter();

  const [count, setCount] = useState(0);

  // // ? class 형 컴포넌트의 componentDidMount 와 동일
  // useEffect(() => {
  //   console.log("그려지고 나서 실행 - componentDidMount");
  // }, []);

  // // ? class 형 컴포넌트의 componentDidMount + componentDidUpdate 와 동일
  // useEffect(() => {
  //   console.log("변경되고 나서 실행 - componentDidUpdate");
  // });

  // useEffect(() => {
  //   // ? class 형 컴포넌트의 componentWillUnmount 와 동일
  //   return () => {
  //     console.log("사라지기 전에 실행 - componentWillUnmount");
  //   };
  // }, []);

  // ! 위 3개의 useEffect 결합
  useEffect(() => {
    console.log("componentDidMount + componentDidMount");

    return () => {
      console.log("사라지기 전에 실행 - componentWillUnmount");
    };
  });

  // ! useEffect 잘못된 사용법 ( 1. 추가 렌더링, 2. 무한 루프 )
  // useEffect(() => {
  // setCount(prev => prev + 1)
  // }, [count]);

  const onClickCountUp = (): void => {
    console.log(count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = (): void => {
    console.log("이동!");
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
