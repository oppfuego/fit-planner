// Шрифти
export interface GoogleFont {
    name: string;
    css: string;
    url: string;
}

// Кнопки
export type ButtonColor =
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "text"
    | "textSecondary"
    | "muted"
    | "inverse"
    | "hover"
    | "link"
    | "linkHover"
    | "backgroundLight"
    | "backgroundDark"
    | "surface"
    | "surfaceMuted"
    | "border"
    | "shadow";

// Header
export type HeaderScrollMode = "solid" | "blur";
export type HeaderType = "default" | "sticky" | "sticky-rounded";
export type SideBarDirection = "left" | "right" | "top" | "bottom";

// Footer
export type FooterType = "columns" | "center" | "mega";
export type FooterLogoAlign = "start" | "center" | "end";

// Hover
export type HoverEffect = "none" | "shadow" | "lift" | "glow" | "tilt";

// Cards
export type CardVariant = "basic" | "highlight" | "premium";

export interface CardLabel {
    text: string;
    bg: string;
    color: string;
}
