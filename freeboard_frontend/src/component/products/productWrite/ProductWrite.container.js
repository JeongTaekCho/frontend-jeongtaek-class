import { useState } from "react";
import { useRouter } from "next/router";
import ProductWriteUi from "./ProductWrite.presenter";

const ProductWrite = () => {
  //게시판 인풋 상태관리
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  //에러메세지 상태관리
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [youtubeLinkError, setYoutubeLinkError] = useState("");

  const router = useRouter();

  return (
    <>
      <ProductWriteUi />
    </>
  );
};

export default ProductWrite;
