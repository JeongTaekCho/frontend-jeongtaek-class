import styled from "@emotion/styled";

export const ProductDetailWrapper = styled.div`
  width: 100%;
`;

export const ProductContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const ProductInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const ProductImgBox = styled.div`
  width: 41%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;
export const ProductImg = styled.div`
  width: 100%;
  height: 552px;
  background-size: cover;
  background-position: center;
`;

export const ProductRightBox = styled.div`
  width: 53.3%;
  position: relative;
`;

export const ProductSmTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #999;
  margin-bottom: 12px;
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #333;
  margin-bottom: 12px;
`;

export const ProductSubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #b5b5b5;
  margin-bottom: 20px;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 12px;
  span {
    font-size: 28px;
  }
`;

export const EventMsg = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #f95621;
  margin-bottom: 15px;
`;

export const ProductInfoContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const ProductInfoUl = styled.div`
  width: 100%;
  display: flex;
  padding: 17px 0;
  border-top: 1px solid rgb(244, 244, 244);
  &:last-child {
    border-bottom: 1px solid rgb(244, 244, 244);
  }
`;

export const ProductInfoLeft = styled.div`
  width: 22.85%;
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;

export const ProductInfoRight = styled.div`
  width: 76.7%;
`;

export const ProductInfoRightText1 = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #333;
`;

export const ProductInfoRightText2 = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #666;
  line-height: 1.4;
`;

export const ProductCountBox = styled.div`
  width: 90px;
  height: 28px;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
`;
export const ProductCountBtn = styled.button`
  width: 33.3%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
`;
export const ProductCount = styled.div`
  width: 33.3%;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductPriceInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ProductPriceContainer = styled.div``;
export const ProductPriceDiv = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const ProductPriceText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #333;
  span {
    font-size: 32px;
    font-weight: 600;
    color: #333;
  }
`;

export const ProductBasketBtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin-top: 15px;
`;
export const ProductBuyBtn = styled.button`
  width: 60%;
  height: 56px;
  background-color: #f95621;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
`;
export const ProductBasketBtn = styled.button`
  width: 60%;
  height: 56px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;
  color: #f95621;
  border: 1px solid #f95621;
  cursor: pointer;
`;

export const ProductAddressBox = styled.div`
  width: 100%;
`;

export const ProductMapContainer = styled.div`
  width: 100%;
  height: 492px;
`;

export const EditBtn = styled.button`
  width: 150px;
  height: 35px;
  border: none;
  background-color: #111;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
`;

export const EditDelBox = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 0;
  right: 0;
`;

// 코멘트
