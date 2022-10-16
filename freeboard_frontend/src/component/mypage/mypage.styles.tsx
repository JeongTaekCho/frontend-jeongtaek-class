import styled from "@emotion/styled";

export const MyPageWrapper = styled.div`
  width: 100%;
`;

export const MyInfoContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 50px 0;
  gap: 5px;
`;

export const MyInfoBox = styled.div`
  width: 100%;
  background-color: #f7f7f7;
`;

export const MyInfoLeft = styled.div`
  width: 35.42%;
  padding: 30px 30px 26px;
  background-color: #fff;
`;

export const MyProfile = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const MyImg = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid gray;
  border-radius: 50%;
`;

export const MyName = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #333;
`;
export const EventMent = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #333;
`;
export const MyInfoRight = styled.div`
  width: 64.19%;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

export const MyInfoContentBox = styled.div`
  width: 32.5%;
  background-color: #fff;
  padding: 25px;
`;

export const MyInfoContentTitle = styled.div``;

export const PointCharge = styled.button`
  width: 50%;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  border: none;
  background: none;
  cursor: pointer;
  background-color: #111;
  padding: 5px;
`;

export const MyInfoContentCon = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
  span {
    font-weight: 600;
  }
`;

export const ChargeBox = styled.form`
  display: flex;
  gap: 10px;
`;
export const PointSelect = styled.select`
  width: 100px;
  height: 35px;
  border: 1px solid gray;
`;

export const ContentBoxTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #111;
  margin-bottom: 25px;
`;

export const TodayWeather = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #333;
`;

export const BuiedProductBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
  .slick-slide {
  }
  .slick-next {
    top: 50%;
    right: -40px;
    &::before {
      color: #f95621;
    }
  }
  .slick-prev {
    top: 50%;
    left: -40px;
    &::before {
      color: #f95621;
    }
  }
`;

export const BuiedProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 25px 2%;
`;

export const BuiedTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: #333;
  margin-bottom: 50px;
`;
