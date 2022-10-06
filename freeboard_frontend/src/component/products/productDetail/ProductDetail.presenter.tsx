import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { productDatas } from "../../../store";
import * as S from "./ProductDetail.styled";

const ProductDetailUi = ({ itemCount, onClickCount, productInfo }) => {
  const [productData] = useRecoilState(productDatas);
  const router = useRouter();

  const result = productData.filter((item) => item._id === router.query.id);
  const itemPrice = Number(result[0]?.salePrice);
  // .replace(",", "")
  console.log(productInfo);
  return (
    <>
      <S.ProductDetailWrapper>
        <S.ProductContainer>
          <S.ProductInfoBox>
            <S.ProductImgBox>
              <S.ProductImg
                style={{
                  backgroundImage: productInfo
                    ? productInfo.fetchUseditem.images[0] ||
                      `url(https://storage.googleapis.com/${productInfo.fetchUseditem.images[0]})`
                    : `url(${result[0]?.img})`,
                }}
              ></S.ProductImg>
            </S.ProductImgBox>
            <S.ProductRightBox>
              <S.ProductSmTitle>샛별배송</S.ProductSmTitle>
              <S.ProductTitle>
                {productInfo
                  ? productInfo.fetchUseditem.name
                  : result[0]?.title}
              </S.ProductTitle>
              <S.ProductSubTitle>서브제목</S.ProductSubTitle>
              <S.ProductPrice>
                <span>
                  {productInfo
                    ? String(productInfo.fetchUseditem.price).replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                      )
                    : result[0]?.salePrice}
                </span>
                원
              </S.ProductPrice>
              <S.EventMsg>
                {productInfo
                  ? productInfo.fetchUseditem.remarks
                  : "로그인 후,적립 혜택이 제공됩니다."}
              </S.EventMsg>
              <S.EventMsg>
                {productInfo ? productInfo.fetchUseditem.tags : ""}
              </S.EventMsg>
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
                    <S.ProductInfoRightText1>
                      {productInfo
                        ? productInfo.fetchUseditem.seller.name
                        : result[0]?.seller}
                    </S.ProductInfoRightText1>
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
                    <S.ProductInfoRightText1>예정</S.ProductInfoRightText1>
                  </S.ProductInfoRight>
                </S.ProductInfoUl>
                <S.ProductInfoUl>
                  <S.ProductInfoLeft>중량/용량</S.ProductInfoLeft>
                  <S.ProductInfoRight>
                    <S.ProductInfoRightText1>
                      제목 확인 바랍니다.
                    </S.ProductInfoRightText1>
                  </S.ProductInfoRight>
                </S.ProductInfoUl>
                {/* <S.ProductInfoUl>
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
                </S.ProductInfoUl> */}
                <S.ProductInfoUl>
                  <S.ProductInfoLeft>구매수량</S.ProductInfoLeft>
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
                      <span>
                        {productInfo
                          ? String(
                              Number(productInfo.fetchUseditem.price) *
                                itemCount
                            ).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          : String(itemPrice * itemCount).replace(
                              /\B(?=(\d{3})+(?!\d))/g,
                              ","
                            )}
                        원
                      </span>
                    </S.ProductPriceText>
                  </S.ProductPriceDiv>
                </S.ProductPriceContainer>
              </S.ProductPriceInfoBox>
              <S.ProductBasketBtnContainer>
                <S.ProductBuyBtn>구매하기</S.ProductBuyBtn>
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
