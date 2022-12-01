import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import InputDefault from "../../common/inputs/inputDefault";
import * as S from "./ProductWrite.styled";
import { IProductWriteUi } from "./ProductWrite.types";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
// 결론 : 정택님이 다이나믹임포트를 잘못했던거였다 리액트퀼이 불러와지기를 기다렸다가 렌더해주지 않았다 미워

declare const window: typeof globalThis & {
  kakao: any;
};

// 카카오맵 수정
// 타입 수정

const ProductWriteUi = ({
  onSubmitProduct,
  register,
  handleSubmit,
  onChangeFile,
  fileUrl,
  onChangeQuill,
  productData,
  isEdit,
  onSubmitUpdate,
  setValue,
  isModalActive,
  onClickAddressOpen,
  onClickAddressComprete,
  addressInfo,
  imgUrls,
  imgData,
}: IProductWriteUi) => {
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

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          addressInfo || productData?.fetchUseditem?.useditemAddress.address,
          function (result, status) {
            setValue("useditemAddress.lat", result[0].y);
            setValue("useditemAddress.lng", result[0].x);
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              // const infowindow = new window.kakao.maps.InfoWindow({
              //   content:
              //     '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
              // });
              // infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  });
  return (
    <>
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
              <S.DefaultInput
                type="text"
                placeholder="제목을 작성해주세요."
                {...register("name")}
                defaultValue={
                  productData?.fetchUseditem.name
                    ? String(productData?.fetchUseditem.name)
                    : ""
                }
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.DefaultInputBox>
              <p>상품 한줄요약</p>
              <S.DefaultInput
                type="text"
                placeholder="한줄요약을 작성해주세요."
                {...register("remarks")}
                defaultValue={productData?.fetchUseditem.remarks}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.TextareaBox>
              <p>내용</p>
              <ReactQuill
                placeholder="내용을 작성해주세요."
                onChange={onChangeQuill}
                style={{ height: "400px", marginBottom: "30px" }}
                defaultValue={productData?.fetchUseditem?.contents}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.TextareaBox>
            <S.DefaultInputBox>
              <p>판매가격</p>
              <InputDefault
                type="text"
                placeholder="판매가격을 작성해주세요."
                register={register("price")}
                defaultValue={productData?.fetchUseditem.price}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>{" "}
            <S.DefaultInputBox>
              <p>태그입력</p>
              <InputDefault
                type="text"
                placeholder="태그를 작성해주세요."
                register={register("tags")}
                defaultValue={productData?.fetchUseditem.tags}
              />
              <S.ErrorMsg></S.ErrorMsg>
            </S.DefaultInputBox>
            <S.ProductAddressBox>
              <S.MapApiBox>
                <S.Ptitle>거래위치</S.Ptitle>
                {process.browser && <S.MapContainer id="map"></S.MapContainer>}
              </S.MapApiBox>
              <S.AddressInfoBox>
                {/* <S.Ptitle>GPS</S.Ptitle>
                <S.GpsInfoBox>
                  <S.GpsInput
                    type="text"
                    placeholder="위도(LAT)"
                    value={mapLat}
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
                    value={mapLng}
                  />
                </S.GpsInfoBox> */}
                <S.ProductAddressContainer>
                  <S.ProductAddressFindBox>
                    <S.Ptitle>주소</S.Ptitle>
                    <S.ProductAddressFindBtn
                      type="button"
                      onClick={onClickAddressOpen}
                    >
                      주소찾기
                    </S.ProductAddressFindBtn>
                  </S.ProductAddressFindBox>

                  <InputDefault
                    type="text"
                    style={{ marginBottom: "15px" }}
                    id="infoDiv"
                    defaultValue={
                      productData?.fetchUseditem?.useditemAddress.address
                    }
                    value={
                      addressInfo ||
                      productData?.fetchUseditem?.useditemAddress.address
                    }
                  />
                  <InputDefault
                    type="text"
                    register={register("useditemAddress.addressDetail")}
                    defaultValue={
                      productData?.fetchUseditem?.useditemAddress.addressDetail
                    }
                    placeholder="상세주소를 입력해주세요."
                  />
                </S.ProductAddressContainer>
              </S.AddressInfoBox>
            </S.ProductAddressBox>
            <S.PorductImgBox>
              {new Array(3).fill(1).map((_, index) => {
                return imgUrls[index] ||
                  productData?.fetchUseditem.images[index] ? (
                  <div key={index}>
                    {console.log(productData)}
                    <S.ProductImgBack
                      htmlFor={`file${index + 1}`}
                      style={{
                        backgroundImage: imgUrls[index]
                          ? `url(${imgUrls[index]} )`
                          : `url(https://storage.googleapis.com/${imgData[index]})`,
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
      {/* {isModalActive && ( */}
      <Modal
        title="대한민국의 모든 주소를 찾아주는 신기한 도구!!"
        open={isModalActive}
        onCancel={onClickAddressOpen}
      >
        <DaumPostcodeEmbed onComplete={onClickAddressComprete} />
      </Modal>
      {/* )} */}
    </>
  );
};

export default ProductWriteUi;
