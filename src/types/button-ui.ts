import { ButtonColor } from "@/resources/styles-config";
import {SxProps} from "@mui/joy/styles";

export type ButtonUIProps = {
    variant?: "solid" | "outlined" | "soft" | "plain";
    shape?: "default" | "rounded" | "circle";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    color?: ButtonColor | string;
    hoverColor?: ButtonColor | string;
    textColor?: ButtonColor | string;
    children?: React.ReactNode;
    hoverTextColor?: ButtonColor | string;
    text?: string;
    sx?: SxProps;
    disabled?: boolean;
    type?: string;
    loading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
};
