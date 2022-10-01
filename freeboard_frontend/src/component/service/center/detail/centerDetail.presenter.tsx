import { useRouter } from "next/router";
import { IserviceData } from "./centerDetail.types";
import * as S from "./centerDetail.styles";

const CenterDetailUi = ({ serviceData, goDetailList }: IserviceData) => {
  const router = useRouter();
  return (
    <S.ServiceDetailWrapper>
      <S.ServiceDetailContainer>
        <S.ServiceDetailTitlt>1:1 문의</S.ServiceDetailTitlt>
        {serviceData
          .filter((item: any) => item.id === router.query.id)
          .map((el: any) => {
            return (
              <>
                <S.ServiceDetailInfo>
                  <S.DetailInfoUl>
                    <S.DetailInfoLi>제목</S.DetailInfoLi>
                    <S.DetailInfoLi2>{el.title}</S.DetailInfoLi2>
                  </S.DetailInfoUl>
                  <S.DetailInfoUl>
                    <S.DetailInfoLi>작성자</S.DetailInfoLi>
                    <S.DetailInfoLi2>{el.writer}</S.DetailInfoLi2>
                  </S.DetailInfoUl>
                  <S.DetailInfoUl>
                    <S.DetailInfoLi>작성일</S.DetailInfoLi>
                    <S.DetailInfoLi2>{el.createdAt}</S.DetailInfoLi2>
                  </S.DetailInfoUl>
                </S.ServiceDetailInfo>
                <S.DetailContentBox>{el.contents}</S.DetailContentBox>
              </>
            );
          })}
      </S.ServiceDetailContainer>
      <S.DetailBtnContainer>
        <S.GoListBtn onClick={goDetailList}>목록</S.GoListBtn>
      </S.DetailBtnContainer>
    </S.ServiceDetailWrapper>
  );
};

export default CenterDetailUi;
