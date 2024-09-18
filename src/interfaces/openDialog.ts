import { Dispatch, SetStateAction } from "react";

export interface OpenDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
  }