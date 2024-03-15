export interface AddRestType {
    info:      Info;
    analytics: Analytics;
    cta:       Cta;
}

export interface Analytics {
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
    type:                            InfoType;
    badgesV2:                        BadgesV2;
    aggregatedDiscountInfoV3:        AggregatedDiscountInfoV3;
    differentiatedUi:                DifferentiatedUI;
    reviewsSummary:                  Analytics;
    displayType:                     InfoDisplayType;
    restaurantOfferPresentationInfo: Analytics;
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
    textExtendedBadges?: TextExtendedBadge[];
    imageBadges?:        ImageBadge[];
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
    Brand = "brand",
    OptionsAvailable = "options available",
}

export interface BadgesV2 {
    entityBadges: EntityBadges;
}

export interface EntityBadges {
    imageBased:         ImageBased;
    textBased:          Analytics;
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
    lottie:    Analytics;
    video:     Analytics;
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
