import axios from "axios";
import { useEffect, useState } from "react";

export default function openapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios
        .get("https://dog.ceo/api/breeds/image/random")
        .catch((error) => console.log(error));
      setDogUrl(result.data.message);
    };
    fetchDog();
  }, []);

  console.log(dogUrl);

  return (
    <>
      <img src={dogUrl} alt="" />
    </>
  );
}
