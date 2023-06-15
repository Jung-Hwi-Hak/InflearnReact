import { useState } from "react";

export default function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCountUp = (): void => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // 임시 공간에 저장된 count 값을 가져와 값을 변환시킴.
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  //   function onClickCountDown() {
  //     setCount(count - 1);
  //   }

  return (
    <div>
      <div id="qqq">{count}</div>
      <button onClick={onClickCountUp}>+</button>
      {/* <button onClick={onClickCountDown}>-</button> */}
    </div>
  );
}
