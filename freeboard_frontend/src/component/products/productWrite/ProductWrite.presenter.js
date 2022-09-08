import * as S from "./ProductWrite.styled";

const ProductWriteUi = () => {
  return (
    <>
      <S.ProductWrapper>
        <S.Container>
          <S.ProductWriteTitle>상품 등록하기</S.ProductWriteTitle>
          <S.ProductWriteForm>
            <S.DefaultInputBox>
              <p>제목</p>
              <S.DefaultInput
                type="text"
                placeholder="제목을 작성해주세요."
                name="title"
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.DefaultInputBox>
              <p>한줄요약</p>
              <S.DefaultInput
                type="text"
                placeholder="한줄요약을 작성해주세요."
                name="summary"
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.TextareaBox>
              <p>내용</p>
              <textarea
                type="text"
                placeholder="내용을 작성해주세요."
                name="content"
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.TextareaBox>
            <S.DefaultInputBox>
              <p>판매가격</p>
              <S.DefaultInput
                type="text"
                placeholder="판매가격을 작성해주세요."
                name="price"
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>{" "}
            <S.DefaultInputBox>
              <p>태그입력</p>
              <S.DefaultInput
                type="text"
                placeholder="한줄요약을 작성해주세요."
                name="summary"
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
          </S.ProductWriteForm>
        </S.Container>
      </S.ProductWrapper>
    </>
  );
};

export default ProductWriteUi;
