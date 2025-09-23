import type { CSSProperties } from "react";

export type TextBlock = {
    type: "text";
    title?: string;
    description?: string;
    bullets?: string[];
    centerTitle?: boolean;
    centerDescription?: boolean;
    centerBullets?: boolean;
};

export type ContactFormBlock = {
    type: "custom";
    component: "ContactForm";
    title?: string;
    description?: string;
};

export type OgImageInput =
    | string
    | { title?: string; description?: string; bg?: string; color?: string };

export type MetaSchema = {
    title: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: OgImageInput;
};

export type MediaBlock = {
    type: "media";
    mediaType: "image" | "video";
    src: string;
    width?: string;
    height?: string;
    alt?: string;
    controls?: boolean;
    loop?: boolean;
    autoPlay?: boolean;
    muted?: boolean;
};

export type SliderBlock = {
    type: "slider";
    images: string[];
};

export type FaqBlock = {
    type: "faq";
    items: { question: string; answer: string }[];
};

export type CardBlock = {
    type: "card";
    image: string;
    title: string;
    description: string;
    buttonLink: string;
    buttonText: string;
};

export type AlignInput = "left" | "right" | "center" | "start" | "end";

export type SectionBlock = {
    type: "section";
    align?: AlignInput;
    gap?: string;
    left?: PageBlock;
    right?: PageBlock;
};

export type GridItem = {
    block: PageBlock;
    colSpan?: number;
    key?: string;
};

export type LegacyCard = {
    image: string;
    title: string;
    description: string;
    buttonLink?: string;
    buttonText?: string;
};

export type GridBlock = {
    type: "grid";
    columns: number;
    gap?: string;
    style?: CSSProperties;
    items?: GridItem[];
    cards?: LegacyCard[];
};

export type PricingBlock = {
    type: "pricing";
    variant?: "basic" | "highlight" | "premium";
    title: string;
    price: string;
    tokens: number;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
};

// ---------------- Custom Blocks ----------------

export type MissionBannerBlock = {
    type: "custom";
    component: "MissionBanner";
    title: string;
    description: string;
    image?: string;
};

export type ValuesIconsBlock = {
    type: "custom";
    component: "ValuesIcons";
    values: { icon: string; title: string; text: string }[];
};

export type StoryTimelineBlock = {
    type: "custom";
    component: "StoryTimeline";
    steps: { year?: string; title: string; description: string }[];
};

export type TeamGridBlock = {
    type: "custom";
    component: "TeamGrid";
    members: { name: string; role: string; bio: string; image: string }[];
};

export type CardSliderBlock = {
    type: "custom";
    component: "CardSlider";
    cards: {
        image: string;
        title: string;
        description: string;
        buttonText?: string;
        buttonLink?: string;
    }[];
};

export type HighlightStripBlock = {
    type: "custom";
    component: "HighlightStrip";
    messages: string[];
};

export type MarqueeBlock = {
    type: "custom";
    component: "Marquee";
    items: { text: string }[];
};

export type TimelineBlock = {
    type: "custom";
    component: "Timeline";
    steps: { title: string; description: string }[];
};

// ---------------- Union Types ----------------

export type LogoBlock = {
    type: "custom";
    component: "LogoBlock";
    width?: number;
    height?: number;
};

export type CustomBlock =
    | MissionBannerBlock
    | ValuesIconsBlock
    | StoryTimelineBlock
    | TeamGridBlock
    | CardSliderBlock
    | HighlightStripBlock
    | MarqueeBlock
    | ContactFormBlock
    | TimelineBlock
    | LogoBlock;


export type PageBlock =
    | TextBlock
    | MediaBlock
    | SliderBlock
    | FaqBlock
    | CardBlock
    | SectionBlock
    | PricingBlock
    | GridBlock
    | CustomBlock;

export type PageSchema = {
    meta: MetaSchema;
    blocks: PageBlock[];
};
