import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface ImyVariables {
  boardCommentId: string;
  password?: string;
  updateBoardCommentInput?: {
    rating?: number;
    contents?: string;
  };
}

export interface IBoardDetailProps {
  onModal: boolean;
  writer: string;
  comment: string;
  password: string;
  onChangeComment: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClickLikeBtn: () => void;
  onClickDisLikeBtn: () => void;
  onModalBtn: () => void;
  boardDetailDate: string;
  onClickCommentSubmit: () => void;
  data?: Pick<IQuery, "fetchBoard">;
  commentResult?: Pick<IQuery, "fetchBoardComments">;
  commentPsModal: boolean;
  commentDelPassword: string;
  onChangeCommentDelPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onCommentPsModal: (event: MouseEvent<HTMLButtonElement>) => void;
  closeCommentPsModal: () => void;
  commentDeleteSubmit: () => void;
  boardDeleteSubmit: () => void;
  goBoardEdit: () => void;
  onCommentEdit: boolean;
  toggleCommentEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  commentEditSubmit: () => void;
  onChangeUdComment: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  commentId: string;
  udComment: string;
  commentError: boolean;
  commentRateValue: number;
  isEditRateValue: number;
  onChangeCommentRate: (value: number) => void;
  onChangeUpdateCommentRate: (value: number) => void;
}
