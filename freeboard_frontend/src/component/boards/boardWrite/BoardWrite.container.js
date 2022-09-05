import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUi from "./boardWrite.presenter";
import { CREATE_BOARD } from "./boardWrite.querys";

const BoardWrite = () => {
  //게시판 인풋 상태관리
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  //에러메세지 상태관리
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [youtubeLinkError, setYoutubeLinkError] = useState("");

  const router = useRouter();

  //게시판 인풋 온페인지 함수
  const onChangeinputState = (event) => {
    const {
      target: { name, value },
    } = event;

    //인풋 상태 값 저장
    if (name === "writer") {
      setWriter(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    } else if (name === "zipCode") {
      setZipCode(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "address2") {
      setAddress2(value);
    } else if (name === "youtubeLink") {
      setYoutubeLink(value);
    }

    // 인풋에 값 넣었을 때 에러메세지 지우기
    if (name === "writer" && value !== "") {
      setWriterError("");
    } else if (name === "password" && value !== "") {
      setPasswordError("");
    } else if (name === "title" && value !== "") {
      setTitleError("");
    } else if (name === "content" && value !== "") {
      setContentError("");
    } else if (name === "zipCode" && value !== "") {
      setZipCodeError("");
    } else if (name === "address2" && value !== "") {
      setAddressError("");
    } else if (name === "youtubeLink" && value !== "") {
      setYoutubeLinkError("");
    }
  };

  //게시글 등록 API;

  const [createBoard] = useMutation(CREATE_BOARD);

  //회원가입 완료 시 필수 값 체크
  const onSubmitBoard = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents: content,
            youtubeUrl: youtubeLink,
            boardAddress: {
              zipcode: zipCode,
              address,
              addressDetail: address2,
            },
            images: [],
          },
        },
      });

      if (!writer) {
        setWriterError("작성자를 입력해주세요.");
      }
      if (!password) {
        setPasswordError("비밀번호를 입력해주세요.");
      }
      if (!title) {
        setTitleError("제목을 입력해주세요.");
      }
      if (!content) {
        setContentError("내용을 입력해주세요.");
      }
      if (!zipCode) {
        setZipCodeError("우편번호를 찾으세요");
      }
      if (!address2) {
        setAddressError("상세주소를 입력해주세요.");
      }
      if (!youtubeLink) {
        setYoutubeLinkError("유튜브 링크를 입력해주세요.");
      }
      if (
        writer &&
        password &&
        title &&
        content &&
        zipCode &&
        address &&
        address2 &&
        youtubeLink
      ) {
        alert("게시글 등록이 완료 되었습니다.");
        router.push(`/boards/${data.createBoard._id}`);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <BoardWriteUi
        onChangeinputState={onChangeinputState}
        onSubmitBoard={onSubmitBoard}
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentError={contentError}
        zipCodeError={zipCodeError}
        addressError={addressError}
        youtubeLinkError={youtubeLinkError}
      />
    </>
  );
};

export default BoardWrite;
