interface IChildProps {
  count: number;
  onClickCount: () => void;
}

export default function Child2(props: IChildProps): JSX.Element {
  return (
    <div>
      <div>자식2의 카운트 : {props.count}</div>
      <button onClick={props.onClickCount}>+</button>
    </div>
  );
}
