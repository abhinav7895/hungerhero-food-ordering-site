
export interface RESTOffer {
    card: RESTOfferCard;
}

export interface RESTOfferCard {
    card: CardCard;
}

export interface CardCard {
    "@type":      string;
    layout:       Layout;
    id:           string;
    gridElements: GridElements;
}

export interface GridElements {
    infoWithStyle: InfoWithStyle;
}

export interface InfoWithStyle {
    "@type":                         string;
    offers:                          Offer[];
    habitMilestoneInfo:              HabitMilestoneInfo;
    loyaltyDiscoverPresentationInfo: LoyaltyDiscoverPresentationInfo;
}

export interface HabitMilestoneInfo {
    callout: ScrollBar;
}

export interface ScrollBar {
}

export interface LoyaltyDiscoverPresentationInfo {
    logoCtx: ScrollBar;
}

export interface Offer {
    info: Info;
    cta:  Cta;
}

export interface Cta {
    type: string;
}

export interface Info {
    header:               string;
    offerTagColor:        string;
    logoBottom:           string;
    offerIds:             string[];
    expiryTime:           Date;
    couponCode:           string;
    description:          string;
    offerType:            string;
    restId:               string;
    offerLogo:            string;
    offerTag:             string;
    descriptionTextColor: string;
}

export interface Layout {
    rows:                    number;
    columns:                 number;
    horizontalScrollEnabled: boolean;
    itemSpacing:             number;
    lineSpacing:             number;
    widgetPadding:           ScrollBar;
    containerStyle:          ContainerStyle;
    scrollBar:               ScrollBar;
}

export interface ContainerStyle {
    containerPadding: ContainerPadding;
}

export interface ContainerPadding {
    left:   number;
    right:  number;
    bottom: number;
}