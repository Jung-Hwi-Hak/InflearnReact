import type { MouseEvent } from "react";
import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

// antDesign css 방법
const MyIcon = styled(UpCircleOutlined)`
  color: red;
  font-size: 50px;
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLSpanElement>): void => {
    console.log(event.currentTarget.id);
  };

  return <MyIcon id="delete" onClick={onClickDelete} />;
}
