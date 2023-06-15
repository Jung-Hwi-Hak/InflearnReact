import { useState } from "react";
import { Modal, Button } from "antd";

export default function LibraryModalCustomPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };

  const handelOk = (): void => {
    setIsOpen(false);
  };

  const handelCancel = (): void => {
    setIsOpen(false);
  };
  return (
    <div>
      <Button onClick={showModal} type="primary">
        모달창 열기
      </Button>
      <Modal
        title="모달 제목"
        open={isOpen}
        onOk={handelOk}
        onCancel={handelCancel}
      >
        비밀번호 입력: <input type="password" />
      </Modal>
    </div>
  );
}
