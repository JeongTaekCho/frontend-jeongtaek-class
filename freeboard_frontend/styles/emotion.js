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

// 게시판 상세페이지 //

export const BoardDetailContainer = styled.div`
  width: 1200px;
  padding: 80px 102px;
  box-shadow: 0px 0px 8px #000;
  margin: 64px auto 0;
`;

export const BoardDetailTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #bdbdbd;
`;
export const DetailWriterAndDateBox = styled.div`
  display: flex;
  gap: 17px;
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
  font-size: 24px;
  font-weight: 500;
  color: #000;
`;
export const DetailDate = styled.p`
  font-size: 16px;
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
`;

export const DetailAddressText = styled.span`
  font-size: 16px;
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
  padding-top: 80px;
`;

export const BoardDetailTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #000;
  margin-bottom: 40px;
`;

export const DetailImage = styled.div`
  width: 100%;
  height: 480px;
  background: blue;
  color: #fff;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailContentBox = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  word-break: break-all;
  line-height: 1.6;
  margin-bottom: 120px;
`;
export const IfrmaeContainer = styled.div`
  width: 486px;
  height: 240px;
  background: blue;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 160px;
`;

export const LikeAndUnLikeBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
export const LikeAndUnLIkeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;
export const LikeText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
