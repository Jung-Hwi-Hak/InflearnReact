import { type Dispatch, type SetStateAction } from "react";

interface IChildProps {
  setCount: Dispatch<SetStateAction<number>>;
  count: number;
}

export default function Child1(props: IChildProps): JSX.Element {
  function onClickCountUp(): void {
    props.setCount((prev) => prev + 1);
  }

  return (
    <div>
      <div id="qqq">자식1의 카운트: {props.count}</div>
      <button onClick={onClickCountUp}>+</button>
    </div>
  );
}
