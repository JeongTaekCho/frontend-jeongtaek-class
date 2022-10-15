import * as S from "./mypage.styles";

const MyPageUi = ({
  register,
  handleSubmit,
  onClickPointCharge,
  userDatas,
}) => {
  return (
    <S.MyPageWrapper>
      <S.MyInfoBox>
        <S.MyInfoContainer>
          <S.MyInfoLeft>
            <S.MyProfile>
              <S.MyImg></S.MyImg>
              <S.MyName>조정택님</S.MyName>
            </S.MyProfile>
            <S.EventMent>최초 1회 무료배송</S.EventMent>
          </S.MyInfoLeft>
          <S.MyInfoRight>
            <S.MyInfoContentBox>
              <S.MyInfoContentTitle>
                <S.ChargeBox onSubmit={handleSubmit(onClickPointCharge)}>
                  <S.PointSelect {...register("point")}>
                    <option value="5000">5000원</option>
                    <option value="10000">10000원</option>
                    <option value="30000">30000원</option>
                    <option value="50000">50000원</option>
                    <option value="100000">100000원</option>
                    <option value="300000">300000원</option>
                    <option value="500000">500000원</option>
                  </S.PointSelect>
                  <S.PointCharge>포인트 충전</S.PointCharge>
                </S.ChargeBox>
              </S.MyInfoContentTitle>
              <S.MyInfoContentCon>
                <span>{userDatas?.fetchUserLoggedIn?.userPoint.amount} </span>
                Point
              </S.MyInfoContentCon>
            </S.MyInfoContentBox>
            <S.MyInfoContentBox>
              <S.ContentBoxTitle>회원등급</S.ContentBoxTitle>
              <S.TodayWeather>VIP</S.TodayWeather>
            </S.MyInfoContentBox>
            <S.MyInfoContentBox>
              <S.ContentBoxTitle>오늘의 날씨</S.ContentBoxTitle>
              <S.TodayWeather>매우맑음</S.TodayWeather>
            </S.MyInfoContentBox>
          </S.MyInfoRight>
        </S.MyInfoContainer>
      </S.MyInfoBox>
    </S.MyPageWrapper>
  );
};

export default MyPageUi;
