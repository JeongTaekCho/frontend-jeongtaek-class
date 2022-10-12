import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productDatas } from "../../../store";
import * as S from "./ProductDetail.styled";
import * as A from "../../boards/boardDetail/BoardDetail.styled";
import ProductCommentAnswer from "../comment/comment.container";

declare const window: typeof globalThis & {
  kakao: any;
};

const ProductDetailUi = ({
  itemCount,
  onClickCount,
  productInfo,
  onChangeComment,
  onClickQuestionSubmit,
  comment,
  productComments,
  onClickGoUpdate,
  onClickdeleteProduct,
}) => {
  const [productData] = useRecoilState(productDatas);
  const router = useRouter();

  const result = productData.filter((item) => item._id === router.query.id);
  const itemPrice = Number(result[0]?.salePrice);

  const productLat = productInfo?.fetchUseditem.useditemAddress.lat;
  const productLng = productInfo?.fetchUseditem.useditemAddress.lng;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=67ff797434525aa2bbca4bf944af63c8";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(productLat, productLng), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const markerPosition = new window.kakao.maps.LatLng(
          productLat,
          productLng
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, []);

  return (
    <>
      <S.ProductDetailWrapper>
        <S.ProductContainer>
          <S.ProductInfoBox>
            <S.ProductImgBox>
              <S.ProductImg
                style={{
                  backgroundImage: productInfo
                    ? `url(https://storage.googleapis.com/${productInfo.fetchUseditem.images[0]})`
                    : ``,
                }}
              ></S.ProductImg>
            </S.ProductImgBox>
            <S.ProductRightBox>
              <S.EditDelBox>
                <S.EditBtn onClick={onClickGoUpdate}>수정하기</S.EditBtn>
                <S.EditBtn onClick={onClickdeleteProduct}>삭제하기</S.EditBtn>
              </S.EditDelBox>

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
              <S.ProductAddressBox>
                <S.ProductMapContainer id="map"></S.ProductMapContainer>
                <S.ProductInfoContainer>
                  <S.ProductInfoUl>
                    <S.ProductInfoLeft>주소</S.ProductInfoLeft>
                    <S.ProductInfoRight>
                      <S.ProductInfoRightText1>
                        {productInfo?.fetchUseditem.useditemAddress.address}
                      </S.ProductInfoRightText1>
                      <S.ProductInfoRightText2>
                        {
                          productInfo?.fetchUseditem.useditemAddress
                            .addressDetail
                        }
                      </S.ProductInfoRightText2>
                    </S.ProductInfoRight>
                  </S.ProductInfoUl>
                </S.ProductInfoContainer>
              </S.ProductAddressBox>
              <S.ProductBasketBtnContainer>
                <S.ProductBuyBtn>구매하기</S.ProductBuyBtn>
                <S.ProductBasketBtn>장바구니 담기</S.ProductBasketBtn>
              </S.ProductBasketBtnContainer>
            </S.ProductRightBox>
          </S.ProductInfoBox>

          <A.CommentTitleBox>
            <div>
              <img src="/board/commentTitle.png" />
            </div>
            <A.CommentTitle>댓글</A.CommentTitle>
          </A.CommentTitleBox>
          <A.CommentContainer>
            <A.CommentTextareaBox>
              <A.CommentTextarea
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다. 입력해주세요."
                name="comment"
                maxLength={99}
                onChange={onChangeComment}
                value={comment}
              />
              <A.CommentSubmitBox>
                <A.CommentLengthBox>{comment.length}/100</A.CommentLengthBox>
                <A.CommentSubmit onClick={onClickQuestionSubmit}>
                  등록하기
                </A.CommentSubmit>
              </A.CommentSubmitBox>
            </A.CommentTextareaBox>
          </A.CommentContainer>
          {productComments?.fetchUseditemQuestions?.map((comment) => {
            return <ProductCommentAnswer key={comment._id} comment={comment} />;
          })}
        </S.ProductContainer>
      </S.ProductDetailWrapper>
    </>
  );
};

export default ProductDetailUi;
