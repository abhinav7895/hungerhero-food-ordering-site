
export interface RESTMenus {
    groupedCard: GroupedCard;
}

export interface GroupedCard {
    cardGroupMap: CardGroupMap;
}

export interface CardGroupMap {
    REGULAR: Regular;
}

export interface Regular {
    cards: CardElement[];
}

export interface CardElement {
    card: PurpleCard;
}

export interface PurpleCard {
    card:       FluffyCard;
    relevance?: Relevance;
}

export interface FluffyCard {
    "@type":             string;
    isPureVeg?:          boolean;
    badges?:             Badges;
    vegOnlyDetails?:     VegOnlyDetails;
    topRatedFilter?:     Badges;
    kidsCategoryFilter?: KidsCategoryFilter;
    vegFilter?:          VegFilter;
    nonvegFilter?:       VegFilter;
    title?:              string;
    itemCards?:          ItemCard[];
    type?:               string;
    imageId?:            string;
    text?:               string[];
    name?:               string;
    area?:               string;
    completeAddress?:    string;
}

export interface Badges {
}

export interface ItemCard {
    card: ItemCardCard;
}

export interface ItemCardCard {
    "@type":               Type;
    info:                  Info;
    analytics:             Badges;
    hideRestaurantDetails: boolean;
}

export enum Type {
    TypeGoogleapisCOMSwiggyPresentationFoodV2Dish = "type.googleapis.com/swiggy.presentation.food.v2.Dish",
}

export interface Info {
    id:            string;
    name:          string;
    category:      string;
    description?:  string;
    imageId?:      string;
    inStock:       number;
    isVeg:         number;
    price:         number;
    variants:      Badges;
    variantsV2:    Badges;
    itemAttribute: ItemAttribute;
    ribbon:        Ribbon;
    showImage?:    boolean;
    itemBadge:     Badges;
    badgesV2:      Badges;
    ratings:       Ratings;
    addons?:       Addon[];
    isBestseller?: boolean;
    type?:         TypeEnum;
}

export interface Addon {
    groupId:       string;
    groupName:     GroupName;
    choices:       Choice[];
    maxAddons:     number;
    maxFreeAddons: number;
}

export interface Choice {
    id:        string;
    name:      string;
    price:     number;
    inStock:   number;
    isVeg:     number;
    isEnabled: number;
}

export enum GroupName {
    AddOns = "Add-ons",
    Beverages = "Beverages",
    Dessert = "Dessert",
    Extra = "Extra",
    MaggiePasta = "Maggie & Pasta",
    Starter = "Starter",
}

export interface ItemAttribute {
    vegClassifier: VegClassifier;
}

export enum VegClassifier {
    Veg = "VEG",
}

export interface Ratings {
    aggregatedRating: AggregatedRating;
}

export interface AggregatedRating {
    rating?:        string;
    ratingCount?:   string;
    ratingCountV2?: string;
}

export interface Ribbon {
    text?:                  Text;
    textColor?:             TextColor;
    topBackgroundColor?:    TopBackgroundColor;
    bottomBackgroundColor?: BottomBackgroundColor;
}

export enum BottomBackgroundColor {
    B02331 = "#b02331",
}

export enum Text {
    Bestseller = "Bestseller",
}

export enum TextColor {
    Ffffff = "#ffffff",
}

export enum TopBackgroundColor {
    D53D4C = "#d53d4c",
}

export enum TypeEnum {
    Item = "ITEM",
}

export interface KidsCategoryFilter {
    attributes: KidsCategoryFilterAttributes;
}

export interface KidsCategoryFilterAttributes {
    displayText: string;
    tooltip:     Tooltip;
}

export interface Tooltip {
    enabled:     boolean;
    displayText: string;
}

export interface VegFilter {
    attributes: NonvegFilterAttributes;
}

export interface NonvegFilterAttributes {
    displayText: string;
}

export interface VegOnlyDetails {
    imageId:     string;
    title:       string;
    description: string;
}

export interface Relevance {
    type:      string;
    sectionId: string;
}
