import * as S from "./centerWrite.style";

const CenterWriteUi = ({
  onChangeInput,
  onChangeTextarea,
  submitWrite,
}: any) => {
  return (
    <S.CenterListWrap>
      <S.CenterListContainer>
        <S.CenterListTitle>1:1 문의</S.CenterListTitle>
        <S.CenterWriteContent>
          <S.CenterWriteInputContainer>
            <S.CenterWriteInputTitle>
              작성자<span>*</span>
            </S.CenterWriteInputTitle>
            <S.CenterWriteInputBox>
              <S.CenterWriteDefaultInput
                type="text"
                placeholder="작성자를 입력해주세요."
                name="writer"
                onChange={onChangeInput}
              />
            </S.CenterWriteInputBox>
          </S.CenterWriteInputContainer>
          <S.CenterWriteInputContainer>
            <S.CenterWriteInputTitle>
              제목<span>*</span>
            </S.CenterWriteInputTitle>
            <S.CenterWriteInputBox>
              <S.CenterWriteDefaultInput
                type="text"
                placeholder="제목을 입력해주세요."
                name="title"
                onChange={onChangeInput}
              />
            </S.CenterWriteInputBox>
          </S.CenterWriteInputContainer>
          <S.CenterWriteInputContainer>
            <S.CenterWriteInputTitle>
              내용<span>*</span>
            </S.CenterWriteInputTitle>
            <S.CenterWriteInputBox>
              <S.CenterWriteTextAreaBox>
                <S.CenterWriteDefaultTextArea
                  placeholder="내용을 입력해주세요."
                  onChange={onChangeTextarea}
                />
                <S.CenterWriteFile type="file" id="centerFile" />
                <S.CenterFileBtn htmlFor="centerFile">+</S.CenterFileBtn>
              </S.CenterWriteTextAreaBox>
            </S.CenterWriteInputBox>
          </S.CenterWriteInputContainer>
        </S.CenterWriteContent>
        <S.CenterWriteSubmit onClick={submitWrite}>
          등록하기
        </S.CenterWriteSubmit>
      </S.CenterListContainer>
    </S.CenterListWrap>
  );
};

export default CenterWriteUi;
