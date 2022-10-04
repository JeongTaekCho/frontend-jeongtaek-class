import * as S from "./ProductDetail.styled";

const ProductDetailUi = ({ itemCount, onClickCount }) => {
  return (
    <>
      <S.ProductDetailWrapper>
        <S.ProductContainer>
          <S.ProductInfoBox>
            <S.ProductImgBox>
              <S.ProductImg></S.ProductImg>
            </S.ProductImgBox>
            <S.ProductRightBox>
              <S.ProductSmTitle>샛별배송</S.ProductSmTitle>
              <S.ProductTitle>상품이름이 들어갑니다.</S.ProductTitle>
              <S.ProductSubTitle>고소한 가득한 과자</S.ProductSubTitle>
              <S.ProductPrice>
                <span>3,880</span>원
              </S.ProductPrice>
              <S.EventMsg>로그인 후,적립 혜택이 제공됩니다.</S.EventMsg>
              <S.ProductInfoContainer>
                <S.ProductInfoUl>
                  <S.ProductInfoLeft>배송</S.ProductInfoLeft>
                  <S.ProductInfoRight>
                    <S.ProductInfoRightText1>샛별배송</S.ProductInfoRightText1>
                    <S.ProductInfoRightText2>
                      23시 전 주문시 내일 아침 7시 전 도착
                      <br /> (대구, 부산, 울산 샛별배송 운영시간 별도 확인)
                    </S.ProductInfoRightText2>
                  </S.ProductInfoRight>
                </S.ProductInfoUl>
                <S.ProductInfoUl>
                  <S.ProductInfoLeft>판매자</S.ProductInfoLeft>
                  <S.ProductInfoRight>
                    <S.ProductInfoRightText1>컬리</S.ProductInfoRightText1>
                  </S.ProductInfoRight>
                </S.ProductInfoUl>
                <S.ProductInfoUl>
                  <S.ProductInfoLeft>포장타입</S.ProductInfoLeft>
                  <S.ProductInfoRight>
                    <S.ProductInfoRightText1>
                      상온(종이포장)
                    </S.ProductInfoRightText1>
                    <S.ProductInfoRightText2>
                      택배배송은 에코 포장이 스티로폼으로 대체합니다.
                    </S.ProductInfoRightText2>
                  </S.ProductInfoRight>
                </S.ProductInfoUl>
                <S.ProductInfoUl>
                  <S.ProductInfoLeft>판매단위</S.ProductInfoLeft>
                  <S.ProductInfoRight>
                    <S.ProductInfoRightText1>1팩</S.ProductInfoRightText1>
                  </S.ProductInfoRight>
                </S.ProductInfoUl>
                <S.ProductInfoUl>
                  <S.ProductInfoLeft>중량/용량</S.ProductInfoLeft>
                  <S.ProductInfoRight>
                    <S.ProductInfoRightText1>
                      9g X 30봉입
                    </S.ProductInfoRightText1>
                  </S.ProductInfoRight>
                </S.ProductInfoUl>
                <S.ProductInfoUl>
                  <S.ProductInfoLeft>원산지</S.ProductInfoLeft>
                  <S.ProductInfoRight>
                    <S.ProductInfoRightText1>
                      상세페이지 별도표기
                    </S.ProductInfoRightText1>
                  </S.ProductInfoRight>
                </S.ProductInfoUl>
                <S.ProductInfoUl>
                  <S.ProductInfoLeft>알레르기정보</S.ProductInfoLeft>
                  <S.ProductInfoRight>
                    <S.ProductInfoRightText1>
                      돼지고기, 대두 함유
                    </S.ProductInfoRightText1>
                  </S.ProductInfoRight>
                </S.ProductInfoUl>
                <S.ProductInfoUl>
                  <S.ProductInfoLeft>구매수향</S.ProductInfoLeft>
                  <S.ProductInfoRight>
                    <S.ProductCountBox>
                      <S.ProductCountBtn name="minus" onClick={onClickCount}>
                        -
                      </S.ProductCountBtn>
                      <S.ProductCount>{itemCount}</S.ProductCount>
                      <S.ProductCountBtn name="plus" onClick={onClickCount}>
                        +
                      </S.ProductCountBtn>
                    </S.ProductCountBox>
                  </S.ProductInfoRight>
                </S.ProductInfoUl>
              </S.ProductInfoContainer>
              <S.ProductPriceInfoBox>
                <S.ProductPriceContainer>
                  <S.ProductPriceDiv>
                    <S.ProductPriceText>
                      총 상품금액 : <span>3,880원</span>
                    </S.ProductPriceText>
                  </S.ProductPriceDiv>
                </S.ProductPriceContainer>
              </S.ProductPriceInfoBox>
              <S.ProductBasketBtnContainer>
                <S.ProductBasketBtn>장바구니 담기</S.ProductBasketBtn>
              </S.ProductBasketBtnContainer>
            </S.ProductRightBox>
          </S.ProductInfoBox>
        </S.ProductContainer>
      </S.ProductDetailWrapper>
    </>
  );
};

export default ProductDetailUi;
