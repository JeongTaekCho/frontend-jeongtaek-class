import { ChangeEvent, MouseEvent } from "react";

export interface ILoginUi {
  goRegister: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeLoginInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: (event: MouseEvent<HTMLButtonElement>) => void;
  loginIdError: boolean;
  loginPwError: boolean;
  onClickSocialLogin: (event: MouseEvent<HTMLButtonElement>) => void;
}
