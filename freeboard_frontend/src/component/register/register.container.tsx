import { ChangeEvent, useState } from "react";
import RegisterUi from "./register.presenter";

const Register = () => {
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);

  const CheckBoxOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { id, checked },
    } = event;

    if (id === "male" && checked === true) {
      setMaleChecked(true);
      setFemaleChecked(false);
      setNoChecked(false);
    }
    if (id === "female" && checked === true) {
      setMaleChecked(false);
      setFemaleChecked(true);
      setNoChecked(false);
    }
    if (id === "noSelect" && checked === true) {
      setMaleChecked(false);
      setFemaleChecked(false);
      setNoChecked(true);
    }
    console.log(maleChecked, femaleChecked, noChecked);
    console.log(event);
  };

  return (
    <RegisterUi
      CheckBoxOnChange={CheckBoxOnChange}
      maleChecked={maleChecked}
      femaleChecked={femaleChecked}
      noChecked={noChecked}
    />
  );
};

export default Register;
