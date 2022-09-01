import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    #타임적는곳
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      #실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

const GraphqlMutationInputPage = () => {
  const [seller, setSeller] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        // variables 이게 달러 역할을 함.
        seller: "seller",
        createProductInput: {
          name: "mouse",
          detail: "정말 좋은 마우스",
          price: 3000,
        },
      },
    });
    alert(result.data.createProduct.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql - API 요청하기</button>
    </>
  );
};

export default GraphqlMutationInputPage;
