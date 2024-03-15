
export interface RestTitleType {
    card: WelcomeCard;
}

export interface WelcomeCard {
    card: CardCard;
}

export interface CardCard {
    "@type": string;
    title:   string;
    id:      string;
}
