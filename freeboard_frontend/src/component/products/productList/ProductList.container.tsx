import { useQuery } from "@apollo/client";
import ProductListUi from "./ProductList.presenter";
import { FETCH_USED_ITEM } from "./ProductList.querys";

const ProductList = () => {
  const { data: productList } = useQuery(FETCH_USED_ITEM);

  return (
    <>
      <ProductListUi productList={productList} />
    </>
  );
};

export default ProductList;
