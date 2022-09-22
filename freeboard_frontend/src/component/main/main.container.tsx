import axios from "axios";
import { useEffect, useState } from "react";
import MainHomeUi from "./main.presenter";

const MainHome = () => {
  const mainBannerUrl = [
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/3960691f-c0de-45f1-a73c-b33255cb9678.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/8d170579-3b20-46e0-8fab-f5cb3c1d86fe.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/8e55ed8b-fb13-448d-9f45-991bf99f9582.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/41d4ae20-2f60-48a0-8d31-2ae950a82ed9.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/ce068035-2ccc-45c4-8864-8f0afea34b0f.jpg",
  ];

  const [productData, setProductData] = useState();

  let productDataArr = [];

  useEffect(() => {
    const fetchCoupangData = async () => {
      const result = await axios.get(
        "http://dev-one.duckdns.org:3000/products"
      );
      setProductData(result.data);
    };
    void fetchCoupangData();
  }, []);

  const productFirstPage = productData?.slice(0, 48);
  const productBestItem = productData?.slice(77, 85);
  productDataArr[0] = productData?.slice(48, 96);
  productDataArr[1] = productData?.slice(96, 144);
  productDataArr[2] = productData?.slice(144, 192);
  productDataArr[3] = productData?.slice(192, 240);
  productDataArr[4] = productData?.slice(240, 288);
  productDataArr[5] = productData?.slice(288, 336);
  productDataArr[6] = productData?.slice(336, 384);
  productDataArr[7] = productData?.slice(384, 432);
  productDataArr[8] = productData?.slice(432, 480);

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
          backgroundColor: "#eee",
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
    <MainHomeUi
      mainBannerUrl={mainBannerUrl}
      settings={settings}
      productFirstPage={productFirstPage}
      productBestItem={productBestItem}
      productData={productData}
    />
  );
};

export default MainHome;
