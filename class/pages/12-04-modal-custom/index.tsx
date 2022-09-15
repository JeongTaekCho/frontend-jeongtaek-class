import { Modal } from "antd";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>Open Modal</button>
      <Modal
        title="Basic Modal"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input type="password" placeholder="비밀번호를 입력해주세요." />
      </Modal>
    </>
  );
};

export default App;
