import { useRouter } from "next/router";
import ProductWriteUi from "./ProductWrite.presenter";
import { CREATE_PRODUCT } from "./ProductWrite.querys";
import { useMutation } from "@apollo/client";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { ChangeEvent, useEffect, useState } from "react";
import { UPLOAD_FILE } from "../../boards/boardWrite/BoardWrite.querys";

declare const window = {
  kakao: any,
};

const ProductWrite = () => {
  const [fileUrl, setFileUrl] = useState(["", "", ""]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=67ff797434525aa2bbca4bf944af63c8";

    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  }, []);

  const { register, handleSubmit, formState } = useForm();

  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onSubmitProduct = async (data: UseFormRegister<FieldValues>) => {
    data.price = Number(data.price);
    data.images = fileUrl;
    await createProduct({
      variables: {
        createUseditemInput: data,
      },
    });
    alert("성공");
    void router.push("/");
  };

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
      />
    </>
  );
};

export default ProductWrite;
