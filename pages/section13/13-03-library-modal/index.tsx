import { Modal } from "antd";

export default function LibraryModalPage(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({
      title: "success",
      content: "성공!",
    });
  };

  const onClickError = (): void => {
    Modal.error({
      title: "error",
      content: "실패!",
    });
  };

  return (
    <div>
      <button onClick={onClickSuccess}>성공</button>
      <button onClick={onClickError}>실패</button>
    </div>
  );
}
