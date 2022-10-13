import { useEffect } from "react";
import InputDefault from "../../common/inputs/inputDefault";
import * as S from "./ProductWrite.styled";
import { IProductWriteUi } from "./ProductWrite.types";

declare const window: typeof globalThis & {
  kakao: any;
};

const ProductWriteUi = ({
  onSubmitProduct,
  register,
  handleSubmit,
  onChangeFile,
  fileUrl,
  ReactQuill,
  onChangeQuill,
  productData,
  isEdit,
  onSubmitUpdate,
  setValue,
}: IProductWriteUi) => {
  console.log(productData);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=67ff797434525aa2bbca4bf944af63c8";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            productData?.fetchUseditem?.useditemAddress.lat || 37.5445755,
            productData?.fetchUseditem?.useditemAddress.lng || 127.0559695
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });

        const geocoder = new window.kakao.maps.services.Geocoder();
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

            setValue("useditemAddress.lat", latlng.getLat());
            setValue("useditemAddress.lng", latlng.getLng());
          }
        );
      });
    };
  }, []);
  return (
    <>
      {}
      <S.ProductWrapper>
        <S.Container>
          <S.ProductWriteTitle>
            {isEdit ? "상품 수정하기" : "상품 등록하기"}
          </S.ProductWriteTitle>
          <S.ProductWriteForm
            onSubmit={
              isEdit
                ? handleSubmit(onSubmitUpdate)
                : handleSubmit(onSubmitProduct)
            }
          >
            <S.DefaultInputBox>
              <p>제목</p>
              <InputDefault
                type="text"
                placeholder="제목을 작성해주세요."
                register={register("name")}
                defaultValue={productData && productData.fetchUseditem.name}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.DefaultInputBox>
              <p>상품 한줄요약</p>
              <InputDefault
                type="text"
                placeholder="한줄요약을 작성해주세요."
                register={register("remarks")}
                defaultValue={productData && productData.fetchUseditem.remarks}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.TextareaBox>
              <p>내용</p>
              <ReactQuill
                placeholder="내용을 작성해주세요."
                onChange={onChangeQuill}
                style={{ height: "400px", marginBottom: "30px" }}
                value={productData && productData?.fetchUseditem?.contents}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.TextareaBox>
            <S.DefaultInputBox>
              <p>판매가격</p>
              <InputDefault
                type="text"
                placeholder="판매가격을 작성해주세요."
                register={register("price")}
                defaultValue={productData && productData.fetchUseditem.price}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>{" "}
            <S.DefaultInputBox>
              <p>태그입력</p>
              <InputDefault
                type="text"
                placeholder="태그를 작성해주세요."
                register={register("tags")}
                defaultValue={productData && productData.fetchUseditem.tags}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.ProductAddressBox>
              <S.MapApiBox>
                <S.Ptitle>거래위치</S.Ptitle>
                <S.MapContainer id="map"></S.MapContainer>
              </S.MapApiBox>
              <S.AddressInfoBox>
                <S.Ptitle>GPS</S.Ptitle>
                <S.GpsInfoBox>
                  <S.GpsInput
                    type="text"
                    placeholder="위도(LAT)"
                    value={
                      productData &&
                      productData?.fetchUseditem?.useditemAddress.lat
                    }
                    {...register("useditemAddress.lat")}
                  />
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
                  <S.GpsInput
                    type="text"
                    placeholder="경도(LNG)"
                    value={
                      productData &&
                      productData?.fetchUseditem?.useditemAddress.lng
                    }
                    {...register("useditemAddress.lng")}
                  />
                </S.GpsInfoBox>
                <S.ProductAddressContainer>
                  <S.Ptitle>주소</S.Ptitle>
                  <InputDefault
                    type="text"
                    register={register("useditemAddress.address")}
                    style={{ marginBottom: "15px" }}
                    id="infoDiv"
                    defaultValue={
                      productData &&
                      productData?.fetchUseditem?.useditemAddress.address
                    }
                  />
                  <InputDefault
                    type="text"
                    register={register("useditemAddress.addressDetail")}
                    defaultValue={
                      productData &&
                      productData?.fetchUseditem?.useditemAddress.addressDetail
                    }
                  />
                </S.ProductAddressContainer>
              </S.AddressInfoBox>
            </S.ProductAddressBox>
            <S.PorductImgBox>
              {new Array(3).fill(1).map((_, index) => {
                return fileUrl[index] ? (
                  <div key={index}>
                    <S.ProductImgBack
                      htmlFor={`file${index + 1}`}
                      style={{
                        backgroundImage: `url(https://storage.googleapis.com/${fileUrl[index]})`,
                      }}
                    ></S.ProductImgBack>
                    <S.ProductFile
                      id={`file${index + 1}`}
                      type="file"
                      title={String(index)}
                      onChange={onChangeFile(index)}
                    />
                  </div>
                ) : (
                  <div key={index}>
                    <S.ProductImgBack htmlFor={`file${index + 1}`}>
                      +
                    </S.ProductImgBack>
                    <S.ProductFile
                      id={`file${index + 1}`}
                      type="file"
                      title={String(index)}
                      onChange={onChangeFile(index)}
                    />
                  </div>
                );
              })}
            </S.PorductImgBox>
            <S.ProductSubmit type="submit">
              {isEdit ? "수정하기" : "등록하기"}
            </S.ProductSubmit>
          </S.ProductWriteForm>
        </S.Container>
      </S.ProductWrapper>
    </>
  );
};

export default ProductWriteUi;
