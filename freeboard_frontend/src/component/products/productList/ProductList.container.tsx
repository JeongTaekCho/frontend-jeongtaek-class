import { useQuery } from "@apollo/client";
import ProductListUi from "./ProductList.presenter";
import { FETCH_USED_ITEM } from "./ProductList.querys";

const ProductList = () => {
  const result = useQuery(FETCH_USED_ITEM);

  console.log(result);

  return (
    <>
      <ProductListUi />
    </>
  );
};

export default ProductList;
