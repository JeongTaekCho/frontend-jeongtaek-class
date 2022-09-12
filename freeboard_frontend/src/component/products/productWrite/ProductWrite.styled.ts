import styled from "@emotion/styled";

export const ProductWrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  padding: 60px 102px 100px 102px;
  box-shadow: 0px 0px 12px gray;
  margin: 120px auto;
  @media ${(props) => props.theme.tablet} {
    width: 90%;
    padding: 40px 8.5%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    padding: 20px 8.5%;
  }
`;

export const ProductWriteTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 8rem;
`;

export const ProductWriteForm = styled.form`
  width: 100%;
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

export const ErrorMsg = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #f00;
`;

export const ProductSubmit = styled.button`
  display: block;
  width: 200px;
  height: 40px;
  background: ${(props) => props.theme.mainColor};
  border: none;
  color: #fff;
  cursor: pointer;
  margin: 0 auto;
`;
