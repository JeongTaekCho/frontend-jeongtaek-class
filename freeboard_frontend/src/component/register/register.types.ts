import { ChangeEvent, MouseEvent } from "react";
import { Address } from "react-daum-postcode";

export interface IRegisterUi {
  CheckBoxOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  maleChecked: boolean;
  femaleChecked: boolean;
  noChecked: boolean;
  onChangeJoinInput: (event: ChangeEvent<HTMLInputElement>) => void;
  isModalOpen: boolean;
  ToggleAddressModal: (event: MouseEvent<HTMLElement>) => void;
  handleComplete: (address: Address) => void;
  joinAdressInput: string;
}
