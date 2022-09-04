import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  padding: 60px 102px 100px 102px;
  box-shadow: 0px 0px 12px gray;
  margin: 0 auto;
  @media ${(props) => props.theme.tablet} {
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

// 게시판 상세페이지 //

export const BoardDetailContainer = styled.div`
  width: 1200px;
  margin: 200px auto;
  @media ${(props) => props.theme.tablet} {
    width: 90%;
  }
`;

export const BoardDetailTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 0;
  border-bottom: 1px solid #bdbdbd;
`;
export const DetailWriterAndDateBox = styled.div`
  display: flex;
  gap: 1.7rem;
`;
export const DetailProfileImg = styled.div`
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: #bdbdbd;
`;
export const DetailWriterAndDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const DetailWriter = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: #000;
`;
export const DetailDate = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #828282;
`;

export const ShareAndGpsBox = styled.div`
  display: flex;
  gap: 23px;
  align-item: center;
  position: relative;
`;

export const DetailAddressBox = styled.div`
  width: 376px;
  height: 64px;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: -65px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2px;
  padding: 16px;
  &::after {
    position: absolute;
    display: block;
    content: "";
    bottom: -8px;
    right: 0;
    width: 0px;
    height: 0px;
    background-color: transparent;
    border-left: 12px solid transparent;
    border-right: 0px;
    border-top: 8px solid rgba(0, 0, 0, 0.6);
  }
`;

export const DetailAddressText = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
`;

export const DefaultBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const BoardDetailContentContainer = styled.div`
  width: 100%;
  padding: 80px 10.2rem;
  box-shadow: 0px 0px 1.2rem gray;
  margin: 6.4rem auto 0;
  @media ${(props) => props.theme.tablet} {
    padding: 4rem 5.1rem;
  }
`;

export const BoardDetailTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 4rem;
`;

export const DetailImage = styled.div`
  width: 100%;
  height: 480px;
  background: #ddd;
  color: #fff;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    height: 40rem;
  }
`;

export const DetailContentBox = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: #000;
  word-break: break-all;
  line-height: 1.6;
  margin-bottom: 120px;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 6rem;
  }
`;
export const IframeContainer = styled.div`
  width: 486px;
  height: 240px;
  background: #ddd;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 160px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: 44rem;
    margin-bottom: 12rem;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
`;

export const LikeAndUnLikeBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
export const LikeAndUnLIkeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const LikeText = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const BoardBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 8.7rem 0;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 4rem;
`;

export const BoardDefaultBtn = styled.button`
  width: 185px;
  height: 45px;
  border: 1px solid #bdbdbd;
  font-size: 1.6rem;
  font-weight: 500;
  color: #000;
  background: none;
  cursor: pointer;
`;

export const CommentTitleBox = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 4.2rem;
`;

export const CommentTitle = styled.p`
  font-size: 1.8rem;
  fonr-weight: 500;
  color: #000;
`;

export const CommentWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentHead = styled.div`
  display: flex;
  align-items: center;
  gap: 44px;
  margin-bottom: 20px;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const CommentContainer = styled.div``;

export const CommentInput = styled.input`
  width: 180px;
  height: 5.2rem;
  border: 1px solid #bdbdbd;
  outline: none;
  padding: 1.4rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #828282;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

export const CommentStarBox = styled.div`
  display: flex;
  gap: 3px;
`;

export const CommentTextareaBox = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
  margin-bottom: 4rem;
`;
export const CommentTextarea = styled.textarea`
  width: 100%;
  height: 10.8rem;
  padding: 2rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: #bdbdbd;
  outline: none;
  resize: none;
  border: none;
  border-bottom: 1px solid #f2f2f2;
`;

export const CommentSubmitBox = styled.div`
  width: 100%;
  display: flex;
`;

export const CommentLengthBox = styled.div`
  width: 100%;
  padding: 1.4rem 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #bdbdbd;
`;

export const CommentSubmit = styled.button`
  width:91px;
  height 52px:;
  border:none;
  background: #000;
  font-size:1.6rem;
  font-weight:500;
  color:#fff;
  cursor:pointer;
`;

export const CommentModifyBtn = styled(CommentSubmit)`
  background: #ffd600;
  color: #000;
`;

export const CommentBox = styled.div`
  width: 100%;
  padding: 20px 0;
`;
