import { useEffect, useState } from "react";
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
}: IProductWriteUi) => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  console.log(typeof lat);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=67ff797434525aa2bbca4bf944af63c8";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const infowindow = new window.kakao.maps.InfoWindow({ zindex: 1 });

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });

        // const geocoder = new window.kakao.maps.services.Geocoder();
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

            // var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            // message += "경도는 " + latlng.getLng() + " 입니다";

            // var resultDiv = document.getElementById("clickLatlng");
            // resultDiv.innerHTML = message;
            setLat(latlng.getLat());
            setLng(latlng.getLng());

            // searchDetailAddrFromCoords(
            //   mouseEvent.latLng,
            //   function (result, status) {
            //     if (status === window.kakao.maps.services.Status.OK) {
            //       let detailAddr = !!result[0].road_address
            //         ? "<div>도로명주소 : " +
            //           result[0].road_address.address_name +
            //           "</div>"
            //         : "";
            //       detailAddr +=
            //         "<div>지번 주소 : " +
            //         result[0].address.address_name +
            //         "</div>";

            //       var content =
            //         '<div class="bAddr">' +
            //         '<span class="title">법정동 주소정보</span>' +
            //         detailAddr +
            //         "</div>";

            //       // 마커를 클릭한 위치에 표시합니다
            //       marker.setPosition(mouseEvent.latLng);
            //       marker.setMap(map);

            //       // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
            //       infowindow.setContent(content);
            //       infowindow.open(map, marker);
            //     }
            //   }
            // );
          }
        );

        // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
        window.kakao.maps.event.addListener(map, "idle", function () {
          searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        });

        function searchAddrFromCoords(coords, callback) {
          // 좌표로 행정동 주소 정보를 요청합니다
          geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
        }

        function searchDetailAddrFromCoords(coords, callback) {
          // 좌표로 법정동 상세 주소 정보를 요청합니다
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        function displayCenterInfo(result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            var infoDiv = document.getElementById("centerAddr");

            for (var i = 0; i < result.length; i++) {
              // 행정동의 region_type 값은 'H' 이므로
              if (result[i].region_type === "H") {
                infoDiv.innerHTML = result[i].address_name;
                break;
              }
            }
          }
        }
      });
    };
  }, []);
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
                <S.MapContainer id="map"></S.MapContainer>
              </S.MapApiBox>
              <S.AddressInfoBox>
                <S.Ptitle>GPS</S.Ptitle>
                <S.GpsInfoBox>
                  <S.GpsInput
                    type="text"
                    placeholder="위도(LAT)"
                    value={lat}
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
                    value={lng}
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
            <S.ProductSubmit type="submit">등록하기</S.ProductSubmit>
          </S.ProductWriteForm>
        </S.Container>
      </S.ProductWrapper>
    </>
  );
};

export default ProductWriteUi;
