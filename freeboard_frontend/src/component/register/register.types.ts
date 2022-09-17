import { ChangeEvent } from "react";

export interface IRegisterUi {
  CheckBoxOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  maleChecked: boolean;
  femaleChecked: boolean;
  noChecked: boolean;
}
