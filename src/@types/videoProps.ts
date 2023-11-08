import { Dispatch, SetStateAction } from "react";

export type videoPopUpProps = {
    videoKey: string
    show: boolean
    setShow: Dispatch<SetStateAction<boolean>>;
    setVideoKey: Dispatch<SetStateAction<string>>;
}