import { useRouter } from "next/router";
import ProductWriteUi from "./ProductWrite.presenter";
import { CREATE_PRODUCT } from "./ProductWrite.querys";
import { useMutation } from "@apollo/client";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { UPLOAD_FILE } from "../../boards/boardWrite/BoardWrite.querys";
import { successModal } from "../../common/modal/modal-function";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ProductWrite = () => {
  const [fileUrl, setFileUrl] = useState(["", "", ""]);

  const { register, handleSubmit, setValue } = useForm();

  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onSubmitProduct = async (data: UseFormRegister<FieldValues>) => {
    console.log(data);
    data.price = Number(data.price);
    data.useditemAddress.lat = Number(data.useditemAddress.lat);
    data.useditemAddress.lng = Number(data.useditemAddress.lng);
    data.images = fileUrl;
    await createProduct({
      variables: {
        createUseditemInput: data,
      },
    });
    successModal("상품등록에 성공하였습니다.");
    void router.push("/");
  };

  const onChangeQuill = (value: string) => {
    setValue("contents", value);
  };

  const ReactQuill = dynamic(import("react-quill"));

  const onChangeFile =
    (index) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      const urlArray = [...fileUrl];
      urlArray[Number(event.target.title)] = result.data.uploadFile.url;
      setFileUrl(urlArray);
      console.log(urlArray);
    };

  return (
    <>
      <ProductWriteUi
        onSubmitProduct={onSubmitProduct}
        register={register}
        handleSubmit={handleSubmit}
        onChangeFile={onChangeFile}
        fileUrl={fileUrl}
        ReactQuill={ReactQuill}
        onChangeQuill={onChangeQuill}
      />
    </>
  );
};

export default ProductWrite;
