import { ChangeEvent, MouseEvent, useState } from "react";
import { Address } from "react-daum-postcode";
import RegisterUi from "./register.presenter";
import "antd/dist/antd.css";

const Register = () => {
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);

  const [joinIdInput, setJoinIdInput] = useState("");
  const [joinPwInput, setJoinPwInput] = useState("");
  const [joinPw2Input, setJoinPw2Input] = useState("");
  const [joinNameInput, setJoinNameInput] = useState("");
  const [joinEmailInput, setJoinEmailInput] = useState("");
  const [joinPhoneInput, setJoinPhoneInput] = useState("");
  const [joinAdressInput, setJoinAdressInput] = useState("");
  const [joinAdressDetailInput, setJoinAdressDetailInput] = useState("");
  // const [joinGenderInput, setJoinGenderInput] = useState("");
  const [joinBirthInput1, setJoinBirth1Input] = useState("");
  const [joinBirthInput2, setJoinBirth2Input] = useState("");
  const [joinBirthInput3, setJoinBirth3Input] = useState("");

  // 주소
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ToggleAddressModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    setIsModalOpen((prev) => !prev);
    setJoinAdressInput(`${address.address} ${address.jibunAddress}`);
  };

  console.log(
    joinIdInput,
    joinPwInput,
    joinPw2Input,
    joinNameInput,
    joinEmailInput,
    joinPhoneInput,
    joinAdressInput,
    joinAdressDetailInput,
    joinBirthInput1,
    joinBirthInput2,
    joinBirthInput3
  );

  const onChangeJoinInput = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === "joinId") {
      setJoinIdInput(value);
    } else if (name === "joinPw") {
      setJoinPwInput(value);
    } else if (name === "joinPw2") {
      setJoinPw2Input(value);
    } else if (name === "joinName") {
      setJoinNameInput(value);
    } else if (name === "joinEmail") {
      setJoinEmailInput(value);
    } else if (name === "joinPhone") {
      setJoinPhoneInput(value);
    } else if (name === "joinAdress") {
      setJoinAdressInput(value);
    } else if (name === "joinAdressDetail") {
      setJoinAdressDetailInput(value);
    } else if (name === "joinBirth1") {
      setJoinBirth1Input(value);
    } else if (name === "joinBirth2") {
      setJoinBirth2Input(value);
    } else if (name === "joinBirth3") {
      setJoinBirth3Input(value);
    }
  };

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
  };

  return (
    <RegisterUi
      CheckBoxOnChange={CheckBoxOnChange}
      maleChecked={maleChecked}
      femaleChecked={femaleChecked}
      noChecked={noChecked}
      onChangeJoinInput={onChangeJoinInput}
      isModalOpen={isModalOpen}
      ToggleAddressModal={ToggleAddressModal}
      handleComplete={handleComplete}
      joinAdressInput={joinAdressInput}
    />
  );
};

export default Register;
