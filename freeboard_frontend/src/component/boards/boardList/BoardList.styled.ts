import styled from "@emotion/styled";

export const BoardListWrapper = styled.div`
  width: 1200px;
  margin: 80px auto 0;
`;
export const BoardBestBoardTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 40px;
`;
export const BoardBestLists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const BoardGalleryItem = styled.div`
  width: 22%;
  border-radius: 30px;
  box-shadow: 0px 3px 10px gray;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: ease-in-out 0.2s;
  }
`;
export const BoardGrlleryThum = styled.div`
  width: 100%;
  padding-bottom: 40%;
  background: url("/board/ggamjang.png") no-repeat;
  background-size: cover;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
export const BoardGalleryContentBox = styled.div`
  width: 100%;
  padding: 20px;
`;
export const BoardGalleryTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 20px;
`;
export const BoardGalleryInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const GalleryContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const GalleryProfileBox = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;
  justify-content: space-between;
`;

export const GalleryProfileImg = styled.div`
  width: 20px;
  height: 20px;
  background: gray;
  border-radius: 50%;
`;
export const GalleryNameAndImg = styled.div`
  display: flex;
  gap: 6px;
`;
export const GalleryName = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000;
`;
export const GalleryDate = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #828282;
`;
export const GalleryContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
export const CommentLikeCount = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000;
`;
export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
`;
export const SearchTitleBox = styled.div`
  width: 64.66%;
  height: 52px;
  position: relative;
  background: #f2f2f2;
  border-radius: 10px;
`;
export const SearchTitle = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: url("/board/search.png") no-repeat;
  background-position: 18px;
  padding: 17px 19px 17px 48px;
  font-size: 16px;
  font-weight: 400;
  color: #000;
`;

export const dataPickerContainer = styled.div`
  width: 20.33%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchTitleBtn = styled.button`
  width: 7.83%;
  height: 52px;
  background: #000;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
`;

export const DataFickerInput = styled.input`
  width: 40%;
  height: 24px;
  border: none;
  outline: none;
`;

export const BoardListContainer = styled.div`
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-bottom: 40px;
`;
export const BoardUlTop = styled.ul`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  border-bottom: 1px solid #bdbdbd;
  text-align: center;
  margin: 0;
`;
export const BoardUl = styled(BoardUlTop)`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
  text-align: center;
  border-top: 1px solid #bdbdbd;
  &:hover {
    background-color: #ea55261a;
    transition: ease-in-out 0.2s;
    li {
      color: #333;
      /* font-weight: 500; */
    }
  }
`;
export const BoardLi1 = styled.li`
  width: 9.5%;
`;
export const BoardLi2 = styled.li`
  width: 62.9%;
  height: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  line-height: 50px;
`;
export const BoardLi3 = styled.li`
  width: 10.83%;
`;
export const BoardLi4 = styled.li`
  width: 13.33%;
`;
export const BoardFooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BoardPageBox = styled.div`
  display: flex;
  gap: 28px;
`;
export const DefaultBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardPage = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #4f4f4f;
`;
export const BoardWriteBtn = styled.button`
  width: 171px;
  height: 52px;
  border: 1px solid #f2f2f2;
  cursor: pointer;
  background: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 14px 16px;
`;
