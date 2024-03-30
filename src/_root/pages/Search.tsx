import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FETCH_SEARCH_URL } from "../../utils/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import useThrottle from "../../hooks/useThrottle";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const throttleSearchQuery = useThrottle<string>(searchQuery, 500);
  const { latitude, longitude } = useSelector((store: RootState) => store.userLocation);

  const handleSetSearchQuery = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  }

  const handleClearSearchQuery = () => {
    setSearchQuery("");
  }

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const res = await fetch(`${FETCH_SEARCH_URL}lat=${latitude}&lng=${longitude}&str=${throttleSearchQuery}&trackingId=null`, {
          headers: {
            "x-cors-api-key": "temp_09a95c2e6da960653de51c2deccb8507",
          },
        });
        
      } catch (error) {
        console.error("Search error : " + error);
      }
    }

    // if throttleSearchQuery string length is less than 2 => 0, 1 : simply return don't make any api calls
    if (throttleSearchQuery.length < 2) {
      return;
    }

    handleSearch();
  }, [throttleSearchQuery]);

  return (
    <section className=" max-w-4xl w-full mx-auto mt-5 px-5">
      <div className="w-full relative">
        <input className="w-full border border-gray-700 outline-none pl-3 pr-10 py-2 rounded-md text-xl text-gray-600 " type="text" placeholder="Search for reataurants and food..." value={searchQuery} onChange={handleSetSearchQuery} />
        {
          searchQuery === "" ? <IoSearchOutline className="absolute h-full text-gray-600 right-3 top-0 text-3xl" /> : <button className="absolute text-gray-600 right-3 top-2 text-3xl" onClick={handleClearSearchQuery} > <RxCross1 /> </button>
        }
      </div>
      <p>{throttleSearchQuery}</p>
    </section>
  )
}

export default Search