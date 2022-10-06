import InputDefault from "../../common/inputs/inputDefault";
import * as S from "./ProductWrite.styled";
import { IProductWriteUi } from "./ProductWrite.types";

const ProductWriteUi = ({
  onSubmitProduct,
  register,
  handleSubmit,
  onChangeFile,
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
              <p>상품 한줄요약</p>
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
                placeholder="태그를 작성해주세요."
                register={register("tags")}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.ProductAddressBox>
              <S.MapApiBox>
                <S.Ptitle>거래위치</S.Ptitle>
                <S.MapContainer></S.MapContainer>
              </S.MapApiBox>
              <S.AddressInfoBox>
                <S.Ptitle>GPS</S.Ptitle>
                <S.GpsInfoBox>
                  <S.GpsInput type="text" placeholder="위도(LAT)" />
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM2 7C2 4.24 4.24 2 7 2C9.76 2 12 4.24 12 7C12 9.88 9.12 14.19 7 16.88C4.92 14.21 2 9.85 2 7Z"
                      fill="#FFD600"
                    />
                  </svg>
                  <S.GpsInput type="text" placeholder="경도(LNG)" />
                </S.GpsInfoBox>
                <S.ProductAddressContainer>
                  <S.Ptitle>주소</S.Ptitle>
                  <InputDefault
                    type="text"
                    register={register("useditemAddress.address")}
                    style={{ marginBottom: "15px" }}
                  />
                  <InputDefault
                    type="text"
                    register={register("useditemAddress.addressDetail")}
                  />
                </S.ProductAddressContainer>
              </S.AddressInfoBox>
            </S.ProductAddressBox>
            <S.PorductImgBox>
              {new Array(3).fill(1).map((_, index) => {
                return (
                  <div key={index}>
                    <S.ProductImgBack htmlFor={`file${index + 1}`}>
                      +
                    </S.ProductImgBack>
                    <S.ProductFile
                      id={`file${index + 1}`}
                      type="file"
                      title={index}
                      onChange={onChangeFile(index)}
                    />
                  </div>
                );
              })}
            </S.PorductImgBox>
            <S.ProductSubmit type="submit">등록하기</S.ProductSubmit>
          </S.ProductWriteForm>
        </S.Container>
      </S.ProductWrapper>
    </>
  );
};

export default ProductWriteUi;
