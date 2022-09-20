import { ChangeEvent, MouseEvent } from "react";

export interface ICommentItem {
  isEditRateValue: number;
  onChangeUpdateCommentRate: (value: number) => void;
  commentId: string;
  udComment: string;
  onCommentEdit: boolean;
  toggleCommentEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  commentEditSubmit: () => void;
  onChangeUdComment: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  commentPsModal: boolean;
  commentDelPassword: string;
  onChangeCommentDelPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onCommentPsModal: (event: MouseEvent<HTMLButtonElement>) => void;
  closeCommentPsModal: () => void;
  commentDeleteSubmit: () => void;
  comment: any;
}

export interface ImyVariables {
  boardCommentId: string;
  password?: string;
  updateBoardCommentInput?: {
    rating?: number;
    contents?: string;
  };
}
