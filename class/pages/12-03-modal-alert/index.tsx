import { Modal } from "antd";

const success = () => {
  Modal.success({
    content: "게시글 등록 성공",
  });
};

const error = () => {
  Modal.error({
    title: "This is an error message",
    content: "some messages...some messages...",
  });
};

const App: React.FC = () => (
  <>
    <button onClick={success}>성공했을 때</button>
    <button onClick={error}>실패했을 때</button>
  </>
);

export default App;
