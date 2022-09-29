import styled from "@emotion/styled";

export const RegisterContainer = styled.form`
  width: 640px;
  margin: 0 auto;
  padding: 50px 0 60px;
`;

export const RegisterTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: #111;
  text-align: center;
  margin-bottom: 50px;
`;

export const LineContainer = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid #111;
`;
export const MostText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgb(102, 102, 102);
  text-align: right;
  span {
    color: red;
  }
  padding-bottom: 15px;
  border-bottom: 1px solid #111;
  margin-bottom: 5px;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const InputDefaultBox = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;
export const InputTitleBox = styled.div`
  width: 21.875%;
`;
export const InputTitleLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #111;
  span {
    font-size: 11px;
    color: red;
  }
`;
export const InputContentBox = styled.div`
  width: 52.03%;
  margin-right: 15px;
`;
export const InputContentInput = styled.input`
  width: 100%;
  height: 46px;
  border: 1px solid #ddd;
  padding: 15px;
  outline: none;
  background: none;
`;
export const InputConfirmBox = styled.div`
  width: 18.75%;
`;
export const InputConfirmButton = styled.button`
  width: 100%;
  height: 46px;
  border: 1px solid #f95621;
  font-size: 14px;
  font-weight: 500;
  color: #f95621;
  background: none;
  cursor: pointer;
  & :disabled {
    border: 1px solid #ddd;
    color: #ddd;
  }
`;

export const InputAddressFindBtn = styled(InputConfirmButton)`
  width: 100%;
  height: 46px;
  margin-bottom: 10px;
`;
export const InputAddressText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgb(102, 102, 102);
`;
export const SelectGenderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SelectGenderContainer = styled.div``;

export const DefaultCheckBox = styled.input`
  display: none;
`;
export const GenderCheckBox = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  border-radius: 50%;
`;
export const GenderCheckBoxOn = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #f95621;
  position: relative;
  span {
    display: block;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

export const GenderCheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #111;
  cursor: pointer;
`;

export const BirthdayBox = styled.div`
  width: 100%;
  height: 46px;
  border: 1px solid #ddd;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
`;

export const BirthdayInput = styled.input`
  width: 31.5%;
  height: 100%;
  text-align: center;
  outline: none;
  background: none;
  border: none;
`;

export const RegisterBtn = styled.input`
  display: block;
  width: 240px;
  height: 56px;
  border: none;
  background-color: ${(props: any) => props.theme.mainColor};
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  margin: 20px auto 0;
  cursor: pointer;
`;

export const AddressInput = styled(InputContentInput)`
  margin-bottom: 15px;
  &:disabled {
    background-color: rgba(250, 250, 250);
  }
`;

export const AgreeBox = styled.div`
  width: 100%;
  padding: 10px 0 10px 20px;
  display: flex;
`;

export const AgreeLeftBox = styled.div`
  width: 21.875%;
  padding-top: 12px;
  font-size: 14px;
  font-weight: 500;
  span {
    font-size: 11px;
    color: red;
  }
`;

export const AgreeRightBox = styled.div`
  width: 78.125%;
`;

export const defaultAgreeCheckBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const AgreeAllCheckBox = styled.div`
  padding-top: 12px;
  display: flex;
  gap: 12px;
`;

export const AgreeAllCheckText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;
