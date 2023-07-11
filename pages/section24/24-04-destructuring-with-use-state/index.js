import { useState } from "react";

export default function CounterStatePage() {
  // const [count, setCount] = useState(0)
  const result = useState(0);

  function onClickCountUp() {
    result[1](result[0] + 1);
  }

  function onClickCountDown() {
    result[1](result[0] - 1);
  }

  return (
    <div>
      <div id="qqq">{result[0]}</div>
      <button onClick={onClickCountUp}>+</button>
      <button onClick={onClickCountDown}>-</button>
    </div>
  );
}
