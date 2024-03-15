import { useState, useEffect } from "react";
import { FETCH_REST_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "../types";
import { Restaurant, TopBrandType } from "../types/topBrand";
import { AllRestType } from "../types/allRest";
import { CardCard as ResTitleCard, RestTitleType } from "../types/restTitle";
import { Header, Info, InfoLinkType } from "../types/infoLink";
import { UnServiceType, CardCard as UnServiceCard } from "../types/unService";

interface AllRestaurantsType {
  0?: Header;
  1?: Info[];
  2?: Header; // Top Brand title
  3?: Restaurant[]; // Top Brand restaurants
  4?: ResTitleCard; // Potentially another card type (Investigate this further)
  5?: any; // All restaurants
  6?: UnServiceCard; // Potentially another card type (Investigate this further)
  7?: any; // Additional restaurants
}

const useRestaurantsData = () => {
  const userLocation = useSelector((state: RootState) => state.userLocation);
  const [allRestaurants, setAllRestaurants] = useState<
    AllRestaurantsType | [] | null
  >([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<any>(null);

  useEffect(() => {
    getRestaurantsData();
  }, [userLocation]);
  const getRestaurantsData = async () => {
    try {
      const res = await fetch(
        `${FETCH_REST_URL}lat=${userLocation.latitude}&lng=${userLocation.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
        {
          headers: {
            "x-cors-api-key": "temp_09a95c2e6da960653de51c2deccb8507",
          },
        }
      );

      const json = await res.json();
      const topBrand: TopBrandType = json?.data?.cards?.find(
        (res: { card: { card: { id: string | string[] } } }) =>
          res?.card?.card?.id?.includes("top_brands_for_you")
      );

      const allRests: AllRestType = json?.data?.cards?.find(
        (res: { card: { card: { id: string | string[] } } }) =>
          res?.card?.card?.id?.includes("restaurant_grid_listing")
      );

      const allRestsTitle: RestTitleType = json?.data?.cards?.find(
        (res: { card: { card: { id: string | string[] } } }) =>
          res?.card?.card?.id?.includes("popular_restaurants_title")
      );

      const infoLink: InfoLinkType = json?.data?.cards?.find(
        (res: { card: { card: { id: string | string[] } } }) =>
          res?.card?.card?.id?.includes("whats_on_your_mind")
      );

      const unService: UnServiceType = json?.data?.cards?.find(
        (res: { card: { card: { id: string | string[] } } }) =>
          res?.card?.card?.id?.includes("swiggy_not_present")
      );
      const set1 = new Set(
        topBrand?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (item: { info: { id: any } }) => item.info.id
        )
      );
      const set2 = new Set(
        allRests?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (item: { info: { id: any } }) => item.info.id
        )
      );

      const combinedSet = new Set([...set1, ...set2]);
      const allTotalRests = Array.from(combinedSet, (id) => {
        const objInArray1 =
          topBrand?.card?.card?.gridElements?.infoWithStyle?.restaurants.find(
            (item: { info: { id: unknown } }) => item.info.id === id
          );
        const objInArray2 =
          allRests?.card?.card?.gridElements?.infoWithStyle?.restaurants.find(
            (item: { info: { id: unknown } }) => item.info.id === id
          );
        return objInArray1 || objInArray2;
      });

      const additionalRests =
        topBrand?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
          (item: { info: { id: unknown } }) => !set2.has(item.info.id)
        );

      setAllRestaurants([
        infoLink?.card?.card?.header,
        infoLink?.card?.card?.gridElements?.infoWithStyle?.info,
        topBrand?.card?.card?.header, // Top Brand title
        topBrand?.card?.card?.gridElements?.infoWithStyle?.restaurants, //20 items
        allRestsTitle?.card?.card,
        allTotalRests, // 9 items + 20 items
        unService?.card?.card, // unServiceable
        additionalRests || [], //20 items - 9 items
      ]);
      setFilteredRestaurants(
        allRests?.card?.card?.gridElements?.infoWithStyle?.restaurants //9 items
      );
    } catch (error) {
      setAllRestaurants(null);
      console.log(error);
    }
  };
  return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurantsData;
