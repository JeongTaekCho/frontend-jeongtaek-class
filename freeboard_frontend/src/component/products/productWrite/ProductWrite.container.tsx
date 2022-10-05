import { useRouter } from "next/router";
import ProductWriteUi from "./ProductWrite.presenter";
import { CREATE_PRODUCT } from "./ProductWrite.querys";
import { useMutation } from "@apollo/client";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";

const ProductWrite = () => {
  const { register, handleSubmit, formState } = useForm();

  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onSubmitProduct = async (data: UseFormRegister<FieldValues>) => {
    data.price = Number(data.price);
    await createProduct({
      variables: {
        createUseditemInput: data,
      },
    });
    alert("성공");
    void router.push("/");
  };

  return (
    <>
      <ProductWriteUi
        onSubmitProduct={onSubmitProduct}
        register={register}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ProductWrite;
