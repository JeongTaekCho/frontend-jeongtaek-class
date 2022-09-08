import * as S from "./commonStyle";
import Logo from "./svg/Logo";

const Footer = () => {
  return (
    <>
      <S.FooterWrap>
        <S.FooterContainer>
          <Logo />
          <S.FooterContent>
            <S.FooterText>
              본 홈페이지는 포트폴리오용으로 제작 되었으며 상업 목적은 1도
              없습니다
            </S.FooterText>
            <S.FooterText>
              궁금하신 점은 010-xxxx-3591로 문의해주시기 바랍니다.
            </S.FooterText>
          </S.FooterContent>
        </S.FooterContainer>
      </S.FooterWrap>
    </>
  );
};

export default Footer;
