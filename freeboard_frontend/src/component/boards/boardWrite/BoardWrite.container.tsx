import { ChangeEvent, MouseEvent, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardWriteUi from "./BoardWrite.presenter";
import { CREATE_BOARD, EDIT_BOARD, UPLOAD_FILE } from "./BoardWrite.querys";
import { FETCH_BOARD } from "../boardDetail/BoardDetail.querys";
import { IBoardWrite, IMyVariables } from "./BoardWrite.types";
import { IMutation, IQuery } from "../../../commons/types/generated/types";
import { errorModal, successModal } from "../../common/modal/modal-function";
import { Address } from "react-daum-postcode";

const BoardWrite = ({ isEdit }: IBoardWrite) => {
  // 게시판 인풋 상태관리
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  // 에러메세지 상태관리
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [youtubeLinkError, setYoutubeLinkError] = useState("");

  // 주소
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [fileUrl, setFileUrl] = useState("");

  const router: NextRouter = useRouter();

  // 게시글 데이터 쿼리
  const { data } = useQuery<Pick<IQuery, "fetchBoard">>(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  // 게시판 인풋 온페인지 함수
  const onChangeinputState = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;

    // 인풋 상태 값 저장
    if (name === "writer") {
      setWriter(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    } else if (name === "zipCode") {
      setZipCode((prev) => value);
    } else if (name === "address") {
      setAddress((prev) => value);
    } else if (name === "address2") {
      setAddress2((prev) => value);
    } else if (name === "youtubeLink") {
      setYoutubeLink(value);
    }
    console.log(zipCode, address, address2);

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
  // 게시글 등록 뮤테이션

  const [createBoard] =
    useMutation<Pick<IMutation, "createBoard">>(CREATE_BOARD);

  // 게시글 수정 뮤테이션
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">>(EDIT_BOARD);

  // 업로드 파일 뮤테이션
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">>(UPLOAD_FILE);

  // 게시판등록 완료 시 필수 값 체크
  const onSubmitBoard = async (event: MouseEvent<HTMLButtonElement>) => {
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
            images: [fileUrl],
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
        successModal("게시글 등록이 완료 되었습니다.");
        await router.push(`/boards/${String(data?.createBoard._id)}`);
      }
    } catch (error) {
      if (error instanceof Error) errorModal(error.message);
    }
  };

  // 게시글 등록 취소
  const writeCancle = async () => {
    successModal("게시글 작성을 취소하였습니다.");
    await router.push("/boards");
  };

  // 게시글 수정 취소
  const editCancle = async () => {
    successModal("게시글 수정을 취소하였습니다.");
    await router.push(`/boards/${String(router.query.id)}`);
  };

  // 게시판수정 완료 시 필수 값 체크
  const onEditBoard = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const myVariables: IMyVariables = {
        boardId: String(router.query.id),
        updateBoardInput: {},
      };
      if (zipCode || address || address2) {
        myVariables.updateBoardInput.boardAddress = {};
        if (zipCode)
          myVariables.updateBoardInput.boardAddress.zipcode = zipCode;
        if (address)
          myVariables.updateBoardInput.boardAddress.address = address;
        if (address2)
          myVariables.updateBoardInput.boardAddress.addressDetail = address2;
      }
      if (password) myVariables.password = password;
      if (title) myVariables.updateBoardInput.title = title;
      if (content) myVariables.updateBoardInput.contents = content;
      if (youtubeLink) myVariables.updateBoardInput.youtubeUrl = youtubeLink;
      if (fileUrl) myVariables.updateBoardInput.images = [fileUrl];

      await updateBoard({
        variables: myVariables,
      });
      successModal("게시글 수정을 완료하였습니다.");
      await router.push(`/boards/${String(router.query.id)}`);
    } catch (error) {
      if (error instanceof Error) errorModal(error.message);
    }
  };

  const ToggleAddressModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    setIsModalOpen((prev) => !prev);
    console.log(address);
    setZipCode(address.zonecode);
    setAddress(`${address.address} ${address.jibunAddress}`);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    if (result.data !== undefined && result.data !== null) {
      setFileUrl(result.data.uploadFile.url);
    }
  };

  console.log(fileUrl);

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
        isModalOpen={isModalOpen}
        ToggleAddressModal={ToggleAddressModal}
        handleComplete={handleComplete}
        zipCode={zipCode}
        address={address}
        onChangeFile={onChangeFile}
        fileUrl={fileUrl}
      />
    </>
  );
};

export default BoardWrite;
