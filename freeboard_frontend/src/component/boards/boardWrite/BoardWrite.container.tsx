import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardWriteUi from "./BoardWrite.presenter";
import { CREATE_BOARD, EDIT_BOARD } from "./boardWrite.querys";
import { FETCH_BOARD } from "../boardDetail/BoardDetail.querys";

interface IBoardWrite {
  isEdit: boolean;
}

const BoardWrite = ({ isEdit }: IBoardWrite) => {
  //게시판 인풋 상태관리
  const [writer, setWriter]: (string | Function)[] = useState("");
  const [password, setPassword]: (string | Function)[] = useState("");
  const [title, setTitle]: (string | Function)[] = useState("");
  const [content, setContent]: (string | Function)[] = useState("");
  const [zipCode, setZipCode]: (string | Function)[] = useState("");
  const [address, setAddress]: (string | Function)[] = useState("");
  const [address2, setAddress2]: (string | Function)[] = useState("");
  const [youtubeLink, setYoutubeLink]: (string | Function)[] = useState("");

  //에러메세지 상태관리
  const [writerError, setWriterError]: (string | Function)[] = useState("");
  const [passwordError, setPasswordError]: (string | Function)[] = useState("");
  const [titleError, setTitleError]: (string | Function)[] = useState("");
  const [contentError, setContentError]: (string | Function)[] = useState("");
  const [zipCodeError, setZipCodeError]: (string | Function)[] = useState("");
  const [addressError, setAddressError]: (string | Function)[] = useState("");
  const [youtubeLinkError, setYoutubeLinkError]: (string | Function)[] =
    useState("");

  const router: any = useRouter();

  // 게시글 데이터 쿼리
  const { data }: { data: any } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  //게시판 인풋 온페인지 함수
  const onChangeinputState = (event: any) => {
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
  //게시글 등록 뮤테이션

  const [createBoard] = useMutation(CREATE_BOARD);

  //게시글 수정 뮤테이션
  const [updateBoard] = useMutation(EDIT_BOARD);

  // 게시판등록 완료 시 필수 값 체크
  const onSubmitBoard = async (event: any) => {
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

  // 게시판수정 완료 시 필수 값 체크
  const onEditBoard = async (event: any) => {
    console.log(router.query.id);
    event.preventDefault();
    await updateBoard({
      variables: {
        updateBoardInput: {
          title: title,
          contents: content,
          youtubeUrl: youtubeLink,
          boardAddress: {
            zipcode: zipCode,
            address: address,
            addressDetail: address2,
          },
        },
        boardId: router.query.id,
        password: password,
      },
    });

    router.push(`/boards/${router.query.id}`);
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
        isEdit={isEdit}
        onEditBoard={onEditBoard}
        data={data}
      />
    </>
  );
};

export default BoardWrite;
