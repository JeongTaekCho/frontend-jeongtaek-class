import * as S from "./ProductWrite.styled";

interface IProductWriteUi {
  onChangeProductInput: any;
  onSubmitProduct: any;
}

const ProductWriteUi = ({
  onChangeProductInput,
  onSubmitProduct,
}: IProductWriteUi) => {
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
                name="name"
                onChange={onChangeProductInput}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.DefaultInputBox>
              <p>한줄요약</p>
              <S.DefaultInput
                type="text"
                placeholder="한줄요약을 작성해주세요."
                name="remarks"
                onChange={onChangeProductInput}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.TextareaBox>
              <p>내용</p>
              <textarea
                placeholder="내용을 작성해주세요."
                name="contents"
                onChange={onChangeProductInput}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.TextareaBox>
            <S.DefaultInputBox>
              <p>판매가격</p>
              <S.DefaultInput
                type="text"
                placeholder="판매가격을 작성해주세요."
                name="price"
                onChange={onChangeProductInput}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>{" "}
            <S.DefaultInputBox>
              <p>태그입력</p>
              <S.DefaultInput
                type="text"
                placeholder="한줄요약을 작성해주세요."
                name="tags"
                onChange={onChangeProductInput}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.ProductSubmit onClick={onSubmitProduct}>
              등록하기
            </S.ProductSubmit>
          </S.ProductWriteForm>
        </S.Container>
      </S.ProductWrapper>
    </>
  );
};

export default ProductWriteUi;
