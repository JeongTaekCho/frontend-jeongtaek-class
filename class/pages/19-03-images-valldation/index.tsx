import { gql, useMutation } from "@apollo/client";
// import { Modal, UploadFile } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidation } from "../../src/commons/libraries/utils";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // multiple속성으로 여러개 드래그 가능
    if (!file) return;
    const isVal = checkValidation(file);
    if (!isVal) return;
    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data.uploadFile.url);
      setImgUrl(result.data.uploadFile.url ?? "");
    } catch (error) {
      // if (error instanceof Error) Modal.error();
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      <div
        style={{ width: "50px", height: "50px", background: "#fff" }}
        onClick={onClickImage}
      >
        이미지선택
      </div>
      <input
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
        ref={fileRef}
        multiple
        // accept="image/jpeg" 확장자 검사
      />
      <img src={`https://storage.googleapis.com/${imgUrl}`} alt="asd" />
    </>
  );
}
