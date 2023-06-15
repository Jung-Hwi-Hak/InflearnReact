import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
export default function LibraryModalCustomPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  // const showModal = (): void => {
  //   setIsOpen(true);
  // };

  // const handelOk = (): void => {
  //   setIsOpen(false);
  // };

  // const handelCancel = (): void => {
  //   setIsOpen(false);
  // };

  // const handleComplete = (data: Address): void => {
  //   console.log(data);
  //   setIsOpen(false);
  // };

  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    onToggleModal();
  };

  return (
    <div>
      <Button onClick={onToggleModal} type="primary">
        모달창 숨기는 방법
      </Button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법 */}
      {/* <Modal
        title="모달창 숨기는 방법"
        open={isOpen}
        onOk={handelOk}
        onCancel={handelCancel}
      >
        <DaumPostcodeEmbed onComplete={handelComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2. 모달 삭제하는 방법 */}
      {isOpen && (
        <Modal
          title="모달 삭제하는 방법"
          open={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </div>
  );
}
