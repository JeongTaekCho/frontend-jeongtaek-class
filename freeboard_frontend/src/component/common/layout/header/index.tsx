import * as S from "../../../../commons/commonStyle";
import { NextRouter, useRouter } from "next/router";
// import Logo from "./svg/Logo";
import SearchBtn from "../../svg/SearchBtn";
import Gps from "../../svg/Gps";
import Heart from "../../svg/Heart";
import Basket from "../../svg/Basket";
import Hamberger from "../../svg/Hamberger";
import { gql, useMutation, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { successModal } from "../../modal/modal-function";
import { accessTokenData, googleUserData, userInfo } from "../../../../store";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { FETCH_PRODUCT } from "../../../products/productDetail/ProductDetail.querys";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

const PICK_COUNT = gql`
  query {
    fetchUseditemsCountIPicked
  }
`;

const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`;

const Header = () => {
  const [accesstoken] = useRecoilState(accessTokenData);
  const [googleUser] = useRecoilState(googleUserData);
  const [, setUserDatas] = useRecoilState(userInfo);

  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  useEffect(() => {
    setUserDatas(userData);
  }, [userData]);

  const { data: pickCount } = useQuery(PICK_COUNT);

  const [logoutUser] = useMutation(LOGOUT_USER);

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

  const goProduct = async () => {
    await router.push("/products");
  };

  const goMyPage = () => {
    void router.push("/mypage");
  };

  const goPickProduct = () => {
    void router.push("/mypage/#pickProduct");
  };

  const logout = async () => {
    await logoutUser();
    router.reload();
    successModal("???????????? ???????????????.");
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
                placeholder="???????????? ??????????????????."
              />
              <SearchBtn />
            </S.SearchBox>
            <S.IconBox>
              <Gps />
              <S.HeartContainer onClick={goPickProduct}>
                <Heart stroke="#333" fill="#fff" />
                <S.PickNum>{pickCount?.fetchUseditemsCountIPicked}</S.PickNum>
              </S.HeartContainer>
              {/* <Basket /> */}
            </S.IconBox>
            {accesstoken || googleUser ? (
              <S.LogoutMenu>
                {userData?.fetchUserLoggedIn.name || googleUser.displayName}
                {/* {accesstoken.data.fetchUserLoggedIn.userName} */}
                <S.LoginMenuLi>|</S.LoginMenuLi>
                <S.LoginMenuLi onClick={goMyPage}>???????????????</S.LoginMenuLi>
                <S.LoginMenuLi>|</S.LoginMenuLi>
                <S.LoginMenuLi onClick={goCenter}>????????????</S.LoginMenuLi>
                <S.LoginMenuLi>|</S.LoginMenuLi>
                <S.LoginMenuLi onClick={logout}>????????????</S.LoginMenuLi>
              </S.LogoutMenu>
            ) : (
              <S.LoginMenu>
                <S.LoginMenuLi onClick={goRegister}>????????????</S.LoginMenuLi>
                <S.LoginMenuLi>|</S.LoginMenuLi>
                <S.LoginMenuLi onClick={goLogin}>?????????</S.LoginMenuLi>
                <S.LoginMenuLi>|</S.LoginMenuLi>
                {/* <S.LoginMenuLi onClick={logout}>????????????(?????????)</S.LoginMenuLi>
                <S.LoginMenuLi>|</S.LoginMenuLi> */}
                <S.LoginMenuLi onClick={goCenter}>????????????</S.LoginMenuLi>
              </S.LoginMenu>
            )}
          </S.HeaderContainer>
          <S.Navigation>
            <S.CategoryMenu>
              <Hamberger />
              <S.CategoryText>????????????</S.CategoryText>
            </S.CategoryMenu>
            <S.CommonMenu>
              <S.CommonMenuLi onClick={goProduct}>????????????1</S.CommonMenuLi>
              <S.CommonMenuLi>????????????2</S.CommonMenuLi>
              <S.CommonMenuLi>????????????3</S.CommonMenuLi>
              <S.CommonMenuLi>????????????4</S.CommonMenuLi>
            </S.CommonMenu>
            <S.CommonMessageBox>
              <S.CommonMessage
                onClick={async () => await router.push("/boards")}
              >
                <span>???????????????</span>
              </S.CommonMessage>
              <S.CommonMessage
                onClick={async () =>
                  await router.push("/products/productWrite")
                }
              >
                <span>????????????</span>
              </S.CommonMessage>
            </S.CommonMessageBox>
          </S.Navigation>
        </S.HeaderBox>
      </S.HeaderWrap>
    </>
  );
};

export default Header;
