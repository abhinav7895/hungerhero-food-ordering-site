export interface RestaurantsDetailsType {
    id?:               string;
    imageId?:          string;
    action?:           CtaClass;
    entityType?:       EntityType;
    accessibility?:    Accessibility;
    entityId?:         string;
    frequencyCapping?: FrequencyCappingClass;
    info?:             Info;
    analytics?:        Analytics;
    cta?:              CtaClass;
    widgetId?:         string;
}

export interface Accessibility {
    altText:    string;
    altTextCta: AltTextCta;
}

export enum AltTextCta {
    Open = "open",
}

export interface CtaClass {
    link:  string;
    text?: string;
    type:  ActionType;
}

export enum ActionType {
    Weblink = "WEBLINK",
}

export interface Analytics {
    context?: string;
}

export enum EntityType {
    Banner = "BANNER",
}

export interface FrequencyCappingClass {
}

export interface Info {
    id:                              string;
    name:                            string;
    cloudinaryImageId:               string;
    locality:                        string;
    areaName:                        string;
    costForTwo:                      string;
    cuisines:                        string[];
    avgRating?:                      number;
    parentId:                        string;
    avgRatingString:                 AvgRatingString;
    totalRatingsString?:             TotalRatingsString;
    sla:                             Sla;
    availability:                    Availability;
    badges:                          Badges;
    isOpen:                          boolean;
    type:                            InfoType;
    badgesV2:                        BadgesV2;
    aggregatedDiscountInfoV3?:       AggregatedDiscountInfoV3;
    differentiatedUi:                DifferentiatedUI;
    reviewsSummary:                  FrequencyCappingClass;
    displayType:                     InfoDisplayType;
    restaurantOfferPresentationInfo: FrequencyCappingClass;
    veg?:                            boolean;
    aggregatedDiscountInfoV2?:       FrequencyCappingClass;
    orderabilityCommunication?:      OrderabilityCommunication;
}

export interface AggregatedDiscountInfoV3 {
    header:       string;
    subHeader:    string;
    discountTag?: string;
}

export interface Availability {
    nextCloseTime: Date;
    opened:        boolean;
}

export enum AvgRatingString {
    Empty = "--",
    The40 = "4.0",
    The41 = "4.1",
    The42 = "4.2",
    The43 = "4.3",
    The44 = "4.4",
    The45 = "4.5",
    The46 = "4.6",
}

export interface Badges {
    textExtendedBadges?: TextExtendedBadge[];
    imageBadges?:        ImageBadge[];
}

export interface ImageBadge {
    imageId:     ImageID;
    description: Description;
}

export enum Description {
    Gourmet = "Gourmet",
    Pureveg = "pureveg",
}

export enum ImageID {
    NewgPNG = "newg.png",
    V1695133679BadgesPureVeg111PNG = "v1695133679/badges/Pure_Veg111.png",
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
    Brand = "brand",
    OptionsAvailable = "options available",
}

export interface BadgesV2 {
    entityBadges: EntityBadges;
}

export interface EntityBadges {
    imageBased:         ImageBased;
    textBased:          FrequencyCappingClass;
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
    lottie:    FrequencyCappingClass;
    video:     FrequencyCappingClass;
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

export interface OrderabilityCommunication {
    title:      FrequencyCappingClass;
    subTitle:   FrequencyCappingClass;
    message:    FrequencyCappingClass;
    customIcon: FrequencyCappingClass;
}

export interface Sla {
    deliveryTime:          number;
    lastMileTravel?:       number;
    serviceability:        Serviceability;
    slaString:             string;
    lastMileTravelString?: string;
    iconType:              IconType;
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
    The500 = "500+",
    The5K = "5K+",
}

export enum InfoType {
    F = "F",
}

export interface PurpleWelcome {
    title:          string;
    headerStyling?: HeaderStyling;
    action?:        FrequencyCappingClass;
    "@type"?:       string;
    id?:            string;
}

export interface HeaderStyling {
    padding: Padding;
}

export interface Padding {
    left:   number;
    top:    number;
    bottom: number;
}
