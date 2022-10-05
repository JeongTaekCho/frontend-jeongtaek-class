import { atom } from "recoil";

export const accessTokenData = atom({
  key: "accessTokenData",
  default: "",
});

export const googleUserData = atom({
  key: "googleUserData",
  default: "",
});
export const facebookUserData = atom({
  key: "facebookUserData",
  default: "",
});
export const productDatas = atom({
  key: "productDatas",
  default: [],
});
