import { RESIZE_MODE } from "../../utils/enum/video";

export interface VideoProps {
    src: string;
    resizeMode: RESIZE_MODE;
}