import * as S from "./mainStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const mainBannerUrl = [
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/3960691f-c0de-45f1-a73c-b33255cb9678.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/8d170579-3b20-46e0-8fab-f5cb3c1d86fe.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/8e55ed8b-fb13-448d-9f45-991bf99f9582.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/41d4ae20-2f60-48a0-8d31-2ae950a82ed9.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/ce068035-2ccc-45c4-8864-8f0afea34b0f.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: (dots: any) => (
      <div
        style={{
          backgroundColor: "#f9562180",
          padding: "10px",
          bottom: "35px",
        }}
      >
        <ul style={{ margin: "0px" }}>
          {" "}
          {dots}
          <li></li>
        </ul>
      </div>
    ),
  };

  return (
    <>
      <Slider {...settings}>
        {mainBannerUrl.map((bannerUrl, index) => {
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
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
          </S.MainItemContainer>
        </S.MainSection>
        <S.MainAdBanner>
          <img src="/etc/mainBanner01.jpeg" alt="광고배너" />
        </S.MainAdBanner>
        <S.MainSection>
          <S.MainContentTitle>택배거래 마켓</S.MainContentTitle>
          <S.MainItemContainer>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
          </S.MainItemContainer>
        </S.MainSection>
        <S.MainSection>
          <S.MainContentTitle>오늘의 할인</S.MainContentTitle>
          <S.MainItemContainer>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
            <S.MainItemBox>
              <S.MainItemBg></S.MainItemBg>
              <S.ItemName>아이템 이름이 들어갑니다.</S.ItemName>
              <S.ItemPrice>95,000 원</S.ItemPrice>
            </S.MainItemBox>
          </S.MainItemContainer>
        </S.MainSection>
      </S.MainContainer>
    </>
  );
};

export default Home;
