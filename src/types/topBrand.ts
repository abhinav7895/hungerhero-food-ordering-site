export interface TopBrandType {
    card: WelcomeCard;
}

export interface WelcomeCard {
    card: CardCard;
}

export interface CardCard {
    "@type":      string;
    header:       Header;
    layout:       Layout;
    id:           string;
    gridElements: GridElements;
}

export interface GridElements {
    infoWithStyle: InfoWithStyle;
}

export interface InfoWithStyle {
    "@type":      string;
    restaurants:  Restaurant[];
    theme:        string;
    widgetType:   string;
    style:        Style;
    collectionId: string;
}

export interface Restaurant {
    info:      Info;
    analytics: Action;
    cta:       Cta;
}

export interface Action {
}

export interface Cta {
    link: string;
    type: CtaType;
}

export enum CtaType {
    Weblink = "WEBLINK",
}

export interface Info {
    id:                              string;
    name:                            string;
    cloudinaryImageId:               string;
    locality:                        string;
    areaName:                        string;
    costForTwo:                      string;
    cuisines:                        string[];
    avgRating:                       number;
    parentId:                        string;
    avgRatingString:                 string;
    totalRatingsString:              TotalRatingsString;
    sla:                             Sla;
    availability:                    Availability;
    badges:                          Badges;
    isOpen:                          boolean;
    aggregatedDiscountInfoV2?:       Action;
    type:                            InfoType;
    badgesV2:                        BadgesV2;
    differentiatedUi:                DifferentiatedUI;
    reviewsSummary:                  Action;
    displayType:                     InfoDisplayType;
    restaurantOfferPresentationInfo: Action;
    aggregatedDiscountInfoV3?:       AggregatedDiscountInfoV3;
    veg?:                            boolean;
}

export interface AggregatedDiscountInfoV3 {
    header:       string;
    subHeader?:   string;
    discountTag?: string;
}

export interface Availability {
    nextCloseTime: Date;
    opened:        boolean;
}

export interface Badges {
    imageBadges?:        ImageBadge[];
    textExtendedBadges?: TextExtendedBadge[];
}

export interface ImageBadge {
    imageId:     string;
    description: string;
}

export interface TextExtendedBadge {
    iconId:           IconID;
    shortDescription: ShortDescription;
    fontColor:        FontColor;
    description?:     string;
}

export enum FontColor {
    The7E808C = "#7E808C",
}

export enum IconID {
    GuiltfreeGFLogoAndroid3X = "guiltfree/GF_Logo_android_3x",
}

export enum ShortDescription {
    OptionsAvailable = "options available",
}

export interface BadgesV2 {
    entityBadges: EntityBadges;
}

export interface EntityBadges {
    imageBased:         ImageBased;
    textBased:          Action;
    textExtendedBadges: TextExtendedBadges;
}

export interface ImageBased {
    badgeObject?: ImageBasedBadgeObject[];
}

export interface ImageBasedBadgeObject {
    attributes: ImageBadge;
}

export interface TextExtendedBadges {
    badgeObject?: TextExtendedBadgesBadgeObject[];
}

export interface TextExtendedBadgesBadgeObject {
    attributes: TextExtendedBadge;
}

export interface DifferentiatedUI {
    displayType:                  DifferentiatedUIDisplayType;
    differentiatedUiMediaDetails: DifferentiatedUIMediaDetails;
}

export interface DifferentiatedUIMediaDetails {
    mediaType: MediaType;
    lottie:    Action;
    video:     Action;
}

export enum MediaType {
    AdsMediaEnumImage = "ADS_MEDIA_ENUM_IMAGE",
}

export enum DifferentiatedUIDisplayType {
    AdsUIDisplayTypeEnumDefault = "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
}

export enum InfoDisplayType {
    RestaurantDisplayTypeDefault = "RESTAURANT_DISPLAY_TYPE_DEFAULT",
}

export interface Sla {
    deliveryTime:         number;
    lastMileTravel:       number;
    serviceability:       Serviceability;
    slaString:            string;
    lastMileTravelString: string;
    iconType:             IconType;
}

export enum IconType {
    IconTypeEmpty = "ICON_TYPE_EMPTY",
}

export enum Serviceability {
    Serviceable = "SERVICEABLE",
}

export enum TotalRatingsString {
    The100 = "100+",
    The10K = "10K+",
    The1K = "1K+",
    The5K = "5K+",
}

export enum InfoType {
    F = "F",
}

export interface Style {
    width:           Height;
    height:          Height;
    layoutAlignment: string;
}

export interface Height {
    type:      string;
    value:     number;
    reference: string;
}

export interface Header {
    title:         string;
    action:        Action;
    headerStyling: HeaderStyling;
}

export interface HeaderStyling {
    padding: HeaderStylingPadding;
}

export interface HeaderStylingPadding {
    left:   number;
    top:    number;
    bottom: number;
}

export interface Layout {
    rows:                    number;
    columns:                 number;
    horizontalScrollEnabled: boolean;
    itemSpacing:             number;
    widgetPadding:           Action;
    containerStyle:          ContainerStyle;
    scrollBar:               ScrollBar;
    widgetTheme:             WidgetTheme;
}

export interface ContainerStyle {
    containerPadding: ContainerPadding;
}

export interface ContainerPadding {
    left:   number;
    right:  number;
    bottom: number;
}

export interface ScrollBar {
    scrollThumbColor: string;
    scrollTrackColor: string;
    width:            number;
    height:           number;
    scrollStyling:    ScrollStyling;
}

export interface ScrollStyling {
    padding: ScrollStylingPadding;
}

export interface ScrollStylingPadding {
    top:    number;
    bottom: number;
}

export interface WidgetTheme {
    defaultMode: Mode;
    darkMode:    Mode;
}

export interface Mode {
    backgroundColour: string;
    theme:            string;
}
