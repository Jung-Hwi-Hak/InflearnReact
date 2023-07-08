import { useState } from "react";

export default function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    // 1. 화살표 함수
    // setCount((prev) => prev + 1);

    // 2. 함수선언식
    // setCount(function (prev) {
    //   // 로직 추가 가능
    //   return prev + 1;
    // });

    // 3. 매개변수 변경
    setCount((changeName) => changeName + 1);
  }

  return (
    <div>
      <div id="qqq">{count}</div>
      <button onClick={onClickCountUp}>+</button>
    </div>
  );
}
