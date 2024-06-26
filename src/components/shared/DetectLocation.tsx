import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setLocation } from "../../lib/redux/userLocationSlice";
import { FaLocationArrow } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx"
import { getCityName } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../types";


const DetectLocation = ({ onClose }: { onClose: () => void }) => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const dispatch = useDispatch<Dispatch>();
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const { city } = useSelector((store: RootState) => store.userLocation);
    const [showLocationError, setShowLocationError] = useState(false);

    const closeLocationMenu = (e: React.MouseEvent) => {
        if (e.target === menuRef.current) {
            onClose();
        }
    }

    const handleDetectLocation = async (locationType: string | null) => {
        setShowLocationError(false); 
        if (city !== "Lucknow" && locationType) {
            dispatch(setLocation({
                latitude: 26.8912141, longitude: 81.0648758, city: "Lucknow"
            }))
            onClose();
            navigate("/");
            return;
        } else if(city === "Lucknow" && !locationType){
            // when locationType is null
            
            setIsFetching(true);
            navigator.geolocation.getCurrentPosition(async (location) => {
                try {
                    const { latitude, longitude } = location.coords;
                    const city = await getCityName(latitude, longitude);
                    if (latitude && longitude && city) {
                        dispatch(setLocation({
                            latitude, longitude, city
                        }))
                        onClose();
                        setIsFetching(false);
                        navigate("/");
                    }
                } catch (error) {
                    console.log(error);
                }
            }, () => {
                setShowLocationError(true); 
                setIsFetching(false);
            }, {timeout : 10000})
        }

        
    }

    return (
        <div onClick={closeLocationMenu} ref={menuRef} className="fixed inset-0 h-full flex-center flex-col bg-black bg-opacity-30 backdrop-blur-sm z-50">
            <div className="flex flex-col gap-3 max-w-[346.42px] w-full">
                <button onClick={onClose} className="self-end text-2xl bg-gray-600 hover:bg-gray-700 p-1 text-white border-2 border-white rounded-full transition-all duration-300 hover:scale-90 focus:scale-75">
                    <RxCross1 />
                </button>
                <div className=" w-full flex flex-col gap-3 p-5  max-w-md bg-white rounded-xl">
                    <button disabled={isFetching} className="text-gray-800 flex-center gap-2 p-3  bg-blue-100 hover:bg-blue-200 text-lg rounded-lg shadow-lg border border-gray-400 disabled:bg-blue-50" onClick={() => { handleDetectLocation(null) }}>
                        {isFetching ? <FaLocationArrow className=" animate-bounce text-red-500 " /> : <FaLocationArrow className="text-red-500" />}
                        Detect current location
                    </button>
                    {showLocationError && <p className="bg-[#d5615d] text-white rounded p-1 px-2 text-center font-extralight text-sm ">We are unable to fetch your location currently.</p>}
                    <div className="w-full flex items-center gap-1">
                        <span className="border-t w-full border-dashed border-gray-400 "></span>
                        <span className="text-center select-none font-extralight text-sm">OR</span>
                        <span className="border-t w-full border-dashed border-gray-400 "></span>
                    </div>
                    <button className=" text-gray-800 p-3  bg-blue-100 hover:bg-blue-200 text-lg rounded-lg shadow-lg  border-gray-400 border" onClick={() => { handleDetectLocation("default") }}>
                        Default location
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetectLocation