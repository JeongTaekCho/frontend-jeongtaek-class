import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getDate } from "../../../commons/libraries/utils";
import { productCommentDatas } from "../../../store";
import CommentAnswer from "../comment-answer/comment-answer.container";
import * as S from "./comment.style";

const ProductCommentUi = ({ isActive, onClickAnswerToggle }) => {
  const [productCommentData] = useRecoilState(productCommentDatas);

  return (
    <S.CommentAnswerBox>
      {productCommentData?.fetchUseditemQuestions?.map((comment) => {
        return (
          <>
            <S.CommentAnswerContainer key={comment._id}>
              <S.MyImgBox></S.MyImgBox>
              <S.CommentContentsBox>
                <S.CommentWriter>{comment.user.name}</S.CommentWriter>
                <S.CommentCon>{comment.contents}</S.CommentCon>
                <S.CommentDate>
                  {getDate(new Date(comment.createdAt))}
                </S.CommentDate>
              </S.CommentContentsBox>
              <button onClick={onClickAnswerToggle}>답글달기</button>
            </S.CommentAnswerContainer>
            <CommentAnswer isActive={isActive} />
          </>
        );
      })}
    </S.CommentAnswerBox>
  );
};

export default ProductCommentUi;
