import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "./BoardWrite.styled";
import { IBoardWriteUi } from "./BoardWrite.types";
import "antd/dist/antd.css";

const BoardWriteUi = ({
  onChangeinputState,
  onSubmitBoard,
  writerError,
  passwordError,
  titleError,
  contentError,
  zipCodeError,
  addressError,
  youtubeLinkError,
  isEdit,
  onEditBoard,
  data,
  writeCancle,
  editCancle,
  isModalOpen,
  ToggleAddressModal,
  handleComplete,
  zipCode,
  address,
}: IBoardWriteUi) => {
  console.log(data);
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.BoardWriteTitle>
            게시물 {isEdit ? "수정" : "등록"}
          </S.BoardWriteTitle>
          <S.BoardWriteForm>
            <S.WritePasswordBox>
              <S.HalfInputBox>
                <S.DefaultInputBox>
                  <p>작성자</p>
                  <S.DefaultInput
                    type="text"
                    placeholder="이름을 적어주세요."
                    onChange={onChangeinputState}
                    name="writer"
                    defaultValue={
                      data?.fetchBoard.writer
                        ? String(data?.fetchBoard.writer)
                        : ""
                    }
                  />
                  <S.ErrorMsg>{writerError}</S.ErrorMsg>
                </S.DefaultInputBox>
              </S.HalfInputBox>
              <S.HalfInputBox>
                <S.DefaultInputBox>
                  <p>비밀번호</p>
                  <S.DefaultInput
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    onChange={onChangeinputState}
                    name="password"
                  />
                  <S.ErrorMsg>{passwordError}</S.ErrorMsg>
                </S.DefaultInputBox>
              </S.HalfInputBox>
            </S.WritePasswordBox>
            <S.DefaultInputBox>
              <p>제목</p>
              <S.DefaultInput
                type="text"
                placeholder="제목을 작성해주세요."
                onChange={onChangeinputState}
                name="title"
                defaultValue={data?.fetchBoard?.title}
              />
              <S.ErrorMsg>{titleError}</S.ErrorMsg>
            </S.DefaultInputBox>
            <S.TextareaBox>
              <p>내용</p>
              <textarea
                placeholder="내용을 작성해주세요."
                onChange={onChangeinputState}
                name="content"
                defaultValue={data?.fetchBoard?.contents}
              />
              <S.ErrorMsg>{contentError}</S.ErrorMsg>
            </S.TextareaBox>
            <S.AddressWriteBox>
              <p>주소</p>
              <S.AddressNumInputBox>
                <S.AddressNumInput
                  placeholder="00000"
                  name="zipCode"
                  value={
                    // (isEdit &&
                    //   data?.fetchBoard.boardAddress?.zipcode &&
                    //   address) ??
                    // !isEdit
                    //   ? zipCode
                    //   : String(data?.fetchBoard.boardAddress?.zipcode)

                    (address || data?.fetchBoard.boardAddress?.zipcode) ?? ""
                  }
                  disabled
                />
                <button type="button" onClick={ToggleAddressModal}>
                  우편번호 검색
                </button>
                <S.ErrorMsg>{zipCodeError}</S.ErrorMsg>
              </S.AddressNumInputBox>
              <S.DefaultInput
                className="m1530"
                name="address"
                value={
                  (isEdit &&
                    data?.fetchBoard.boardAddress?.address &&
                    address) ??
                  !isEdit
                    ? address
                    : String(data?.fetchBoard.boardAddress?.address)
                }
                disabled
              />
              <S.DefaultInput
                onChange={onChangeinputState}
                name="address2"
                defaultValue={
                  data?.fetchBoard?.boardAddress?.addressDetail
                    ? String(data?.fetchBoard?.boardAddress?.addressDetail)
                    : ""
                }
              />
              <S.ErrorMsg>{addressError}</S.ErrorMsg>
            </S.AddressWriteBox>
            <S.DefaultInputBox>
              <p>유튜브</p>
              <S.DefaultInput
                placeholder="링크를 복사해주세요."
                onChange={onChangeinputState}
                name="youtubeLink"
                defaultValue={
                  data?.fetchBoard?.youtubeUrl
                    ? String(data?.fetchBoard?.youtubeUrl)
                    : ""
                }
              />
              <S.ErrorMsg>{youtubeLinkError}</S.ErrorMsg>
            </S.DefaultInputBox>
            <S.PhotoClipBox>
              <p>사진 첨부</p>
              <S.PhotoClipBtnBox>
                <button>
                  <span>+</span>
                </button>
                <button>
                  <span>+</span>
                </button>
                <button>
                  <span>+</span>
                </button>
              </S.PhotoClipBtnBox>
            </S.PhotoClipBox>
            <S.MainSelectBox>
              <p>메인 설정</p>
              <S.MainSelectInputBox>
                <div>
                  <input id="youtube" type="radio" name="mainSelect" />
                  <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
                </div>
                <div>
                  <input id="photo" type="radio" name="mainSelect" />
                  <S.RadioLabel htmlFor="photo">사진</S.RadioLabel>
                </div>
              </S.MainSelectInputBox>
            </S.MainSelectBox>
            <S.cancleBtnBox>
              <S.FormSubmitBtn onClick={isEdit ? onEditBoard : onSubmitBoard}>
                {isEdit ? "수정" : "등록"}하기
              </S.FormSubmitBtn>
              <S.FormCancleBtn onClick={isEdit ? editCancle : writeCancle}>
                취소하기
              </S.FormCancleBtn>
            </S.cancleBtnBox>
          </S.BoardWriteForm>
        </S.Container>
      </S.Wrapper>
      {isModalOpen && (
        <Modal
          title="대한민국의 모든 주소를 찾아주는 신기한 도구!!"
          open={isModalOpen}
          onCancel={ToggleAddressModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default BoardWriteUi;
