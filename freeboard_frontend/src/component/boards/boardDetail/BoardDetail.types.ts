export interface IBoardDetailProps {
  onModal: boolean;
  writer: string;
  comment: string;
  password: string;
  onChangeComment: any;
  onClickLikeBtn: any;
  onClickDisLikeBtn: any;
  onModalBtn: any;
  boardDetailDate: string;
  onClickCommentSubmit: () => void;
  data: any;
  commentResult: any;
  commentPsModal: boolean;
  commentDelPassword: string;
  onChangeCommentDelPassword: any;
  onCommentPsModal: any;
  CloseCommentPsModal: any;
  commentDeleteSubmit: any;
  boardDeleteSubmit: () => void;
  goBoardEdit: () => void;
  onCommentEdit: boolean;
  toggleCommentEdit: any;
  commentEditSubmit: () => void;
  onChangeUdComment: any;
  commentId: string;
  udComment: string;
  commentError: boolean;
}
