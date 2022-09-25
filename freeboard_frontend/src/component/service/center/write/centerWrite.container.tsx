import { useState } from "react";
import CenterWriteUi from "./cetnerWrite.presenter";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { fireBaseApp } from "../../../../../pages/_app";

const CenterWrite = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeInput = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "writer") {
      setWriter(value);
    } else if (name === "title") {
      setTitle(value);
    }
  };

  const onChangeTextarea = (event) => {
    setContents(event.target.value);
  };

  const submitWrite = async () => {
    const serviceCenter = await collection(
      getFirestore(fireBaseApp),
      "service-center"
    );
    await addDoc(serviceCenter, {
      writer,
      title,
      contents,
      createdAt: new Date(),
      id: Math.random(),
    });
  };

  return (
    <CenterWriteUi
      onChangeInput={onChangeInput}
      onChangeTextarea={onChangeTextarea}
      submitWrite={submitWrite}
    />
  );
};

export default CenterWrite;
