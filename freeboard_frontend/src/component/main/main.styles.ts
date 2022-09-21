import styled from "@emotion/styled";

export const SlideBox = styled.div`
  width: 100%;
  font-size: 30px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  img {
    width: 100%;
  }
`;

export const MainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const MainSection = styled.div`
  width: 100%;
  margin: 80px 0;
`;

export const MainContentTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: #111;
  text-align: center;
  margin-bottom: 30px;
`;

export const MainItemContainer = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const MainItemBox = styled.div`
  width: 23.5%;
  cursor: pointer;
  border: 1px solid #e9e3e3;
`;

export const MainItemBg = styled.div`
  width: 100%;
  padding-bottom: 115%;
  background-color: #ddd;
  background-size: cover;
`;

export const ItemName = styled.h3`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  color: #111;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 15px 0;
`;

export const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  span {
    font-weight: 400;
  }
`;

export const ItemShippingInfo = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #666;
  margin-top: 6px;
`;

export const MainAdBanner = styled.div`
  width: 100%;
  margin: 80px 0;
  width: 70%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  img {
    width: 100%;
  }
`;

export const ItemInfoBox = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  border-top: 1px solid #eee;
  position: relative;
`;

export const ItemEventBox = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  top: -30px;
  left: 0;
`;

export const ItemEventSpan = styled.span`
  display: inline-block;
  height: 22px;
  padding: 2px 4px 1px;
  border: 1px solid transparent;
  font-size: 12px;
  line-height: 1.4;
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  color: #f43142;
  background: rgba(244, 49, 66, 0.04);
  border-color: rgba(244, 49, 66, 0.4);
`;
export const ItemEventSpan2 = styled(ItemEventSpan)`
  color: #00adf2;
  background: rgba(0, 173, 242, 0.04);
  border-color: rgba(0, 173, 242, 0.4);
`;
