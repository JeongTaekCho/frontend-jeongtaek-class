import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  padding: 60px 102px 100px 102px;
  box-shadow: 0px 0px 12px gray;
  margin: 120px auto 0;
  @media ${(props: any) => props.theme.tablet} {
    width: 90%;
    padding: 40px 8.5%;
  }
  @media ${(props: any) => props.theme.mobile} {
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
  @media ${(props: any) => props.theme.tablet} {
    flex-direction: column;
  }
`;

export const HalfInputBox = styled.div`
  width: 48.6%;
  @media ${(props: any) => props.theme.tablet} {
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
    @media ${(props: any) => props.theme.tablet} {
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
    @media ${(props: any) => props.theme.mobile} {
      width: 100%;
    }
  }
  @media ${(props: any) => props.theme.mobile} {
    flex-direction: column;
  }
`;

export const AddressNumInput = styled(DefaultInput)`
  width: 80px;
  @media ${(props: any) => props.theme.mobile} {
    width: 100%;
  }
`;

export const PhotoClipBox = styled(DefaultInputBox)`
  height: auto;
  justify-content: flex-start;
  & p {
    margin-bottom: 20px;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  width: 78px;
  height: 78px;
  background: #bdbdbd;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const PhotoClipBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${(props: any) => props.theme.mobile} {
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
  color: #fff;
  background: ${(props: any) => props.theme.mainColor};
  cursor: pointer;
`;

export const FormCancleBtn = styled(FormSubmitBtn)`
  display: block;
  width: 20rem;
  height: 5.2rem;
  border: none;
  outline: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props: any) => props.theme.mainColor};
  background: #fff;
  border: 1px solid ${(props: any) => props.theme.mainColor};
  cursor: pointer;
`;

export const ErrorMsg = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #f00;
`;

export const RadioLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: #000;
`;

export const cancleBtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  gap: 10px;
`;
