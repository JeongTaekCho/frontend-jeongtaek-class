import * as S from "./pagination.styles";
import { IPagination } from "./pagination.types";

const PaginationUi = ({
  startPage,
  onClickPrevPage,
  onClickNextPage,
  onClickPage,
  lastPage,
  pageNum,
}: IPagination) => {
  return (
    <S.BoardPageBox>
      <S.DefaultBtn onClick={onClickPrevPage}>
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
      {new Array(10).fill(1).map((board, index) => {
        return index + startPage <= lastPage ? (
          <S.BoardPage
            value={index}
            id={String(index + startPage)}
            onClick={onClickPage}
            className={index === pageNum ? "on" : ""}
          >
            {index + startPage}
          </S.BoardPage>
        ) : null;
      })}

      <S.DefaultBtn onClick={onClickNextPage}>
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
  );
};

export default PaginationUi;
