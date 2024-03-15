
export interface InfoLinkType {
    card: WelcomeCard;
}

export interface WelcomeCard {
    card: CardCard;
}

export interface CardCard {
    "@type":        string;
    header:         Header;
    layout:         Layout;
    imageGridCards: ImageGridCards;
    id:             string;
    gridElements:   GridElements;
}

export interface GridElements {
    infoWithStyle: InfoWithStyle;
}

export interface InfoWithStyle {
    "@type": string;
    info:    Info[];
    style:   Style;
}

export interface Info {
    id:               string;
    imageId:          string;
    action:           Action;
    entityType:       EntityType;
    accessibility:    Accessibility;
    entityId:         string;
    frequencyCapping: ScrollBar;
}

export interface Accessibility {
    altText:    string;
    altTextCta: AltTextCta;
}

export enum AltTextCta {
    Open = "open",
}

export interface Action {
    link: string;
    text: string;
    type: Type;
}

export enum Type {
    Weblink = "WEBLINK",
}

export enum EntityType {
    Banner = "BANNER",
}

export interface ScrollBar {
}

export interface Style {
    width:  Height;
    height: Height;
}

export interface Height {
    type:      string;
    value:     number;
    reference: string;
}

export interface Header {
    title:         string;
    headerStyling: HeaderStyling;
}

export interface HeaderStyling {
    padding: Padding;
}

export interface Padding {
    left:   number;
    top:    number;
    bottom: number;
    right?: number;
}

export interface ImageGridCards {
    info:  Info[];
    style: Style;
}

export interface Layout {
    rows:                    number;
    columns:                 number;
    horizontalScrollEnabled: boolean;
    itemSpacing:             number;
    widgetPadding:           ScrollBar;
    containerStyle:          ContainerStyle;
    scrollBar:               ScrollBar;
    widgetTheme:             WidgetTheme;
}

export interface ContainerStyle {
    containerPadding: Padding;
}

export interface WidgetTheme {
    defaultMode: DefaultMode;
    darkMode:    DarkMode;
}

export interface DarkMode {
    theme: string;
}

export interface DefaultMode {
    backgroundColour: string;
    theme:            string;
}
