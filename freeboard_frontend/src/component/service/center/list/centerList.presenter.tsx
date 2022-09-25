import * as S from "./centerList.styles";
import { ICenterListUi } from "./centerList.types";
import Link from "next/link";

const CenterListUi = ({ goCenterWrite, data }: ICenterListUi) => {
  return (
    <>
      <S.CenterListWrap>
        <S.CenterListContainer>
          <S.CenterListTitle>1:1 문의</S.CenterListTitle>
          <S.CenterListContent>
            <S.CenterListHead>
              <S.CenterListLi>제목</S.CenterListLi>
              <S.CenterListLi2>작성일</S.CenterListLi2>
              <S.CenterListLi2>답변상태</S.CenterListLi2>
            </S.CenterListHead>
            {data?.map((el, index) => {
              return (
                <S.CenterListBody key={index}>
                  <Link href={`/service/center/detail/1`}>
                    <S.CenterListLeft>{el.title}</S.CenterListLeft>
                  </Link>

                  <S.CenterListLi2>2022.01.01</S.CenterListLi2>
                  <S.CenterListLi2>답변대기</S.CenterListLi2>
                </S.CenterListBody>
              );
            })}
          </S.CenterListContent>
          <S.CenterListBtnContainer>
            <S.CenterWriteBtn onClick={goCenterWrite}>
              문의하기
            </S.CenterWriteBtn>
          </S.CenterListBtnContainer>
        </S.CenterListContainer>
      </S.CenterListWrap>
    </>
  );
};

export default CenterListUi;
