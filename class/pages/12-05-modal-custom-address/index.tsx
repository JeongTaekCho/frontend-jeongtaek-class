import { Modal } from "antd";
import { Address } from "cluster";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState({});

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (address: Address) => {
    setAddress(address);
    setIsOpen(false);
  };
  console.log(address);

  return (
    <>
      <button onClick={showModal}>Open Modal</button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법 => 이력서 등 */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2. 모달 삭제하는 방법 => 비밀번호, 신용카드 */}
      {isOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
      <div>{address?.address}</div>
    </>
  );
};

export default App;
