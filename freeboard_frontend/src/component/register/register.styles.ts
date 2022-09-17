import styled from "@emotion/styled";

export const RegisterContainer = styled.div`
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
  /* display: none; */
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
