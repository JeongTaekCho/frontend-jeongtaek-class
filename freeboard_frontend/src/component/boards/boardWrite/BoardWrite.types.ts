import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IBoardWrite {
  isEdit?: boolean;
}

export interface IMyVariables {
  boardId: string;
  password?: string;
  updateBoardInput: {
    title?: string;
    contents?: string;
    youtubeUrl?: string;
    boardAddress?: {
      zipcode?: string;
      address?: string;
      addressDetail?: string;
    };
  };
}

export interface IAddress {
  address?: string;
  buildingName?: string;
  zonecode?: string;
  prevState: undefined;
  jibunAddress?: string;
}

export interface IBoardWriteUi {
  onChangeinputState: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmitBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  zipCodeError: string;
  addressError: string;
  youtubeLinkError: string;
  isEdit?: boolean;
  onEditBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  data?: Pick<IQuery, "fetchBoard">;
  writeCancle: () => void;
  editCancle: () => void;
  isModalOpen: boolean;
  ToggleAddressModal: () => void;
  handleComplete: (event: IAddress) => void;
  addressObj?: IAddress;
  zipCode: string;
  address: string;
}
