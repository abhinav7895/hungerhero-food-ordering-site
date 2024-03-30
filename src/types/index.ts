import { IconType } from "react-icons/lib"

export type LinkType = {
    pathname ?: string,
    Icon : IconType,
    path : string,
    text : string,
    onClose : () => void,
}

export type locationType = {
    latitude : number,
    longitude : number,
    city : string
}

export interface RootState {
    userLocation : locationType,
}

export interface ReduxCartType {
    
}

export interface SetType {
    value : string,
}