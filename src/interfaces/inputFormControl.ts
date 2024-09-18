// import { Dispatch, SetStateAction } from "react";

export interface InputFormControlProps {
    isPassword: boolean,
    onChange: (e: string) => void,
    title: string
}

export interface CustomButtonProps {
    title: string,
    onClick: () => void,
}