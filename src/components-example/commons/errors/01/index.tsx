interface IError01Props {
  errorMsg: string | undefined;
}

export default function Error01(props: IError01Props): JSX.Element {
  return (
    <>
      <div style={{ color: "tomato" }}>{props.errorMsg}</div>
    </>
  );
}
