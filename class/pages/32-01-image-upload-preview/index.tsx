import { gql, useMutation } from "@apollo/client";
// import { Modal, UploadFile } from "antd";
import { ChangeEvent, useState } from "react";

export default function ImageUploadPage() {
  const [imgUrl, setImgUrl] = useState("");

  //   const [uploadFile] = useMutation(UPLOAD_FILE);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // multiple속성으로 여러개 드래그 가능

    if (!file) return;

    //     try {
    //       const result = await uploadFile({ variables: { file } });
    //       console.log(result.data.uploadFile.url);
    //       setImgUrl(result.data.uploadFile.url ?? "");
    //     } catch (error) {
    //       if (error instanceof Error) Modal.error();
    //     }

    // 1. 임시 url 생성 - (가짜URL - 내 브라우저에서만 접근 가능)

    const result = URL.createObjectURL(file);
    setImgUrl(result);

    console.log(result);

    // 2. 임시 url 생성 - (진짜 url - 다른 브라우저에서도 접근 가능)

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      const fileUrl = event.target.result; // 게시판에서 event.target.id 대신 event.currentTarget.id를 썼던 이유 : event.target은 태그만을 가르키지 않음.
      console.log(fileUrl);
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} alt="asd" />
    </>
  );
}
