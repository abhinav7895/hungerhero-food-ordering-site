export interface RESTInfo {
    card: RESTInfoCard;
}

export interface RESTInfoCard {
    card:      CardCard;
    relevance: Relevance;
}

export interface CardCard {
    "@type":   string;
    info:      Info;
    analytics: Analytics;
}

export interface Analytics {
}

export interface Info {
    id:                          string;
    name:                        string;
    city:                        string;
    slugs:                       Slugs;
    uniqueId:                    string;
    cloudinaryImageId:           string;
    locality:                    string;
    areaName:                    string;
    costForTwo:                  string;
    costForTwoMessage:           string;
    cuisines:                    string[];
    avgRating:                   number;
    veg:                         boolean;
    feeDetails:                  FeeDetails;
    parentId:                    string;
    avgRatingString:             string;
    totalRatingsString:          string;
    sla:                         Sla;
    availability:                Availability;
    aggregatedDiscountInfo:      AggregatedDiscountInfo;
    badges:                      Analytics;
    slugString:                  string;
    isOpen:                      boolean;
    labels:                      Label[];
    totalRatings:                number;
    aggregatedDiscountInfoV2:    AggregatedDiscountInfoV2;
    type:                        string;
    headerBanner:                HeaderBanner;
    expectationNotifiers:        ExpectationNotifier[];
    ratingSlab:                  string;
    orderabilityCommunication:   OrderabilityCommunication;
    hasBestsellerItems:          boolean;
    cartOrderabilityNudgeBanner: CartOrderabilityNudgeBanner;
    latLong:                     string;
    backgroundImageOverlayInfo:  Analytics;
}

export interface AggregatedDiscountInfo {
    shortDescriptionList: ShortDescriptionList[];
    descriptionList:      DescriptionList[];
    visible:              boolean;
}

export interface DescriptionList {
    meta:          string;
    discountType:  string;
    operationType: string;
}

export interface ShortDescriptionList {
    discountType:  string;
    operationType: string;
}

export interface AggregatedDiscountInfoV2 {
    shortDescriptionList: ShortDescriptionList[];
    descriptionList:      DescriptionList[];
}

export interface Availability {
    nextCloseTime:        Date;
    visibility:           boolean;
    opened:               boolean;
    restaurantClosedMeta: Analytics;
}

export interface CartOrderabilityNudgeBanner {
    parameters:   Analytics;
    presentation: Analytics;
}

export interface ExpectationNotifier {
    text:          string;
    icon:          Icon;
    popup:         Popup;
    type:          string;
    enrichedText:  string;
    halfCardPopup: HalfCardPopup;
}

export interface HalfCardPopup {
    halfCardPopupHeader: Analytics;
}

export interface Icon {
    imageId: string;
}

export interface Popup {
    cta: Analytics;
}

export interface FeeDetails {
    restaurantId: string;
    fees:         Fee[];
    totalFee:     number;
    icon:         string;
    message:      string;
}

export interface Fee {
    name: string;
    fee?: number;
}

export interface HeaderBanner {
    url: string;
}

export interface Label {
    title:   string;
    message: string;
}

export interface OrderabilityCommunication {
    title:      Analytics;
    subTitle:   Analytics;
    message:    Analytics;
    customIcon: Analytics;
}

export interface Sla {
    restaurantId:         string;
    deliveryTime:         number;
    minDeliveryTime:      number;
    maxDeliveryTime:      number;
    lastMileTravel:       number;
    serviceability:       string;
    stressFactor:         number;
    rainMode:             string;
    longDistance:         string;
    zoneId:               number;
    slaString:            string;
    lastMileTravelString: string;
    iconType:             string;
}

export interface Slugs {
    restaurant: string;
    city:       string;
}

export interface Relevance {
    type:      string;
    sectionId: string;
}
