import styled from "@emotion/styled";

export const MyPageWrapper = styled.div`
  width: 100%;
`;

export const MyPageContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const MyInfoContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const MyInfoLeft = styled.div`
  width: 35.42%;
  padding: 30px 30px 26px;
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
  flex-wrap: wrap;
`;

export const MyInfoContentBox = styled.div`
  width: 32.93%;
  padding: 26px 0 30px 30px;
`;

export const MyInfoContentTitle = styled.div``;

export const PointCharge = styled.button`
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
  width: 120px;
  height: 35px;
  border: 1px solid gray;
`;
