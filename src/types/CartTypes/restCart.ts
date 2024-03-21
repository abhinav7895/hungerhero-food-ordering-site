import { Sla } from "../RestaurantMenuTypes/RESTInfoType";

export interface restCartType {
    name : string | undefined,
    id : string | undefined,
    areaName : string | undefined,
    imgUrl : string,
    distance : Sla | undefined
}