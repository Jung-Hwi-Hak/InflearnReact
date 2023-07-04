import type { MouseEvent } from "react";
import { MyIcon } from "./style";

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLSpanElement>): void => {
    console.log(event.currentTarget.id);
  };

  return <MyIcon id="delete" onClick={onClickDelete} />;
}
