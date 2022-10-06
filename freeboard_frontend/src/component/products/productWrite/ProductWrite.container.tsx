import { useRouter } from "next/router";
import ProductWriteUi from "./ProductWrite.presenter";
import { CREATE_PRODUCT } from "./ProductWrite.querys";
import { useMutation } from "@apollo/client";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { useState } from "react";
import { UPLOAD_FILE } from "../../boards/boardWrite/BoardWrite.querys";

const ProductWrite = () => {
  const [fileUrl, setFileUrl] = useState(["", "", ""]);

  const { register, handleSubmit, formState } = useForm();

  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [uploadFile] = useMutation(UPLOAD_FILE);

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

  const onChangeFile = (index) => async (event) => {
    const file = event.target.files?.[index];
    const result = await uploadFile({
      variables: {
        file,
      },
    });
    setFileUrl((fileUrl[index] = result.data.uploadFile.url));
  };

  console.log(fileUrl);

  return (
    <>
      <ProductWriteUi
        onSubmitProduct={onSubmitProduct}
        register={register}
        handleSubmit={handleSubmit}
        onChangeFile={onChangeFile}
      />
    </>
  );
};

export default ProductWrite;
