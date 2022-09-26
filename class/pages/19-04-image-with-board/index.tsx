import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidation } from "../../src/commons/libraries/utils";

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

const GraphqlMutationInputPage = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

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

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        // variables 이게 달러 역할을 함.
        createBoardInput: {
          writer,
          password: "1234",
          title,
          contents: content,
          images: [imgUrl],
        },
      },
    });
    console.log(result);
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter} /> <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContent} /> <br />
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
      <button onClick={onClickSubmit}>Graphql - API 요청하기</button>
    </>
  );
};

export default GraphqlMutationInputPage;
