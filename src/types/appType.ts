import { IconType } from "react-icons/lib"

export type LinkType = {
    pathname ?: string,
    Icon : IconType,
    path : string,
    text : string,
}

export type locationType = {
    latitude : number,
    longitude : number,
    city : string
}

export interface RootState {
    userLocation : locationType,
}

