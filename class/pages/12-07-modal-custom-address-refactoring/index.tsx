import { Modal } from "antd";
import { Address } from "cluster";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState({});

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    setAddress(address);
    setIsOpen((prev) => !prev);
  };
  console.log(address);

  return (
    <>
      <button onClick={onToggleModal}>Open Modal</button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법 => 이력서 등 */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2. 모달 삭제하는 방법 => 비밀번호, 신용카드 */}
      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
      <div>{address?.address}</div>
    </>
  );
};

export default App;
