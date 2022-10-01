import { ChangeEvent, MouseEvent, useState } from "react";
import { Address } from "react-daum-postcode";
import RegisterUi from "./register.presenter";
import "antd/dist/antd.css";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./register.queries";
import { errorModal, successModal } from "../common/modal/modal-function";
import { useRouter } from "next/router";

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
  const [joinGenderInput, setJoinGenderInput] = useState("");
  const [joinBirthInput1, setJoinBirth1Input] = useState("");
  const [joinBirthInput2, setJoinBirth2Input] = useState("");
  const [joinBirthInput3, setJoinBirth3Input] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  const router = useRouter();

  // 주소
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ToggleAddressModal = (event: MouseEvent<HTMLElement>) => {
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
      target: { id, checked, value },
    } = event;

    if (id === "male" && checked === true) {
      setMaleChecked(true);
      setFemaleChecked(false);
      setNoChecked(false);
      setJoinGenderInput(value);
    }
    if (id === "female" && checked === true) {
      setMaleChecked(false);
      setFemaleChecked(true);
      setNoChecked(false);
      setJoinGenderInput(value);
    }
    if (id === "noSelect" && checked === true) {
      setMaleChecked(false);
      setFemaleChecked(false);
      setNoChecked(true);
      setJoinGenderInput(value);
    }
  };

  const onClickRegister = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (joinIdInput && joinPwInput && joinPw2Input && joinNameInput) {
      await createUser({
        variables: {
          createUserInput: {
            email: joinIdInput,
            password: joinPwInput,
            name: joinNameInput,
          },
        },
      });
      successModal("회원가입이 완료 되었습니다.");
      void router.push("/");
    } else {
      errorModal("빈 칸을 입력해주세요.");
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
      onClickRegister={onClickRegister}
    />
  );
};

export default Register;
