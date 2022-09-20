import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

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
  boardDeleteSubmit: () => void;
  goBoardEdit: () => void;
  commentError: boolean;
  commentRateValue: number;
  onChangeCommentRate: (value: number) => void;
  commentResult?: Pick<IQuery, "fetchBoardComments">;
  autoClick: () => void;
  infiniteFun: () => void;
}
