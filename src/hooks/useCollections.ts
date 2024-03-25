import { useState, useEffect, useContext } from "react";
import { FETCH_INFO_URL } from "../utils/constants";
FETCH_INFO_URL
import { useSelector } from "react-redux";
import { RootState } from "../types";
import { CollectionCardType } from "../types/collectioncardType";

const useCollections = (collectionId : string | undefined) : CollectionCardType[] | null => {
    const {latitude, longitude} = useSelector((state: RootState) => state.userLocation);
	const [restaurant, setRestaurant] = useState(null);

	useEffect(() => {
		getCollection();
	}, []);
	const getCollection = async () => {
		try {
			const data = await fetch(
				`${FETCH_INFO_URL}lat=${latitude}&lng=${longitude}&collection=${collectionId}&tags=layout_BAU_Contextual%2Ckachori&sortBy=&filters=&type=rcv2&offset=0&page_type=null`, {
					headers: {
					  "x-cors-api-key": "temp_09a95c2e6da960653de51c2deccb8507",
					},
				  }
			);
			const json = await data.json();
			const restInfo = json?.data?.cards;
			setRestaurant(restInfo);
		} catch (err) {
			console.log(err);
			setRestaurant(null);
		}
	};
	return restaurant;
};

export default useCollections;
