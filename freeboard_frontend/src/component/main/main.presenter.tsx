import * as S from "./main.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMainHomeUi } from "./main.types";
import Link from "next/link";
// import InfiniteScroll from "react-infinite-scroller";

const MainHomeUi = ({
  mainBannerUrl,
  settings,
  productData,
  todayProductList,
}: IMainHomeUi) => {
  return (
    <>
      <Slider {...settings}>
        {mainBannerUrl.map((bannerUrl: string, index: number) => {
          return (
            <S.SlideBox key={index}>
              <img src={bannerUrl} />
            </S.SlideBox>
          );
        })}
      </Slider>
      <S.MainContainer>
        <S.MainSection>
          {todayProductList.length !== 0 ? (
            <>
              <S.MainContentTitle>최근 본 상품</S.MainContentTitle>
              <S.MainItemContainer>
                {todayProductList.reverse()?.map((todayItem) => {
                  return (
                    <Link
                      href={`/products/detail/${todayItem.fetchUseditem._id}`}
                      key={todayItem._id}
                    >
                      <S.MainItemBox>
                        <S.MainItemBg
                          style={{
                            background: `url(https://storage.googleapis.com/${todayItem.fetchUseditem.images[0]}) no-repeat center center`,
                            backgroundSize: "cover",
                          }}
                        ></S.MainItemBg>
                        <S.ItemInfoBox>
                          <S.ItemName>
                            {todayItem.fetchUseditem.name}
                          </S.ItemName>
                          <S.ItemPrice>
                            {String(todayItem.fetchUseditem.price).replace(
                              /\B(?=(\d{3})+(?!\d))/g,
                              ","
                            )}
                            <span>원 ~</span>
                          </S.ItemPrice>
                          <S.ItemShippingInfo>무료배송</S.ItemShippingInfo>
                          <S.ItemEventBox>
                            <S.ItemEventSpan>신상세일</S.ItemEventSpan>
                            <S.ItemEventSpan2>테스트</S.ItemEventSpan2>
                          </S.ItemEventBox>
                        </S.ItemInfoBox>
                      </S.MainItemBox>
                    </Link>
                  );
                })}
              </S.MainItemContainer>
            </>
          ) : null}

          <S.MainContentTitle>가장 많이팔린 상품</S.MainContentTitle>
          <S.MainItemContainer>
            {/* {productData?.map((item: any) => {
              return (
                <Link
                  href={`/products/coupangDetail/${item._id}`}
                  key={item._id}
                >
                  <S.MainItemBox>
                    <S.MainItemBg
                      style={{
                        background: `url(${item.img}) no-repeat center center`,
                      }}
                    ></S.MainItemBg>
                    <S.ItemInfoBox>
                      <S.ItemName>{item.title}</S.ItemName>
                      <S.ItemPrice>
                        {item.salePrice}
                        <span>원 ~</span>
                      </S.ItemPrice>
                      <S.ItemShippingInfo>무료배송</S.ItemShippingInfo>
                      <S.ItemEventBox>
                        <S.ItemEventSpan>신상세일</S.ItemEventSpan>
                        <S.ItemEventSpan2>테스트</S.ItemEventSpan2>
                      </S.ItemEventBox>
                    </S.ItemInfoBox>
                  </S.MainItemBox>
                </Link>
              );
            })} */}
          </S.MainItemContainer>
        </S.MainSection>
      </S.MainContainer>
    </>
  );
};

export default MainHomeUi;
