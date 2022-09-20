import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IMutation } from "../../../commons/types/generated/types";
import { errorModal, successModal } from "../../common/modal/modal-function";
import { FETCH_COMMENT } from "../boardDetail/BoardDetail.querys";
import CommentItemUi from "./commentList.presenter";
import { DELETE_COMMENT, EDIT_COMMENT } from "./commentList.querys";
import { ImyVariables } from "./commentList.types";

interface IComment {
  comment: any;
}

const CommentItem = ({ comment }: IComment) => {
  const [commentPsModal, setCommentPsModal] = useState(false); // 댓글 삭제시 비밀번호 모달
  const [commentDelPassword, setCommentDelPassword] = useState(""); // 댓글 삭제시 비밓번호
  const [commentId, setCommentId] = useState("");
  const [onCommentEdit, setOnCommentEdit] = useState(false);
  const [udPassword, setUdPassword] = useState(""); // 비밀번호
  const [udComment, setUdComment] = useState(""); // 댓글

  const [isEditRateValue, setIsEditCommentRateValue] = useState(0);

  const router = useRouter();

  // 댓글 삭제 뮤테이션
  const [commentDelete] =
    useMutation<Pick<IMutation, "deleteBoardComment">>(DELETE_COMMENT);

  // 댓글 수정 뮤테이션
  const [editComment] =
    useMutation<Pick<IMutation, "updateBoardComment">>(EDIT_COMMENT);

  // 댓글 비밀번호 팝업 ON
  const onCommentPsModal = async (event: MouseEvent<HTMLButtonElement>) => {
    setCommentPsModal(true);
    setCommentId(event.currentTarget.id);
  };
  // 댓글 비밀번호 팝업 Off
  const closeCommentPsModal = () => {
    setCommentPsModal(false);
  };

  // 댓글 수정 박스 ON/OFF
  const toggleCommentEdit = (event: MouseEvent<HTMLButtonElement>) => {
    //     setCommentId(event.currentTarget.id);
    setOnCommentEdit((prev) => !prev);
  };

  const onChangeUpdateCommentRate = (event: number) => {
    setIsEditCommentRateValue(event);
  };

  // 댓글 비밀번호 ONCHANGE
  const onChangeCommentDelPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setCommentDelPassword(event.target.value);
  };

  // 댓글수정 인풋 ONCHANGE
  const onChangeUdComment = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = event;

    if (name === "udPassword") {
      setUdPassword(value);
    } else if (name === "udComment") {
      setUdComment(value);
    }
  };

  // 댓글 수정 버튼 ONCLICK

  const commentEditSubmit = async () => {
    try {
      if (!udComment && !isEditRateValue) {
        errorModal("수정사항이 없습니다.");
        return;
      }
      const myVariables: ImyVariables = {
        boardCommentId: commentId,
      };
      myVariables.updateBoardCommentInput = {};
      if (udComment) myVariables.updateBoardCommentInput.contents = udComment;
      if (isEditRateValue)
        myVariables.updateBoardCommentInput.rating = isEditRateValue;
      if (udPassword) myVariables.password = udPassword;

      await editComment({
        variables: myVariables,
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: {
              boardId: router.query.id,
            },
          },
        ],
      });
      setUdComment("");
      setUdPassword("");
      setOnCommentEdit(false);
      successModal("댓글을 수정하였습니다.");
    } catch (error) {
      if (error instanceof Error) errorModal(error.message);
    }
  };

  // 댓글 삭제 버튼 ONCLICK
  const commentDeleteSubmit = async () => {
    try {
      await commentDelete({
        variables: {
          password: commentDelPassword,
          boardCommentId: commentId,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: {
              boardId: router.query.id,
            },
          },
        ],
      });
      successModal("댓글을 삭제하였습니다.");
      setCommentPsModal(false);
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };
  return (
    <CommentItemUi
      isEditRateValue={isEditRateValue}
      onChangeUpdateCommentRate={onChangeUpdateCommentRate}
      commentId={commentId}
      udComment={udComment}
      onCommentEdit={onCommentEdit}
      toggleCommentEdit={toggleCommentEdit}
      commentEditSubmit={commentEditSubmit}
      onChangeUdComment={onChangeUdComment}
      commentPsModal={commentPsModal}
      commentDelPassword={commentDelPassword}
      onChangeCommentDelPassword={onChangeCommentDelPassword}
      onCommentPsModal={onCommentPsModal}
      closeCommentPsModal={closeCommentPsModal}
      commentDeleteSubmit={commentDeleteSubmit}
      comment={comment}
    />
  );
};

export default CommentItem;
