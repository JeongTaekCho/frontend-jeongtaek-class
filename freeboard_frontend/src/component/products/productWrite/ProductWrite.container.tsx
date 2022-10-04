import { useState } from "react";
import { useRouter } from "next/router";
import ProductWriteUi from "./ProductWrite.presenter";
import { CREATE_PRODUCT } from "./ProductWrite.querys";
import { useMutation } from "@apollo/client";

const ProductWrite = () => {
  //상품 인풋 상태관리
  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState("");

  //상품에러메세지 상태관리
  const [nameError, setNameError] = useState("");
  const [remarksError, setRemarksError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [tagsError, setTagsError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [addressDetailError, setAddressDetailError] = useState("");

  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onChangeProductInput = (event: any) => {
    const {
      target: { name, value },
    } = event;

    if (name === "name") {
      setName(value);
    } else if (name === "remarks") {
      setRemarks(value);
    } else if (name === "contents") {
      setContents(value);
    } else if (name === "price") {
      setPrice(Number(value));
    } else if (name === "tags") {
      setTags(value);
    }
  };

  const onSubmitProduct = async (event: any) => {
    event.preventDefault();
    await createProduct({
      variables: {
        createUseditemInput: {
          name,
          remarks,
          contents,
          price,
          tags,
        },
      },
    });
    alert("성공");
  };

  return (
    <>
      <ProductWriteUi
        onChangeProductInput={onChangeProductInput}
        onSubmitProduct={onSubmitProduct}
      />
    </>
  );
};

export default ProductWrite;
