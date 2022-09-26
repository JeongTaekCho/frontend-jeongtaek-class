import { ChangeEvent, MouseEvent, useState } from "react";
import CenterWriteUi from "./cetnerWrite.presenter";
import { collection, addDoc, getFirestore } from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";
import { fireBaseApp } from "../../../../commons/libraries/firebase";
import { getDate } from "../../../../commons/libraries/utils";
import { useRouter } from "next/router";

const CenterWrite = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const router = useRouter();

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === "writer") {
      setWriter(value);
    } else if (name === "title") {
      setTitle(value);
    }
  };

  const onChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const submitWrite = async (event: MouseEvent<HTMLButtonElement>) => {
    const serviceCenter = await collection(
      getFirestore(fireBaseApp),
      "service-center"
    );
    await addDoc(serviceCenter, {
      writer,
      title,
      contents,
      createdAt: getDate(new Date()),
      id: uuidv4(),
    });

    void router.push(`/service/center`);
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
