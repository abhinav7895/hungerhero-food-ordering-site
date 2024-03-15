export interface AllRestType {
    card: WelcomeCard;
}

export interface WelcomeCard {
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
    "@type":     string;
    restaurants: Restaurant[];
    theme:       string;
}

export interface Restaurant {
    info:      Info;
    analytics: Analytics;
    cta:       Cta;
    widgetId:  string;
}

export interface Analytics {
    context: string;
}

export interface Cta {
    link: string;
    text: string;
    type: string;
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
    totalRatingsString:              string;
    sla:                             Sla;
    availability:                    Availability;
    badges:                          Badges;
    isOpen:                          boolean;
    type:                            string;
    badgesV2:                        BadgesV2;
    aggregatedDiscountInfoV3?:       AggregatedDiscountInfoV3;
    orderabilityCommunication:       OrderabilityCommunication;
    differentiatedUi:                DifferentiatedUI;
    reviewsSummary:                  AggregatedDiscountInfoV2;
    displayType:                     string;
    isNewlyOnboarded?:               boolean;
    restaurantOfferPresentationInfo: AggregatedDiscountInfoV2;
    aggregatedDiscountInfoV2?:       AggregatedDiscountInfoV2;
    veg?:                            boolean;
}

export interface AggregatedDiscountInfoV2 {
}

export interface AggregatedDiscountInfoV3 {
    header:               string;
    subHeader:            string;
    discountTag?:         string;
    discountCalloutInfo?: DiscountCalloutInfo;
}

export interface DiscountCalloutInfo {
    message: string;
    logoCtx: LogoCtx;
}

export interface LogoCtx {
    logo: string;
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
    iconId:           string;
    shortDescription: string;
    fontColor:        string;
    description?:     string;
}

export interface BadgesV2 {
    entityBadges: EntityBadges;
}

export interface EntityBadges {
    imageBased:         ImageBased;
    textBased:          AggregatedDiscountInfoV2;
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
    displayType:                  string;
    differentiatedUiMediaDetails: DifferentiatedUIMediaDetails;
}

export interface DifferentiatedUIMediaDetails {
    mediaType: string;
    lottie:    AggregatedDiscountInfoV2;
    video:     AggregatedDiscountInfoV2;
}

export interface OrderabilityCommunication {
    title:      AggregatedDiscountInfoV2;
    subTitle:   AggregatedDiscountInfoV2;
    message:    AggregatedDiscountInfoV2;
    customIcon: AggregatedDiscountInfoV2;
}

export interface Sla {
    deliveryTime:         number;
    lastMileTravel:       number;
    serviceability:       string;
    slaString:            string;
    lastMileTravelString: string;
    iconType:             string;
}

export interface Layout {
    columns: number;
}
