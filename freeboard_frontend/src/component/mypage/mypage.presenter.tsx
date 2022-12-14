import * as S from "./mypage.styles";
import * as A from "../main/main.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { IMypageUiProps } from "./mypage.types";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
// 타입 다시 수정하기
const MyPageUi = ({
  register,
  handleSubmit,
  onClickPointCharge,
  userDatas,
  boughtProductData,
  pickedProductData,
  onChangeProfile,
  onClickProfileUpdate,
  isActive,
  onClickModalToggle,
  profileUrl,
}: IMypageUiProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const router = useRouter();

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <S.MyPageWrapper>
      <S.MyInfoBox>
        <S.MyInfoContainer>
          <S.MyInfoLeft>
            <S.MyProfile>
              <S.MyImg
                style={{
                  backgroundImage: `url(${userData?.fetchUserLoggedIn.picture})`,
                }}
              ></S.MyImg>
              <S.MyName>조정택님</S.MyName>
              <S.ProfileModalBtn onClick={onClickModalToggle}>
                <span>사진등록</span>
              </S.ProfileModalBtn>
            </S.MyProfile>
            <S.EventMent>최초 1회 무료배송</S.EventMent>
          </S.MyInfoLeft>
          <S.MyInfoRight>
            <S.MyInfoContentBox>
              <S.MyInfoContentTitle>
                <S.ChargeBox onSubmit={handleSubmit(onClickPointCharge)}>
                  <S.PointSelect {...register("point")}>
                    <option value="5000">5000원</option>
                    <option value="10000">10000원</option>
                    <option value="30000">30000원</option>
                    <option value="50000">50000원</option>
                    <option value="100000">100000원</option>
                    <option value="300000">300000원</option>
                    <option value="500000">500000원</option>
                  </S.PointSelect>
                  <S.PointCharge>포인트 충전</S.PointCharge>
                </S.ChargeBox>
              </S.MyInfoContentTitle>
              <S.MyInfoContentCon>
                <span>{userDatas?.fetchUserLoggedIn?.userPoint.amount} </span>
                Point
              </S.MyInfoContentCon>
            </S.MyInfoContentBox>
            <S.MyInfoContentBox>
              <S.ContentBoxTitle>회원등급</S.ContentBoxTitle>
              <S.TodayWeather>VIP</S.TodayWeather>
            </S.MyInfoContentBox>
            <S.MyInfoContentBox>
              <S.ContentBoxTitle>오늘의 날씨</S.ContentBoxTitle>
              <S.TodayWeather>매우맑음</S.TodayWeather>
            </S.MyInfoContentBox>
          </S.MyInfoRight>
        </S.MyInfoContainer>
      </S.MyInfoBox>
      <S.BuiedProductBox>
        <S.BuiedTitle>구매한 물품</S.BuiedTitle>
        {/* <S.BuiedProductContainer> */}
        <Slider {...settings}>
          {boughtProductData?.fetchUseditemsIBought?.map((boughtData) => (
            <A.MainItemBox key={boughtData._id} className="productC">
              <A.MainItemBg
                style={{
                  backgroundImage: `url(https://storage.googleapis.com/${boughtData.images[0]})`,
                }}
              ></A.MainItemBg>
              <A.ItemInfoBox>
                <A.ItemName>{boughtData.name}</A.ItemName>
                <A.ItemPrice>
                  <span>
                    {String(boughtData.price).replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                    원 ~
                  </span>
                </A.ItemPrice>
                <A.ItemEventBox></A.ItemEventBox>
              </A.ItemInfoBox>
            </A.MainItemBox>
          ))}
        </Slider>
        {/* </S.BuiedProductContainer> */}
      </S.BuiedProductBox>
      <S.BuiedProductBox>
        <S.BuiedTitle id="pickProduct">찜한 물품</S.BuiedTitle>
        {/* <S.BuiedProductContainer> */}
        <Slider {...settings}>
          {pickedProductData?.fetchUseditemsIPicked?.map((pickData) => (
            <A.MainItemBox
              className="productC"
              key={pickData._id}
              onClick={() => {
                void router.push(`/products/detail/${pickData._id}`);
              }}
            >
              <A.MainItemBg
                style={{
                  backgroundImage: `url(https://storage.googleapis.com/${pickData.images[0]})`,
                }}
              ></A.MainItemBg>
              <A.ItemInfoBox>
                <A.ItemName>{pickData.name}</A.ItemName>
                <A.ItemPrice>
                  <span>
                    {String(pickData.price).replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                    원 ~
                  </span>
                </A.ItemPrice>
                <A.ItemEventBox></A.ItemEventBox>
              </A.ItemInfoBox>
            </A.MainItemBox>
          ))}
        </Slider>
        {/* </S.BuiedProductContainer> */}
      </S.BuiedProductBox>
      {isActive && (
        <S.ProfileModal>
          <S.ProfilePhoto
            style={{
              backgroundImage: profileUrl
                ? `url(${profileUrl})`
                : `url(${userData?.fetchUserLoggedIn.picture})`,
            }}
          ></S.ProfilePhoto>
          <S.uploadBtn htmlFor="fileUpload">
            <span>업로드</span>
          </S.uploadBtn>
          <S.fileInput type="file" id="fileUpload" onChange={onChangeProfile} />
          <S.ProfileModalBtnBox>
            <S.ProfileModalBtns onClick={onClickProfileUpdate}>
              확인
            </S.ProfileModalBtns>
            <S.ProfileModalBtns onClick={onClickModalToggle}>
              취소
            </S.ProfileModalBtns>
          </S.ProfileModalBtnBox>
        </S.ProfileModal>
      )}
    </S.MyPageWrapper>
  );
};

export default MyPageUi;
