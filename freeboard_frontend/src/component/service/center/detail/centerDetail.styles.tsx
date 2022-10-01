import styled from "@emotion/styled";

export const ServiceDetailWrapper = styled.div`
  width: 100%;
`;

export const ServiceDetailContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const ServiceDetailTitlt = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  text-align: center;
  padding: 50px 0 70px;
`;

export const ServiceDetailInfo = styled.div`
  width: 100%;
  border-top: 2px solid #111;
`;

export const DetailInfoUl = styled.ul`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
`;

export const DetailInfoLi = styled.li`
  width: 12.38%;
  padding: 13px 0px 13px 20px;
  background-color: rgb(247, 245, 248);
  font-size: 12px;
  font-weight: 500;
  color: #333;
`;

export const DetailInfoLi2 = styled(DetailInfoLi)`
  width: 87.5%;
  padding: 13px 0px 13px 20px;
  font-weight: 400;
  background-color: #fff;
`;

export const DetailContentBox = styled.div`
  width: 100%;
  padding: 30px 10px 100px;
  border-bottom: 1px solid rgb(128, 128, 128);
  font-size: 13px;
  font-weight: 400;
  color: #111;
`;
export const DetailBtnContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
  margin: 0 auto;
`;

export const GoListBtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 150px;
  height: 42px;
  border-radius: 0px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: none;
  cursor: pointer;
`;
