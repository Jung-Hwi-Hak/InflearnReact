import { useState } from "react";
import Word from "./02-child";
import { v4 as uuidv4 } from "uuid";

export default function MemoizationWithMapParentPage(): JSX.Element {
  const [data, setData] = useState("철수는 오늘 점심을 맛있게 먹었습니다.");

  const onClickChange = (): void => {
    setData("영희는 오늘 저녁을 맛없게 먹었습니다.");
  };

  return (
    <>
      {/* {data.split(" ").map((el, index) => (
        <Word key={index} el={el} /> // 1. memo시, key 또는 el이 변경된 부분만 리렌더링됨.
      ))} */}
      {data.split(" ").map((el, index) => (
        <Word key={uuidv4()} el={el} /> // 2. memo를 하더라도 key 값이 항상 변경되기 때문에 리렌더링됨.
      ))}
      <button onClick={onClickChange}>체인지</button>
    </>
  );
}
