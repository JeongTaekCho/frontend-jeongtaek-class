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
    } else if (id === "male" && checked === false) {
      setMaleChecked(false);
    }
    if (id === "female" && checked === true) {
      setFemaleChecked(true);
    } else if (id === "female" && checked === false) {
      setFemaleChecked(false);
    }
    if (id === "noSelect" && checked === true) {
      setNoChecked(true);
    } else if (id === "noSelect" && checked === false) {
      setNoChecked(false);
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
