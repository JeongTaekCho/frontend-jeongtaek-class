import { ChangeEvent, useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardWriteUi from "./BoardWrite.presenter";
import { CREATE_BOARD, EDIT_BOARD, UPLOAD_FILE } from "./BoardWrite.querys";
import { FETCH_BOARD } from "../boardDetail/BoardDetail.querys";
import { IBoardWrite, IMyVariables } from "./BoardWrite.types";
import { IMutation, IQuery } from "../../../commons/types/generated/types";
import { errorModal, successModal } from "../../common/modal/modal-function";
import { Address } from "react-daum-postcode";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const BoardWrite = ({ isEdit }: IBoardWrite) => {
  // 게시판 인풋 상태관리
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [quill, setQuill] = useState("");

  const ReactQuill = dynamic(import("react-quill"));

  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  // 주소
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [fileUrl, setFileUrl] = useState("");
  const [fileUrl2, setFileUrl2] = useState("");
  const [fileUrl3, setFileUrl3] = useState("");

  const router: NextRouter = useRouter();
  // 게시글 데이터 쿼리
  const { data } = useQuery<Pick<IQuery, "fetchBoard">>(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  useEffect(() => {
    if (data?.fetchBoard.images?.[0]) {
      setFileUrl(data?.fetchBoard.images?.[0]);
    }
    if (data?.fetchBoard.images?.[1]) {
      setFileUrl2(data?.fetchBoard.images?.[1]);
    }
    if (data?.fetchBoard.images?.[2]) {
      setFileUrl3(data?.fetchBoard.images?.[2]);
    }
  }, [data]);

  const onChangeQuill = (value: string) => {
    setValue("contents", value);
  };

  // 게시글 등록 뮤테이션

  const [createBoard] =
    useMutation<Pick<IMutation, "createBoard">>(CREATE_BOARD);

  // 게시글 수정 뮤테이션
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">>(EDIT_BOARD);

  // 업로드 파일 뮤테이션
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">>(UPLOAD_FILE);

  // 게시판등록 완료 시 필수 값 체크
  const onSubmitBoard = async (datas: any) => {
    try {
      datas.images = [fileUrl, fileUrl2, fileUrl3];
      const { data } = await createBoard({
        variables: {
          createBoardInput: datas,
        },
      });
      successModal("게시글 등록이 완료 되었습니다.");
      await router.push(`/boards/${String(data?.createBoard._id)}`);
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
  const onEditBoard = async (datas) => {
    // event.preventDefault();

    try {
      const myVariables: IMyVariables = {
        boardId: String(router.query.id),
        updateBoardInput: {},
      };
      if (
        datas.boardAddress.zipcode ||
        datas.boardAddress.address ||
        datas.boardAddress.addressDetail
      ) {
        myVariables.updateBoardInput.boardAddress = {};
        if (datas.boardAddress.zipcode)
          myVariables.updateBoardInput.boardAddress.zipcode =
            datas.boardAddress.zipcode;
        if (datas.boardAddress.address)
          myVariables.updateBoardInput.boardAddress.address =
            datas.boardAddress.address;
        if (datas.boardAddress.addressDetail)
          myVariables.updateBoardInput.boardAddress.addressDetail =
            datas.boardAddress.addressDetail;
      }
      if (datas.password) myVariables.password = datas.password;
      if (datas.title) myVariables.updateBoardInput.title = datas.title;
      if (datas.contents)
        myVariables.updateBoardInput.contents = datas.contents;
      if (datas.youtubeLink)
        myVariables.updateBoardInput.youtubeUrl = datas.youtubeLink;
      if (fileUrl || fileUrl2 || fileUrl3)
        myVariables.updateBoardInput.images = [fileUrl, fileUrl2, fileUrl3];

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
    setZipCode(address.zonecode);
    setAddress(`${address.address} ${address.jibunAddress}`);
    setValue("boardAddress.zipcode", address.zonecode);
    setValue(
      "boardAddress.address",
      `${address.address} ${address.jibunAddress}`
    );
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    if (result.data !== undefined && result.data !== null) {
      setFileUrl(result.data.uploadFile.url.replaceAll(" ", "%20"));
    }
  };
  const onChangeFile2 = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    if (result.data !== undefined && result.data !== null) {
      setFileUrl2(result.data.uploadFile.url.replaceAll(" ", "%20"));
    }
  };
  const onChangeFile3 = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];

    const result = await uploadFile({
      variables: {
        file,
      },
    });
    if (result.data !== undefined && result.data !== null) {
      setFileUrl3(result.data.uploadFile.url.replaceAll(" ", "%20"));
    }
  };

  return (
    <>
      <BoardWriteUi
        onSubmitBoard={onSubmitBoard}
        // writerError={writerError}
        // passwordError={passwordError}
        // titleError={titleError}
        // contentError={contentError}
        // zipCodeError={zipCodeError}
        // addressError={addressError}
        // youtubeLinkError={youtubeLinkError}
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
        onChangeFile2={onChangeFile2}
        onChangeFile3={onChangeFile3}
        fileUrl={fileUrl}
        fileUrl2={fileUrl2}
        fileUrl3={fileUrl3}
        onChangeQuill={onChangeQuill}
        register={register}
        handleSubmit={handleSubmit}
        quill={quill}
        ReactQuill={ReactQuill}
      />
    </>
  );
};

export default BoardWrite;
