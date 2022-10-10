import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import * as S from "../../main/main.styles";
import * as A from "./ProductList.styled";

const ProductListUi = ({ productList, infiniteFun }) => {
  console.log(productList);

  return (
    <>
      <A.ProductListWrapper>
        <A.ProductListTitle>상품 목록</A.ProductListTitle>
        <InfiniteScroll
          pageStart={0}
          loadMore={infiniteFun}
          hasMore={true || false}
        >
          <S.MainItemContainer>
            {productList?.fetchUseditems.map((item) => {
              return (
                <Link href={`/products/detail/${item._id}`} key={item._id}>
                  <S.MainItemBox>
                    <S.MainItemBg
                      style={{
                        background: `url(https://storage.googleapis.com/${item.images[0]}) no-repeat center`,
                        backgroundSize: "cover",
                      }}
                    ></S.MainItemBg>
                    <S.ItemInfoBox>
                      <S.ItemName>{item.name}</S.ItemName>
                      <S.ItemPrice>
                        <span>
                          {String(item.price).replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            ","
                          )}
                          원 ~
                        </span>
                      </S.ItemPrice>
                      <S.ItemShippingInfo>무료배송</S.ItemShippingInfo>
                      <S.ItemEventBox>
                        <S.ItemEventSpan>신상세일</S.ItemEventSpan>
                        <S.ItemEventSpan2>테스트</S.ItemEventSpan2>
                      </S.ItemEventBox>
                    </S.ItemInfoBox>
                  </S.MainItemBox>
                </Link>
              );
            })}
          </S.MainItemContainer>
        </InfiniteScroll>
      </A.ProductListWrapper>
    </>
  );
};

export default ProductListUi;
