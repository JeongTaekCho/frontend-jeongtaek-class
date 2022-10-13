import axios from "axios";
import { useState } from "react";

export default function IsSubmittingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [myData, setMyData] = useState<any>();

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    setMyData(result);

    setIsSubmitting(false);
  };

  return (
    <button disabled={isSubmitting} onClick={onClickSubmit}>
      등록하기 등의 API 요청버튼
    </button>
  );
}
