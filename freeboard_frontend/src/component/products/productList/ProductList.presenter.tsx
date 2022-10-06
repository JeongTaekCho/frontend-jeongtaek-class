import * as S from "../../main/main.styles";
import * as A from "./ProductList.styled";

const ProductListUi = ({ productList }) => {
  console.log(productList);

  return (
    <>
      <A.ProductListWrapper>
        <A.ProductListTitle>상품 목록</A.ProductListTitle>
        <S.MainItemContainer>
          {productList?.fetchUseditems.map((item) => {
            return (
              <S.MainItemBox key={item._id}>
                <S.MainItemBg></S.MainItemBg>
                <S.ItemInfoBox>
                  <S.ItemName>{item.name}</S.ItemName>
                  <S.ItemPrice>
                    <span>
                      {String(item.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
            );
          })}
        </S.MainItemContainer>
      </A.ProductListWrapper>
    </>
  );
};

export default ProductListUi;
