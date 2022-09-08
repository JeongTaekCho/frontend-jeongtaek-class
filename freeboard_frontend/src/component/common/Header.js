import styled from "@emotion/styled";

const HeaderWrap = styled.div`
  width: 100%;
  height: 150px;
  background: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
  margin-bottom: 120px;
`;

const Header = () => {
  return (
    <>
      <HeaderWrap>임시 헤더</HeaderWrap>
    </>
  );
};

export default Header;
