import * as S from "./commonStyle";
import Router, { NextRouter, useRouter } from "next/router";
import Logo from "./svg/Logo";
import SearchBtn from "./svg/SearchBtn";
import Gps from "./svg/Gps";
import Heart from "./svg/Heart";
import Basket from "./svg/Basket";
import Hamberger from "./svg/Hamberger";
const Header = () => {
  const router: NextRouter = useRouter();
  return (
    <>
      <S.HeaderWrap>
        <S.HeaderBox>
          <S.HeaderContainer>
            <S.LogoBox>
              <Logo />
            </S.LogoBox>
            <S.SearchBox>
              <S.MainSearchInput
                type="text"
                placeholder="검색어를 입력해주세요."
              />
              <SearchBtn />
            </S.SearchBox>
            <S.IconBox>
              <Gps />
              <Heart />
              <Basket />
            </S.IconBox>
            <S.LoginMenu>
              <S.LoginMenuLi>회원가입</S.LoginMenuLi>
              <S.LoginMenuLi>|</S.LoginMenuLi>
              <S.LoginMenuLi>로그인</S.LoginMenuLi>
              <S.LoginMenuLi>|</S.LoginMenuLi>
              <S.LoginMenuLi>고객센터</S.LoginMenuLi>
            </S.LoginMenu>
          </S.HeaderContainer>
          <S.Navigation>
            <S.CategoryMenu>
              <Hamberger />
              <S.CategoryText>카테고리</S.CategoryText>
            </S.CategoryMenu>
            <S.CommonMenu>
              <S.CommonMenuLi>상품목록1</S.CommonMenuLi>
              <S.CommonMenuLi>상품목록2</S.CommonMenuLi>
              <S.CommonMenuLi>상품목록3</S.CommonMenuLi>
              <S.CommonMenuLi>상품목록4</S.CommonMenuLi>
            </S.CommonMenu>
            <S.CommonMessageBox>
              <S.CommonMessage onClick={() => router.push("/boards")}>
                <span>자유게시판</span>
              </S.CommonMessage>
              <S.CommonMessage
                onClick={() => router.push("/products/productWrite")}
              >
                <span>상품등록</span>
              </S.CommonMessage>
            </S.CommonMessageBox>
          </S.Navigation>
        </S.HeaderBox>
      </S.HeaderWrap>
    </>
  );
};

export default Header;
