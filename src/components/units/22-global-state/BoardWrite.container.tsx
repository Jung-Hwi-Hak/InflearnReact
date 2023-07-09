import BoardWirteUI from "./BoardWrite.presenter";

export default function BoardWrite(props: any): JSX.Element {
  return <BoardWirteUI onClickChangeState={props.onClickChangeState} />;
}
