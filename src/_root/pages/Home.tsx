import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useRestaurantsData from "../../hooks/useRestaurantsData"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Info } from "../../types/infoLink";
import { IMG_INFO_URL, IMG_NOT_FOUND_URL} from "../../utils/constants";
import { Restaurant } from "../../types/allRest";
import RestaurantCard from "../../components/shared/RestaurantCard";
import Filters from "../../components/shared/Filters";
import RestaurantCardShimmer from "../../components/shimmer/RestaurantCardShimmer";
import Footer from "../../components/shared/Footer";
import HomeShimmer from "../../components/shimmer/HomeShimmer";
import { v4 as uuidv4 } from 'uuid';
import { handleScrollTop } from "../../utils/helper";

window.addEventListener("DOMContentLoaded", function () {
	window.scrollTo(0, 0);
});

const Home = () => {
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurantsData();
  const [loadMoreRest, setLoadMoreRest] = useState(false);
  const [showExtraData, setShowExtraData] = useState(true);
  const [extraRestsData, setExtraRestsData] = useState<null | []>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const topRestRef = useRef<HTMLDivElement | null>(null);

  const scrollHandler = (direction: string, ref: React.MutableRefObject<HTMLDivElement | null>) => {
    const element = ref.current as HTMLDivElement;
    if (direction == "left") {
      element.scrollLeft += -(element.clientWidth - element.clientWidth * 0.15);
    } else {
      element.scrollLeft += element.clientWidth - element.clientWidth * 0.15;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const distanceFromBottom =
        documentHeight - (scrollPosition + viewportHeight);
      if (!loadMoreRest) {
        if (distanceFromBottom < 400) {
          setExtraRestsData([]);
          setLoadMoreRest(true);
          setTimeout(() => {
            setExtraRestsData(allRestaurants[7]);
          }, 2000);
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [loadMoreRest, allRestaurants])


  if (!allRestaurants) {
    return (
      <div className=" flex justify-center items-center flex-col w-full mt-[120px]">
        <img className=" w-56 md:w-[400px]" src={"assets/data-not-found.avif"} />
        <h3 className="text-2xl md:text-4xl font-bold  text-gray-700">Data Not Found.</h3>
        <p className="text-lg md:text-xl text-gray-600 mt-5">Something went wrong.</p>
        <a href="/" className="mt-5 relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Try Again</span>
        </a>
      </div>
    );
  }
  if (allRestaurants[6]) {
    return (
      <div className=" mt-[120px]  max-w-96 mx-auto ">
        <img loading="lazy" className="w-full" src={allRestaurants[6]?.imageLink} />
        <h3 className="text-2xl text-center fonr-bold text-gray-900">{allRestaurants[6]?.title}</h3>
        <p className="text-center text-lg mt-2 text-gray-700">We don’t have any services here till now.</p>
      </div>
    );
  }

  return allRestaurants.length === 0 ? <HomeShimmer /> : (
    <>
      {
        allRestaurants[0] &&
        <section className="mt-[120px] border-b border-b-gray-200 container mx-auto ">
          <div className="*:text-gray-700 flex justify-between px-2 lg:px-4 items-center">
            <h2 className="text-2xl md:text-3xl  font-bold">{allRestaurants[0]?.title}</h2>
            <div className="flex gap-4 text-2xl md:text-3xl ">
              <button onClick={() => { scrollHandler("left", carouselRef) }} className="hover:text-gray-600 hover:scale-110 duration-200 ease-in transition-all cursor-pointer disabled:text-gray-500 disabled:hover:text-gray-600"><BsFillArrowLeftCircleFill /></button>
              <button onClick={() => { scrollHandler("right", carouselRef) }} className="hover:text-gray-700 hover:scale-110 duration-200 ease-in transition-all cursor-pointer disabled:text-gray-500 disabled:hover:text-gray-600"><BsFillArrowRightCircleFill /></button>
            </div>
          </div>
          <div className="w-full  my-5">
            <div ref={carouselRef} className="flex overflow-x-scroll scroll-smooth scrollbar-hide">
              {
                allRestaurants[1].map((info: Info) => (
                  <Link onClick={() => {handleScrollTop()}} to={"/collections/" +
                    info?.action?.link
                      ?.split("=")[1]
                      ?.split("&")[0]} key={"collections" + info?.id} >
                    <div className="w-[130px] md:w-40">
                      <img loading="lazy" className=" hover:scale-110 transition-all duration-300 ease-out w-full" src={IMG_INFO_URL + info.imageId} alt="dishes image" />
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </section>
      }
      {
        allRestaurants[2] &&
        <section className="mt-10 border-b border-b-gray-200 container mx-auto">
          <div className="*:text-gray-700 flex justify-between px-2 lg:px-4">
            <h2 className="text-2xl md:text-3xl font-bold">{allRestaurants[2]?.title}</h2>
            <div className="flex gap-4 text-2xl md:text-3xl ">
              <button onClick={() => { scrollHandler("left", topRestRef) }} className="hover:text-gray-700 hover:scale-110 duration-200 ease-in transition-all cursor-pointer disabled:text-gray-500 disabled:hover:text-gray-600"><BsFillArrowLeftCircleFill /></button>
              <button onClick={() => { scrollHandler("right", topRestRef) }} className="hover:text-gray-700 hover:scale-110 duration-200 ease-in transition-all cursor-pointer disabled:text-gray-500 disabled:hover:text-gray-600"><BsFillArrowRightCircleFill /></button>
            </div>
          </div>
          <div className="w-full  my-5">
            <div ref={topRestRef} className="flex gap-1 lg:gap-4 overflow-x-scroll scroll-smooth scrollbar-hide">
              {
                allRestaurants[3].map((restaurant: Restaurant) => (
                  <RestaurantCard info={restaurant.info} key={restaurant.info.parentId + uuidv4()} />
                ))
              }
            </div>
          </div>
        </section>
      }
      <section className="my-10 container mx-auto">
        <div>
          <h2 className="text-2xl md:text-3xl text-gray-700  font-bold">{allRestaurants[4]?.title}</h2>
        </div>
        <div className="w-full my-3 lg:my-5 flex flex-wrap gap-1 lg:gap-2">
          <Filters Restaurant={allRestaurants[5]}
            setRestaurant={setFilteredRestaurants}
            setShowExtraData={setShowExtraData} />
        </div>
        {filteredRestaurants?.length !== 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2">
            {filteredRestaurants.map((restaurant: Restaurant) => (
              <RestaurantCard info={restaurant.info} key={uuidv4()} />
            ))}
            {
              showExtraData && (
                !extraRestsData ? null : extraRestsData.length === 0 ? Array(allRestaurants[7]?.length).fill("").map(() => (
                  <RestaurantCardShimmer />
                )) : extraRestsData?.map((restaurant: Restaurant) => (
                  <RestaurantCard info={restaurant.info} key={restaurant.info.parentId + uuidv4()} />
                ))
              )
            }
          </div>
        ) : (
          (
            <div className="body-box search-empty">
              <p>No Restaurant Found !!</p>
              <img src={IMG_NOT_FOUND_URL} />
            </div>
          )
        )}
      </section>
      <Footer/>
    </>
  )
}

export default Home