import * as S from "../../../../commons/commonStyle";
import { NextRouter, useRouter } from "next/router";
// import Logo from "./svg/Logo";
import SearchBtn from "../../svg/SearchBtn";
import Gps from "../../svg/Gps";
import Heart from "../../svg/Heart";
import Basket from "../../svg/Basket";
import Hamberger from "../../svg/Hamberger";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { successModal } from "../../modal/modal-function";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      # userPoint
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

// const LOGOUT_USER = gql`
//   mutation {
//     logoutUser
//   }
// `;

const Header = () => {
  // const [, setAccessToken] = useRecoilState(accessTokenData);

  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(userData?.fetchUserLoggedIn);

  // const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const router: NextRouter = useRouter();
  const goLogin = async () => {
    await router.push("/login");
  };
  const goRegister = async () => {
    await router.push("/register");
  };

  const goHome = async () => {
    await router.push("/");
  };

  const goCenter = async () => {
    await router.push("/service/center");
  };

  const logout = async () => {
    // setAccessToken("");
    // await logoutUser();
    router.reload();
    // await logoutUser();
    successModal("로그아웃 되었습니다.");
  };

  return (
    <>
      <S.HeaderWrap>
        <S.HeaderBox>
          <S.HeaderContainer>
            <S.LogoBox onClick={goHome}>
              <img src="/etc/mainLogo.png" />
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
            {userData?.fetchUserLoggedIn ? (
              <S.LogoutMenu>
                {userData?.fetchUserLoggedIn.name}
                <S.LoginMenuLi>|</S.LoginMenuLi>
                <S.LoginMenuLi onClick={goLogin}>마이페이지</S.LoginMenuLi>
                <S.LoginMenuLi>|</S.LoginMenuLi>
                <S.LoginMenuLi onClick={goCenter}>고객센터</S.LoginMenuLi>
                <S.LoginMenuLi>|</S.LoginMenuLi>
                <S.LoginMenuLi onClick={logout}>로그아웃</S.LoginMenuLi>
              </S.LogoutMenu>
            ) : (
              <S.LoginMenu>
                <S.LoginMenuLi onClick={goRegister}>회원가입</S.LoginMenuLi>
                <S.LoginMenuLi>|</S.LoginMenuLi>
                <S.LoginMenuLi onClick={goLogin}>로그인</S.LoginMenuLi>
                <S.LoginMenuLi>|</S.LoginMenuLi>
                <S.LoginMenuLi onClick={goCenter}>고객센터</S.LoginMenuLi>
              </S.LoginMenu>
            )}
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
              <S.CommonMessage
                onClick={async () => await router.push("/boards")}
              >
                <span>자유게시판</span>
              </S.CommonMessage>
              <S.CommonMessage
                onClick={async () =>
                  await router.push("/products/productWrite")
                }
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
