import * as S from "./main.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMainHomeUi } from "./main.types";

const MainHomeUi = ({ mainBannerUrl, settings, productData }: IMainHomeUi) => {
  console.log(productData);
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
          <S.MainContentTitle>직거래 마켓</S.MainContentTitle>
          <S.MainItemContainer>
            {productData?.map((item: any) => {
              return (
                <S.MainItemBox key={item._id}>
                  <S.MainItemBg
                    style={{
                      background: `url(${item.img}) no-repeat center center`,
                    }}
                  ></S.MainItemBg>
                  <S.ItemInfoBox>
                    <S.ItemName>{item.title}</S.ItemName>
                    <S.ItemPrice>
                      {item.basePrice}
                      <span>원 ~</span>
                    </S.ItemPrice>
                    <S.ItemShippingInfo>무료배송</S.ItemShippingInfo>
                    <S.ItemEventBox>
                      <S.ItemEventSpan>신상세일</S.ItemEventSpan>
                      <S.ItemEventSpan2>테스트</S.ItemEventSpan2>
                    </S.ItemEventBox>
                  </S.ItemInfoBox>
                </S.MainItemBox>
              );
            })}
          </S.MainItemContainer>
        </S.MainSection>
      </S.MainContainer>
    </>
  );
};

export default MainHomeUi;
