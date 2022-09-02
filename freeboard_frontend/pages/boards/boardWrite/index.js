import { useState } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import {
  Wrapper,
  Container,
  BoardWriteTitle,
  BoardWriteForm,
  WritePasswordBox,
  DefaultInputBox,
  DefaultInput,
  HalfInputBox,
  TextareaBox,
  AddressWriteBox,
  AddressNumInputBox,
  AddressNumInput,
  PhotoClipBox,
  PhotoClipBtnBox,
  MainSelectBox,
  MainSelectInputBox,
  FormSubmitBtn,
  ErrorMsg,
} from "../../../styles/emotion";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
      updatedAt
      boardAddress
    }
  }
`;

const FETCH_BOARD = gql`
  query {
    fetchBoard(boardId: "63108b6b6cf4690029959d81") {
      _id
      writer
      title
      contents
    }
  }
`;

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

    const result = await createBoard({
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
      // alert("회원가입이 완료 되었습니다.");
    }
  };

  return (
    <Wrapper>
      <Container>
        <BoardWriteTitle>게시물 등록</BoardWriteTitle>
        <BoardWriteForm>
          <WritePasswordBox>
            <HalfInputBox>
              <DefaultInputBox>
                <p>작성자</p>
                <DefaultInput
                  type="text"
                  placeholder="이름을 적어주세요."
                  onChange={onChangeinputState}
                  name="writer"
                />
                <ErrorMsg>{writerError}</ErrorMsg>
              </DefaultInputBox>
            </HalfInputBox>
            <HalfInputBox>
              <DefaultInputBox>
                <p>비밀번호</p>
                <DefaultInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={onChangeinputState}
                  name="password"
                />
                <ErrorMsg>{passwordError}</ErrorMsg>
              </DefaultInputBox>
            </HalfInputBox>
          </WritePasswordBox>
          <DefaultInputBox>
            <p>제목</p>
            <DefaultInput
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={onChangeinputState}
              name="title"
            />
            <ErrorMsg>{titleError}</ErrorMsg>
          </DefaultInputBox>
          <TextareaBox>
            <p>내용</p>
            <textarea
              type="text"
              placeholder="내용을 작성해주세요."
              onChange={onChangeinputState}
              name="content"
            />
            <ErrorMsg>{contentError}</ErrorMsg>
          </TextareaBox>
          <AddressWriteBox>
            <p>주소</p>
            <AddressNumInputBox>
              <AddressNumInput
                onChange={onChangeinputState}
                placeholder="00000"
                name="zipCode"
              />
              <button type="button">우편번호 검색</button>
              <ErrorMsg>{zipCodeError}</ErrorMsg>
            </AddressNumInputBox>
            <DefaultInput
              className="m1530"
              onChange={onChangeinputState}
              name="address"
            />
            <DefaultInput onChange={onChangeinputState} name="address2" />
            <ErrorMsg>{addressError}</ErrorMsg>
          </AddressWriteBox>
          <DefaultInputBox>
            <p>유튜브</p>
            <DefaultInput
              placeholder="링크를 복사해주세요."
              onChange={onChangeinputState}
              name="youtubeLink"
            />
            <ErrorMsg>{youtubeLinkError}</ErrorMsg>
          </DefaultInputBox>
          <PhotoClipBox>
            <p>사진 첨부</p>
            <PhotoClipBtnBox>
              <button>+</button>
              <button>+</button>
              <button>+</button>
            </PhotoClipBtnBox>
          </PhotoClipBox>
          <MainSelectBox>
            <p>메인 설정</p>
            <MainSelectInputBox>
              <div>
                <input id="youtube" type="radio" name="mainSelect" />
                <label htmlFor="youtube">유튜브</label>
              </div>
              <div>
                <input id="photo" type="radio" name="mainSelect" />
                <label htmlFor="photo">사진</label>
              </div>
            </MainSelectInputBox>
          </MainSelectBox>
          <FormSubmitBtn onClick={onSubmitBoard}>등록하기</FormSubmitBtn>
        </BoardWriteForm>
      </Container>
    </Wrapper>
  );
};

export default BoardWrite;
