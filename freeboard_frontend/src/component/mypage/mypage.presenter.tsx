import * as S from "./mypage.styles";

const MyPageUi = () => {
  return (
    <S.MyPageWrapper>
      <S.MyPageContainer>
        <S.MyInfoContainer>
          <S.MyInfoLeft>
            <S.MyProfile>
              <S.MyImg></S.MyImg>
              <S.MyName>조정택님</S.MyName>
            </S.MyProfile>
            <S.EventMent>최초 1회 무료배송</S.EventMent>
          </S.MyInfoLeft>
        </S.MyInfoContainer>
      </S.MyPageContainer>
    </S.MyPageWrapper>
  );
};

export default MyPageUi;
