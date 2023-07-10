interface IButton01Props {
  title: string;
  type?: "submit";
  isActive: boolean;
}

export default function Button01(props: IButton01Props): JSX.Element {
  return (
    <button
      type="submit"
      style={{ backgroundColor: props.isActive ? "yellow" : "tomato" }}
    >
      {props.title}
    </button>
  );
}
