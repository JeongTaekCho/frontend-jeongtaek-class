import { useQuery } from "@apollo/client";
import ProductListUi from "./ProductList.presenter";
import { FETCH_USED_ITEM } from "./ProductList.querys";

const ProductList = () => {
  const { data: productList, fetchMore } = useQuery(FETCH_USED_ITEM);

  console.log(productList);

  const infiniteFun = () => {
    if (productList === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(productList.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <>
      <ProductListUi productList={productList} infiniteFun={infiniteFun} />
    </>
  );
};

export default ProductList;
