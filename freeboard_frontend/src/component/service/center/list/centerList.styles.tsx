import styled from "@emotion/styled";

export const CenterListWrap = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 50px 0 80px;
`;
export const CenterListContainer = styled.div`
  width: 820px;
  margin: 0 auto;
`;

export const CenterListTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #333;
  margin: 10px 0 37px;
`;

export const CenterListContent = styled.div`
  width: 100%;
`;
export const CenterListHead = styled.ul`
  width: 100%;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  color: #4c4c4c;
  padding: 20px 0;
  display: flex;
  border-top: 2px solid #333;
  border-bottom: 1px solid #333;
`;
export const CenterListLi = styled.li`
  width: 70%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const CenterListLeft = styled(CenterListLi)`
  text-align: left;
  padding: 0 20px;
`;

export const CenterListLi2 = styled.li`
  width: 15%;
`;

export const CenterListBody = styled.ul`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #888;
  padding: 20px 0;
  display: flex;
  border-top: 2px solid #333;
  border-bottom: 1px solid #333;
`;

export const CenterListBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const CenterWriteBtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 120px;
  height: 42px;
  border-radius: 0px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: 0px none;
  cursor: pointer;
`;
