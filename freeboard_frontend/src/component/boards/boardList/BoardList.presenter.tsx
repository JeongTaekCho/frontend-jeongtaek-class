import * as S from "./BoardList.styled";
import Link from "next/link";
import { IBoardListUi } from "./BoardList.types";
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";

const BoardListUi = ({
  data,
  boardBestPost,
  searchData,
  onChangeSearchData,
}: IBoardListUi) => {
  const { RangePicker } = DatePicker;
  return (
    <>
      <S.BoardListWrapper>
        <S.BoardBestBoardTitle>베스트 게시글</S.BoardBestBoardTitle>
        <S.BoardBestLists>
          {boardBestPost?.fetchBoardsOfTheBest.map((bestBoard: any) => {
            return (
              <Link
                href={`/boards/${String(bestBoard._id)}`}
                key={bestBoard._id}
              >
                <S.BoardGalleryItem>
                  <S.BoardGrlleryThum></S.BoardGrlleryThum>
                  <S.BoardGalleryContentBox>
                    <S.BoardGalleryTitle>{bestBoard.title}</S.BoardGalleryTitle>
                    <S.BoardGalleryInfoBox>
                      <S.GalleryProfileBox>
                        <S.GalleryContentLeft>
                          <S.GalleryNameAndImg>
                            <S.GalleryProfileImg></S.GalleryProfileImg>
                            <S.GalleryName> {bestBoard.writer}</S.GalleryName>
                          </S.GalleryNameAndImg>

                          <S.GalleryDate>
                            {" "}
                            {bestBoard.createdAt.slice(0, 10)}
                          </S.GalleryDate>
                        </S.GalleryContentLeft>
                        <S.GalleryContentRight>
                          <svg
                            width="21"
                            height="18"
                            viewBox="0 0 21 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.61 3.72L11.04 6.61C10.92 7.2 11.08 7.81 11.46 8.27C11.84 8.73 12.4 9 13 9H18.5V10.08L15.93 16H7.84C7.66 16 7.5 15.84 7.5 15.66V7.82L11.61 3.72ZM12.5 0L6.09 6.41C5.71 6.79 5.5 7.3 5.5 7.83V15.66C5.5 16.95 6.55 18 7.84 18H15.94C16.65 18 17.3 17.63 17.66 17.03L20.33 10.88C20.44 10.63 20.5 10.36 20.5 10.08V9C20.5 7.9 19.6 7 18.5 7H13L13.92 2.35C13.97 2.13 13.94 1.89 13.84 1.69C13.61 1.24 13.32 0.83 12.96 0.47L12.5 0ZM2.5 7H0.5V18H2.5C3.05 18 3.5 17.55 3.5 17V8C3.5 7.45 3.05 7 2.5 7Z"
                              fill="#FFD600"
                            />
                          </svg>
                          <S.CommentLikeCount>
                            {" "}
                            {bestBoard.likeCount}
                          </S.CommentLikeCount>
                        </S.GalleryContentRight>
                      </S.GalleryProfileBox>
                    </S.BoardGalleryInfoBox>
                  </S.BoardGalleryContentBox>
                </S.BoardGalleryItem>
              </Link>
            );
          })}
        </S.BoardBestLists>
        <S.SearchContainer>
          <S.SearchTitleBox>
            <S.SearchTitle
              type="text"
              placeholder="제목을 검색해주세요."
              onChange={onChangeSearchData}
            />
          </S.SearchTitleBox>
          <Space direction="vertical" size={12}>
            <RangePicker />
          </Space>
          <S.SearchTitleBtn>검색하기</S.SearchTitleBtn>
        </S.SearchContainer>
        <S.BoardListContainer>
          <S.BoardUlTop>
            <S.BoardLi1>번호</S.BoardLi1>
            <S.BoardLi2>제목</S.BoardLi2>
            <S.BoardLi3>작성자</S.BoardLi3>
            <S.BoardLi4>날짜</S.BoardLi4>
          </S.BoardUlTop>
          {data?.fetchBoards
            ?.filter((item) => {
              return item?.title.includes(searchData);
            })
            .map((item: any, index: number) => {
              return (
                <S.BoardUl key={item._id}>
                  <S.BoardLi1>{index + 1}</S.BoardLi1>
                  <Link href={`/boards/${String(item._id)}`}>
                    <S.BoardLi2>
                      {item ? item.title : "로딩중입니다"}
                    </S.BoardLi2>
                  </Link>
                  <S.BoardLi3>{item?.writer}</S.BoardLi3>
                  <S.BoardLi4>{item?.createdAt.slice(0, 10)}</S.BoardLi4>
                </S.BoardUl>
              );
            })}
        </S.BoardListContainer>
        <S.BoardFooterContainer>
          <div></div>
          <S.BoardPageBox>
            <S.DefaultBtn>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
                  fill="black"
                />
              </svg>
            </S.DefaultBtn>
            <S.BoardPage>1</S.BoardPage>
            <S.BoardPage>2</S.BoardPage>
            <S.DefaultBtn>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00003 0L0.590027 1.41L5.17003 6L0.590027 10.59L2.00003 12L8.00003 6L2.00003 0Z"
                  fill="black"
                />
              </svg>
            </S.DefaultBtn>
          </S.BoardPageBox>
          <Link href={"/boards/boardWrite"}>
            <S.BoardWriteBtn>
              <img src="/board/boardWriteBtn.png" />
              <span>게시물 등록하기</span>
            </S.BoardWriteBtn>
          </Link>
        </S.BoardFooterContainer>
      </S.BoardListWrapper>
    </>
  );
};

export default BoardListUi;
