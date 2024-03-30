export interface SearchData {
    statusCode: number;
    data:       Data;
    tid:        string;
    sid:        string;
    deviceId:   string;
    csrfToken:  string;
}

export interface Data {
    query:             string;
    highlightPreText:  string;
    highlightPostText: string;
    suggestions:       Suggestion[];
    userIntent:        string;
}

export interface Suggestion {
    text:              string;
    highlightedText:   string;
    type:              SuggestionType;
    suggestionType:    SuggestionTypeEnum;
    marketplace:       Marketplace;
    tagToDisplay:      SubCategory;
    cloudinaryId:      string;
    tagToDisplayColor: YColor;
    metadata:          string;
    cta:               Cta;
    category:          Category;
    categoryColor:     YColor;
    subCategory:       SubCategory;
    subCategoryColor:  YColor;
    restaurantId?:     number;
    disabled?:         boolean;
}

export enum Category {
    Food = "Food",
}

export enum YColor {
    The686B78 = "#686B78",
}

export interface Cta {
    text: string;
    type: CtaType;
    link: string;
}

export enum CtaType {
    Deeplink = "DEEPLINK",
}

export interface Marketplace {
    marketplaceId:  MarketplaceID;
    businessLineId: BusinessLineID;
}

export enum BusinessLineID {
    Food = "FOOD",
}

export enum MarketplaceID {
    Swiggy = "SWIGGY",
}

export enum SubCategory {
    Dish = "Dish",
    Restaurant = "Restaurant",
}

export enum SuggestionTypeEnum {
    SuggestionTypeLowConfidence = "SUGGESTION_TYPE_LOW_CONFIDENCE",
}

export enum SuggestionType {
    Dish = "DISH",
    Restaurant = "RESTAURANT",
}
