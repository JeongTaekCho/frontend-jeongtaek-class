import * as S from "./BoardWrite.styled";

interface IBoardWriteUi {
  onChangeinputState: any;
  onSubmitBoard: any;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  zipCodeError: string;
  addressError: string;
  youtubeLinkError: string;
  isEdit: boolean;
  onEditBoard: any;
  data: any;
  writeCancle: any;
  editCancle: any;
}

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
                    value={isEdit ? data?.fetchBoard.writer : null}
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
                defaultValue={isEdit ? data?.fetchBoard.title : null}
              />
              <S.ErrorMsg>{titleError}</S.ErrorMsg>
            </S.DefaultInputBox>
            <S.TextareaBox>
              <p>내용</p>
              <textarea
                placeholder="내용을 작성해주세요."
                onChange={onChangeinputState}
                name="content"
                defaultValue={isEdit ? data?.fetchBoard.contents : null}
              />
              <S.ErrorMsg>{contentError}</S.ErrorMsg>
            </S.TextareaBox>
            <S.AddressWriteBox>
              <p>주소</p>
              <S.AddressNumInputBox>
                <S.AddressNumInput
                  onChange={onChangeinputState}
                  placeholder="00000"
                  name="zipCode"
                  defaultValue={
                    isEdit ? data?.fetchBoard.boardAddress.zipcode : null
                  }
                />
                <button type="button">우편번호 검색</button>
                <S.ErrorMsg>{zipCodeError}</S.ErrorMsg>
              </S.AddressNumInputBox>
              <S.DefaultInput
                className="m1530"
                onChange={onChangeinputState}
                name="address"
                defaultValue={
                  isEdit ? data?.fetchBoard.boardAddress.address : null
                }
              />
              <S.DefaultInput
                onChange={onChangeinputState}
                name="address2"
                defaultValue={
                  isEdit ? data?.fetchBoard.boardAddress.addressDetail : null
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
                defaultValue={isEdit ? data?.fetchBoard.youtubeUrl : null}
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
    </>
  );
};

export default BoardWriteUi;