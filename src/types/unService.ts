export interface UnServiceType {
    card: WelcomeCard;
}

export interface WelcomeCard {
    card: CardCard;
}

export interface CardCard {
    "@type":   string;
    id:        string;
    title:     string;
    imageLink: string;
}
