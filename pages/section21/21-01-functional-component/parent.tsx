import ChildPage from "./child";

export default function ParentPage(): JSX.Element {
  return (
    <>
      {/* <ChildPage count={20} /> */}
      {ChildPage({ count: 20 })}
    </>
  );
}
