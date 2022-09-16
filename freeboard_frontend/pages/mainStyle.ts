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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const MainItemBox = styled.div`
  width: 23.5%;
  cursor: pointer;
  border: 1px solid #ccc;
`;

export const MainItemBg = styled.div`
  width: 100%;
  padding-bottom: 115%;
  background-color: #ddd;
  background: url("/board/ggamjang.png") no-repeat;
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
`;

export const MainAdBanner = styled.div`
  width: 100%;
  margin: 80px 0;
  img {
    width: 100%;
  }
`;
