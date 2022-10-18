import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
// import { Modal, UploadFile } from "antd";
import { ChangeEvent, useState } from "react";

export default function ImageUploadPage() {
  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState<File>();

  const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
      #타임적는곳
      createBoard(createBoardInput: $createBoardInput) {
        #실제 우리가 전달할 변수 적는 곳
        _id
      }
    }
  `;

  const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
      uploadFile(file: $file) {
        url
      }
    }
  `;
  const [createBoard] = useMutation(CREATE_BOARD);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // multiple속성으로 여러개 드래그 가능

    if (!file) return;

    // 1. 임시 url 생성 - (가짜URL - 내 브라우저에서만 접근 가능)

    // const result = URL.createObjectURL(file);
    // setImgUrl(result);

    // console.log(result);

    // 2. 임시 url 생성 - (진짜 url - 다른 브라우저에서도 접근 가능)

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      const fileUrl = event.target.result;
      console.log(fileUrl);
      setImgUrl(fileUrl);
      setFile(file);
    };
  };

  const onClickSubmit = async () => {
    const resultFile = await uploadFile({
      variables: {
        file,
      },
    });

    const url = resultFile.data?.uploadFile.url;

    const result = await createBoard({
      variables: {
        // variables 이게 달러 역할을 함.
        createBoardInput: {
          writer: "깜장이",
          password: "1234",
          title: "깜장이 졸귀",
          contents: "content",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} alt="asd" />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
