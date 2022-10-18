import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
// import { Modal, UploadFile } from "antd";
import { ChangeEvent, useState } from "react";

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

export default function ImageUploadPage() {
  // const [imgUrl, setImgUrl] = useState("");
  // const [file, setFile] = useState<File>();
  const [imgUrls, setImgUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [createBoard] = useMutation(CREATE_BOARD);

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
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
        const fileUrl = event.target?.result;
        console.log(fileUrl);
        // setImgUrl(fileUrl);
        // setFile(file);

        const tempUrls = [...imgUrls];
        tempUrls[index] = fileUrl;
        setImgUrls(tempUrls);

        const tempFiles = [...files];
        tempFiles[index] = file;
        setFiles(tempFiles);
      };
    };

  const onClickSubmit = async () => {
    // 1. promise.all 안썼을 때

    // const resultFile0 = await uploadFile({
    //   variables: {
    //     file: files[0],
    //   },
    // });
    // const resultFile1 = await uploadFile({
    //   variables: {
    //     file: files[0],
    //   },
    // });
    // const resultFile2 = await uploadFile({
    //   variables: {
    //     file: files[0],
    //   },
    // });
    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;

    // const resultUrls = [url0, url1, url2];

    // 2.promise.all 썼을 때

    // const resultFile = await Promise.all([
    //   uploadFile({
    //     variables: {
    //       file: files[0],
    //     },
    //   }),
    //   uploadFile({
    //     variables: {
    //       file: files[1],
    //     },
    //   }),
    //   uploadFile({
    //     variables: {
    //       file: files[2],
    //     },
    //   }),
    // ]);

    // const resultUrls = resultFile.map((el) =>
    //   el ? el.data?.uploadFile.url : ""
    // );

    // 3. promise.all 썼을 때(리팩토링)

    const uploadFileArr = files.map(
      (el) =>
        el &&
        uploadFile({
          variables: {
            file: el,
          },
        })
    );

    const resultFile = await Promise.all(uploadFileArr);

    const resultUrls = resultFile.map((el) =>
      el ? el.data?.uploadFile.url : ""
    );

    const result = await createBoard({
      variables: {
        // variables 이게 달러 역할을 함.
        createBoardInput: {
          writer: "깜장이",
          password: "1234",
          title: "깜장이 졸귀",
          contents: "content",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imgUrls[0]} />
      <img src={imgUrls[1]} />
      <img src={imgUrls[2]} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
