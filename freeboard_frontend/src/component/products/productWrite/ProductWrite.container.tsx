import { useRouter } from "next/router";
import ProductWriteUi from "./ProductWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.querys";
import { useMutation, useQuery } from "@apollo/client";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { UPLOAD_FILE } from "../../boards/boardWrite/BoardWrite.querys";
import { errorModal, successModal } from "../../common/modal/modal-function";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { FETCH_PRODUCT } from "../productDetail/ProductDetail.querys";

const ProductWrite = ({ isEdit }) => {
  const [fileUrl, setFileUrl] = useState(["", "", ""]);

  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { data: productData } = useQuery(FETCH_PRODUCT, {
    variables: {
      useditemId: router.query.productId,
    },
  });

  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      contents: productData ? productData?.fetchUseditem?.contents : "",
    },
  });

  const onSubmitProduct = async (data: UseFormRegisterReturn) => {
    data.price = Number(data.price);
    data.useditemAddress.lat = Number(data.useditemAddress.lat);
    data.useditemAddress.lng = Number(data.useditemAddress.lng);
    data.images = fileUrl;
    const result = await createProduct({
      variables: {
        createUseditemInput: data,
      },
    });
    successModal("상품등록에 성공하였습니다.");
    void router.push(`/products/detail/${result.data.createUseditem._id}`);
  };

  const onSubmitUpdate = async (data: UseFormRegisterReturn) => {
    data.price = Number(data.price);
    data.useditemAddress.lat = Number(data.useditemAddress.lat);
    data.useditemAddress.lng = Number(data.useditemAddress.lng);
    data.images = fileUrl;
    try {
      await updateProduct({
        variables: {
          useditemId: router.query.productId,
          updateUseditemInput: data,
        },
        refetchQueries: [FETCH_PRODUCT],
      });
      successModal("수정이 완료되었습니다.");
      void router.push(`/products/detail/${router.query.productId}`);
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
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
        productData={productData}
        isEdit={isEdit}
        onSubmitUpdate={onSubmitUpdate}
        setValue={setValue}
      />
    </>
  );
};

export default ProductWrite;
