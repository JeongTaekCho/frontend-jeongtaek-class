import { ChangeEvent, MouseEvent, useState } from "react";
import CenterWriteUi from "./cetnerWrite.presenter";
import { collection, addDoc, getFirestore } from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";
import { fireBaseApp, storage } from "../../../../commons/libraries/firebase";
import { getDate } from "../../../../commons/libraries/utils";
import { useRouter } from "next/router";
import { ref, uploadBytes } from "firebase/storage";

const CenterWrite = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [file, setFile] = useState("");

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

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files[0]);
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
      id: uuidv4(),
      writer,
      title,
      contents,
      createdAt: getDate(new Date()),
    });

    const fileRef = ref(storage, file.name);
    const imagesRef = ref(storage, `images/${file.name}`);
    uploadBytes(fileRef, file);

    void router.push(`/service/center`);
  };

  return (
    <CenterWriteUi
      onChangeInput={onChangeInput}
      onChangeTextarea={onChangeTextarea}
      submitWrite={submitWrite}
      onChangeFile={onChangeFile}
    />
  );
};

export default CenterWrite;
