import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  padding: 60px 102px 100px 102px;
  box-shadow: 0px 0px 4px #000;
  margin: 0 auto;
`;

export const BoardWriteTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 80px;
`;

export const BoardWriteForm = styled.form`
  width: 100%;
`;

export const WritePasswordBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HalfInputBox = styled.div`
  width: 48.6%;
`;
export const DefaultInputBox = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  & p {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    margin-bottom: 20px;
  }
`;

export const DefaultInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  outline: none;
  padding: 14px;
`;

export const TextareaBox = styled(DefaultInputBox)`
  height: auto;
  & p {
    margin-bottom: 20px;
  }
  textarea {
    width: 100%;
    height: 480px;
    border: 1px solid #bdbdbd;
    outline: none;
    padding: 15px;
  }
`;

export const AddressWriteBox = styled(DefaultInputBox)`
  height: auto;
  justify-content: flex-start;
  margin-bottom: 37px;
  & p {
    margin-bottom: 20px;
  }
  & .m1530 {
    margin: 16px 0 30px;
  }
`;

export const AddressNumInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  button {
    width: 140px;
    height: 52px;
    border: none;
    background: #000;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
  }
`;

export const AddressNumInput = styled(DefaultInput)`
  width: 80px;
`;

export const PhotoClipBox = styled(DefaultInputBox)`
  height: auto;
  justify-content: flex-start;
  & p {
    margin-bottom: 20px;
  }
  button {
    width: 78px;
    height: 78px;
    backgound: #bdbdbd;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const PhotoClipBtnBox = styled.div`
  width: 282px;
  display: flex;
  justify-content: space-between;
`;
export const MainSelectBox = styled(DefaultInputBox)`
  height: 65px;
  margin-bottom: 80px;
`;
export const MainSelectInputBox = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    gap: 10px;
  }
  label {
    cursor: pointer;
  }
`;

export const FormSubmitBtn = styled.button`
  display: block;
  width: 200px;
  height: 52px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  background: #ffd600;
  margin: 0 auto;
  cursor: pointer;
`;

export const ErrorMsg = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #f00;
`;
