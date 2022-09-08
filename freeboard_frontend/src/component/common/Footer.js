import styled from "@emotion/styled";

const FooterWrap = styled.div`
  width: 100%;
  height: 200px;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
  margin-top: 120px;
`;

const Footer = () => {
  return (
    <>
      <FooterWrap>임시 푸터</FooterWrap>
    </>
  );
};

export default Footer;
