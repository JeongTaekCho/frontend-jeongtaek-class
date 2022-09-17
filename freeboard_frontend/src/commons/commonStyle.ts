import styled from "@emotion/styled";

// HEADER

export const HeaderWrap = styled.div`
  width: 100%;
  box-shadow: 0px 1px 7px #ef9f84;
`;
export const HeaderBox = styled.div`
  width: 1200px;
  margin: 0 auto;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  padding-top: 20px;
`;

export const LogoBox = styled.div`
  width: 115px;
  height: 85px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const SearchBox = styled.div`
  width: 30%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${(props: any) => props.theme.mainColor};
`;
export const IconBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const MainSearchInput = styled.input`
  width: 100%;
  padding: 14px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  border: none;
  outline: none;
`;

export const LoginMenu = styled.div`
  width: 180px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
`;

export const LoginMenuLi = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #111;
  cursor: pointer;
`;

export const Navigation = styled.nav`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryMenu = styled.button`
  width: 88px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  &:hover > span {
    color: ${(props: any) => props.theme.mainColor};
  }
`;

export const CategoryText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #111;
`;

export const CommonMenu = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommonMenuLi = styled.li`
  width: 12.5%;
  font-size: 16px;
  font-weight: 500;
  color: #111;
  cursor: pointer;
  &:hover {
    color: ${(props: any) => props.theme.mainColor};
  }
`;

export const CommonMessageBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const CommonMessage = styled.button`
  width: 120px;
  height: 32px;
  border: 1px solid ${(props: any) => props.theme.mainColor};
  background: none;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 400;
  color: #ddd;
  cursor: pointer;
  &:hover {
    background: ${(props: any) => props.theme.mainColor};
  }
  &:hover > span {
    color: #fff;
  }
  span {
    color: ${(props: any) => props.theme.mainColor};
  }
`;

// FOOTER

export const FooterWrap = styled.div`
  width: 100%;
  height: 200px;
  background: rgba(247, 247, 247);
  margin-top: 120px;
`;
export const FooterContainer = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30%;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #111;
`;
export const FooterText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgb(153, 153, 153);
`;
