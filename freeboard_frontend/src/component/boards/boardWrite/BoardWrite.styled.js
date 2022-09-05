import styled from "@emotion/styled";
import { testResponsive } from "../../../../styles/test";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  padding: 60px 102px 100px 102px;
  box-shadow: 0px 0px 12px gray;
  margin: 0 auto;
  @media ${testResponsive.tablet} {
    width: 90%;
    padding: 40px 8.5%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    padding: 20px 8.5%;
  }
`;

export const BoardWriteTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 8rem;
`;

export const BoardWriteForm = styled.form`
  width: 100%;
`;

export const WritePasswordBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }
`;

export const HalfInputBox = styled.div`
  width: 48.6%;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;
export const DefaultInputBox = styled.div`
  width: 100%;
  height: 10.8rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  & p {
    font-size: 1.6rem;
    font-weight: 500;
    color: #000;
    margin-bottom: 2rem;
  }
`;

export const DefaultInput = styled.input`
  width: 100%;
  height: 5.2rem;
  border: 1px solid #bdbdbd;
  outline: none;
  padding: 1.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
`;

export const TextareaBox = styled(DefaultInputBox)`
  height: auto;
  & p {
    margin-bottom: 2rem;
  }
  textarea {
    width: 100%;
    height: 480px;
    border: 1px solid #bdbdbd;
    outline: none;
    padding: 1.5rem;
    resize: none;
    font-size: 1.6rem;
    font-weight: 500;
    @media ${(props) => props.theme.tablet} {
      height: 40rem;
    }
  }
`;

export const AddressWriteBox = styled(DefaultInputBox)`
  height: auto;
  justify-content: flex-start;
  margin-bottom: 3.7rem;
  & p {
    margin-bottom: 2rem;
  }
  & .m1530 {
    margin: 1.6rem 0 3rem;
  }
`;

export const AddressNumInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  button {
    width: 140px;
    height: 5.2rem;
    border: none;
    background: #000;
    font-size: 1.6rem;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    @media ${(props) => props.theme.mobile} {
      width: 100%;
    }
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

export const AddressNumInput = styled(DefaultInput)`
  width: 80px;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
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
    @media ${(props) => props.theme.mobile} {
      width: 30%;
      height: 0;
      padding-bottom: 28%;
      position: relative;
    }
    span {
      @media ${(props) => props.theme.mobile} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export const PhotoClipBtnBox = styled.div`
  width: 282px;
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
export const MainSelectBox = styled(DefaultInputBox)`
  height: 65px;
  margin-bottom: 8rem;
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
  width: 20rem;
  height: 5.2rem;
  border: none;
  outline: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: #000;
  background: #ffd600;
  margin: 0 auto;
  cursor: pointer;
`;

export const ErrorMsg = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #f00;
`;
