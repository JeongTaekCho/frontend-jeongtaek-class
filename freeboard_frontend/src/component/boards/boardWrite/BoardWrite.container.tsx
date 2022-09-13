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

    console.log(zipCode);

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

  //게시글 등록 취소
  const writeCancle = () => {
    router.push("/boards");
  };

  //게시글 수정 취소
  const editCancle = () => {
    router.push(`/boards/${router.query.id}`);
  };

  // 게시판수정 완료 시 필수 값 체크
  const onEditBoard = async (event: any) => {
    event.preventDefault();

    interface IMyVariables {
      boardId: string;
      password?: string;
      updateBoardInput: {
        title?: string;
        contents?: string;
        youtubeUrl?: string;
        boardAddress: {
          zipcode?: string;
          address?: string;
          addressDetail?: string;
        };
      };
    }
    try {
      const myVariables: IMyVariables = {
        boardId: router.query.id,
        updateBoardInput: {
          boardAddress: {},
        },
      };
      if (password) myVariables.password = password;
      if (title) myVariables.updateBoardInput.title = title;
      if (content) myVariables.updateBoardInput.contents = content;
      if (youtubeLink) myVariables.updateBoardInput.youtubeUrl = youtubeLink;
      if (zipCode) myVariables.updateBoardInput.boardAddress.zipcode = zipCode;
      if (address) myVariables.updateBoardInput.boardAddress.address = address;
      if (address2)
        myVariables.updateBoardInput.boardAddress.addressDetail = address2;

      console.log("myVariables", myVariables);
      const result = await updateBoard({
        variables: myVariables,
      });
      console.log(result);
      router.push(`/boards/${router.query.id}`);
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
        isEdit={isEdit}
        onEditBoard={onEditBoard}
        data={data}
        writeCancle={writeCancle}
        editCancle={editCancle}
      />
    </>
  );
};

export default BoardWrite;
