import InputDefault from "../../common/inputs/inputDefault";
import * as S from "./ProductWrite.styled";
import { IProductWriteUi } from "./ProductWrite.types";

const ProductWriteUi = ({
  onSubmitProduct,
  register,
  handleSubmit,
}: IProductWriteUi) => {
  return (
    <>
      <S.ProductWrapper>
        <S.Container>
          <S.ProductWriteTitle>상품 등록하기</S.ProductWriteTitle>
          <S.ProductWriteForm onSubmit={handleSubmit(onSubmitProduct)}>
            <S.DefaultInputBox>
              <p>제목</p>
              <InputDefault
                type="text"
                placeholder="제목을 작성해주세요."
                register={register("name")}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.DefaultInputBox>
              <p>한줄요약</p>
              <InputDefault
                type="text"
                placeholder="한줄요약을 작성해주세요."
                register={register("remarks")}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.TextareaBox>
              <p>내용</p>
              <textarea
                placeholder="내용을 작성해주세요."
                {...register("contents")}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.TextareaBox>
            <S.DefaultInputBox>
              <p>판매가격</p>
              <InputDefault
                type="text"
                placeholder="판매가격을 작성해주세요."
                register={register("price")}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>{" "}
            <S.DefaultInputBox>
              <p>태그입력</p>
              <InputDefault
                type="text"
                placeholder="한줄요약을 작성해주세요."
                register={register("tags")}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.ProductSubmit type="submit">등록하기</S.ProductSubmit>
          </S.ProductWriteForm>
        </S.Container>
      </S.ProductWrapper>
    </>
  );
};

export default ProductWriteUi;
