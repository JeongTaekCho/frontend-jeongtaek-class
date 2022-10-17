import { useRouter } from "next/router";
import ProductWriteUi from "./ProductWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.querys";
import { useMutation, useQuery } from "@apollo/client";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { ChangeEvent, useEffect, useState } from "react";
import { UPLOAD_FILE } from "../../boards/boardWrite/BoardWrite.querys";
import { errorModal, successModal } from "../../common/modal/modal-function";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { FETCH_PRODUCT } from "../productDetail/ProductDetail.querys";

const ProductWrite = ({ isEdit }) => {
  const [fileUrl, setFileUrl] = useState(["", "", ""]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [addressInfo, setAddressInfo] = useState("");

  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { loading, data: productData } = useQuery(FETCH_PRODUCT, {
    variables: {
      useditemId: router.query.productId,
    },
  });
  console.log(loading);
  useEffect(() => {
    if (productData) {
      setFileUrl(productData?.fetchUseditem?.images);
    }
  }, [productData]);

  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  const onClickAddressComprete = (value) => {
    console.log(value);
    setAddressInfo(value.address);
    setIsModalActive(false);
    setValue("useditemAddress.address", value.address);
  };

  const onClickAddressOpen = () => {
    setIsModalActive((prev) => !prev);
  };

  const onSubmitProduct = async (data: UseFormRegisterReturn) => {
    console.log(data);
    data.price = Number(data.price);
    data.useditemAddress.lat = Number(data.useditemAddress.lat);
    data.useditemAddress.lng = Number(data.useditemAddress.lng);
    data.images = fileUrl;
    const result = await createProduct({
      variables: {
        createUseditemInput: data,
      },
    });
    // successModal("상품등록에 성공하였습니다.");
    // void router.push(`/products/detail/${result.data.createUseditem._id}`);
  };

  const onSubmitUpdate = async (data: UseFormRegisterReturn) => {
    data.price = Number(data.price);
    data.useditemAddress.lat = Number(data.useditemAddress.lat);
    data.useditemAddress.lng = Number(data.useditemAddress.lng);
    data.images = fileUrl;
    try {
      const myVariables = {
        useditemId: String(router.query.productId),
        updateUseditemInput: {},
      };
      if (
        data.useditemAddress.lat ||
        data.useditemAddress.lng ||
        data.useditemAddress.address ||
        data.useditemAddress.addressDetail
      ) {
        myVariables.updateUseditemInput.useditemAddress = {};

        if (data.useditemAddress.lat)
          myVariables.updateUseditemInput.useditemAddress.lat =
            data.useditemAddress.lat;
        if (data.useditemAddress.lng)
          myVariables.updateUseditemInput.useditemAddress.lng =
            data.useditemAddress.lng;
        if (data.useditemAddress.address)
          myVariables.updateUseditemInput.useditemAddress.address =
            data.useditemAddress.address;
        if (data.useditemAddress.addressDetail)
          myVariables.updateUseditemInput.useditemAddress.addressDetail =
            data.useditemAddress.addressDetail;
      }
      if (data.name) myVariables.updateUseditemInput.name = data.name;
      if (data.remarks) myVariables.updateUseditemInput.remarks = data.remarks;
      if (data.price) myVariables.updateUseditemInput.price = data.price;
      if (data.contents)
        myVariables.updateUseditemInput.contents = data.contents;
      if (data.tags) myVariables.updateUseditemInput.tags = data.tags;
      if (fileUrl[0] || fileUrl[1] || fileUrl[2])
        myVariables.updateUseditemInput.images = fileUrl;

      await updateProduct({
        variables: myVariables,
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
    console.log(value);
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
        isModalActive={isModalActive}
        onClickAddressOpen={onClickAddressOpen}
        onClickAddressComprete={onClickAddressComprete}
        addressInfo={addressInfo}
        loading={loading}
      />
    </>
  );
};

export default ProductWrite;
