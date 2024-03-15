export interface CollectionCardType {
    card: CollectionCardTypeCard;
}

export interface CollectionCardTypeCard {
    card:       CardCard;
    relevance?: Relevance;
}

export interface CardCard {
    "@type":          string;
    collectionId?:    string;
    title?:           string;
    description?:     string;
    imageId?:         string;
    aspectRatio?:     string;
    cta?:             Cta;
    type?:            string;
    count?:           string;
    sortConfigs?:     SortConfig[];
    restaurantCount?: number;
    facetList?:       FacetList[];
    layout?:          Layout;
    id?:              string;
    gridElements?:    GridElements;
    info?:            Info;
    analytics?:       Analytics;
    widgetId?:        WidgetID;
}

export interface Analytics {
}

export interface Cta {
    link:  string;
    type:  CtaType;
    text?: Text;
}

export enum Text {
    RestaurantMenu = "RESTAURANT_MENU",
}

export enum CtaType {
    Collectionv2 = "collectionv2",
    Deeplink = "DEEPLINK",
}

export interface FacetList {
    label:     string;
    id:        string;
    selection: string;
    facetInfo: FacetInfo[];
    viewType:  string;
    subLabel:  string;
}

export interface FacetInfo {
    label:       string;
    id:          string;
    analytics:   Analytics;
    openFilter?: boolean;
}

export interface GridElements {
    infoWithStyle: InfoWithStyle;
}

export interface InfoWithStyle {
    "@type":       string;
    text:          string;
    headerStyling: HeaderStyling;
}

export interface HeaderStyling {
    textSize:     number;
    textColor:    string;
    textFontName: string;
    maxLines:     number;
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
    promoted?:                       boolean;
    adTrackingId?:                   string;
    sla:                             Sla;
    availability:                    Availability;
    badges:                          Badges;
    isOpen:                          boolean;
    type:                            InfoType;
    badgesV2:                        BadgesV2;
    aggregatedDiscountInfoV3?:       AggregatedDiscountInfoV3;
    orderabilityCommunication:       OrderabilityCommunication;
    differentiatedUi:                DifferentiatedUI;
    reviewsSummary:                  Analytics;
    displayType:                     InfoDisplayType;
    restaurantOfferPresentationInfo: Analytics;
    externalRatings:                 ExternalRatings;
    ratingsDisplayPreference:        RatingsDisplayPreference;
    aggregatedDiscountInfoV2?:       Analytics;
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
    textBased:          Analytics;
    imageBased:         Analytics;
    textExtendedBadges: TextExtendedBadges;
}

export interface TextExtendedBadges {
    badgeObject?: BadgeObject[];
}

export interface BadgeObject {
    attributes: TextExtendedBadge;
}

export interface DifferentiatedUI {
    displayType:                  DifferentiatedUIDisplayType;
    differentiatedUiMediaDetails: DifferentiatedUIMediaDetails;
}

export interface DifferentiatedUIMediaDetails {
    maxDuration: string;
    mediaType:   MediaType;
    lottie:      Analytics;
    video:       Analytics;
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

export interface ExternalRatings {
    aggregatedRating:   AggregatedRating;
    source?:            string;
    sourceIconImageId?: string;
}

export interface AggregatedRating {
    rating:       Rating;
    ratingCount?: string;
}

export enum Rating {
    Empty = "--",
    The28 = "2.8",
    The40 = "4.0",
}

export interface OrderabilityCommunication {
    title:      Analytics;
    subTitle:   Analytics;
    message:    Analytics;
    customIcon: Analytics;
}

export enum RatingsDisplayPreference {
    RatingsDisplayPreferenceShowSwiggy = "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
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

export enum InfoType {
    F = "F",
}

export interface Layout {
    rows:          number;
    widgetPadding: WidgetPadding;
    scrollBar:     Analytics;
    widgetTheme:   WidgetTheme;
}

export interface WidgetPadding {
    left:   number;
    top:    number;
    right:  number;
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

export interface SortConfig {
    key:               string;
    title:             string;
    selected?:         boolean;
    defaultSelection?: boolean;
}

export enum WidgetID {
    CollectionV5RestaurantListWidgetContextual = "collectionV5RestaurantListWidget_Contextual",
}

export interface Relevance {
    type:      RelevanceType;
    sectionId: SectionID;
}

export enum SectionID {
    MenuReturnFood = "MENU_RETURN_FOOD",
}

export enum RelevanceType {
    RelevanceTypeOnMenuReturn = "RELEVANCE_TYPE_ON_MENU_RETURN",
}
