import { gql, useMutation } from "@apollo/client";
// import { Modal, UploadFile } from "antd";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imgUrl, setImgUrl] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // multiple속성으로 여러개 드래그 가능

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data.uploadFile.url);
      setImgUrl(result.data.uploadFile.url ?? "");
    } catch (error) {
      // if (error instanceof Error) Modal.error();
    }
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imgUrl}`} alt="asd" />
    </>
  );
}
