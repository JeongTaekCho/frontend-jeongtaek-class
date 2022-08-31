import { useState } from "react";
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
} from "../../styles/emotion";

const BoardWrite = () => {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [youtubeLinkError, setYoutubeLinkError] = useState("");
  const [writeConfirm, setWriteConfirm] = useState(true);

  const onchangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };
  const onchangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };
  const onchangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };
  const onchangeContent = (event) => {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }
  };
  const onchangeZipCode = (event) => {
    setZipCode(event.target.value);
    if (event.target.value !== "") {
      setZipCodeError("");
    }
  };
  const onchangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const onchangeAddress2 = (event) => {
    setAddress2(event.target.value);
    if (event.target.value !== "") {
      setAddressError("");
    }
  };
  const onchangeYoutubeLink = (event) => {
    setYoutubeLink(event.target.value);
    if (event.target.value !== "") {
      setYoutubeLinkError("");
    }
  };

  const onSubmitBoard = (event) => {
    event.preventDefault();
    if (writer === "") {
      setWriterError("작성자를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (title === "") {
      setTitleError("제목을 입력해주세요.");
    }
    if (content === "") {
      setContentError("내용을 입력해주세요.");
    }
    if (zipCode === "") {
      setZipCodeError("우편번호를 찾으세요");
    }
    if (address2 === "") {
      setAddressError("상세주소를 입력해주세요.");
    }
    if (youtubeLink === "") {
      setYoutubeLinkError("유튜브 링크를 입력해주세요.");
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
                  onChange={onchangeWriter}
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
                  onChange={onchangePassword}
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
              onChange={onchangeTitle}
            />
            <ErrorMsg>{titleError}</ErrorMsg>
          </DefaultInputBox>
          <TextareaBox>
            <p>내용</p>
            <textarea
              type="text"
              placeholder="내용을 작성해주세요."
              onChange={onchangeContent}
            />
            <ErrorMsg>{contentError}</ErrorMsg>
          </TextareaBox>
          <AddressWriteBox>
            <p>주소</p>
            <AddressNumInputBox>
              <AddressNumInput onChange={onchangeZipCode} placeholder="00000" />
              <button type="button">우편번호 검색</button>
              <ErrorMsg>{zipCodeError}</ErrorMsg>
            </AddressNumInputBox>
            <DefaultInput className="m1530" onChange={onchangeAddress} />
            <DefaultInput onChange={onchangeAddress2} />
            <ErrorMsg>{addressError}</ErrorMsg>
          </AddressWriteBox>
          <DefaultInputBox>
            <p>유튜브</p>
            <DefaultInput
              placeholder="링크를 복사해주세요."
              onChange={onchangeYoutubeLink}
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
