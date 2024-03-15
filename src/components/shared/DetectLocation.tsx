import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setLocation } from "../../lib/redux/userLocationSlice";
import { FaLocationArrow } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx"
import { getCityName } from "../../utils/helper";


const DetectLocation = ({ onClose }: { onClose: () => void }) => {
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const dispatch = useDispatch<Dispatch>();
    const menuRef = useRef(null);

    const closeLocationMenu = (e: React.MouseEvent) => {
        if (e.target === menuRef.current) {
            onClose();
        }
    }

    const handleDetectLocation = async (locationType: string | null) => {

        // when locationType is "default"
        if (locationType) {
            dispatch(setLocation({
                latitude: 28.7040592, longitude: 77.1024901, city: "Delhi"
            }))
            onClose();
            return;
        }

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
                }
            } catch (error) {
                console.log(error);
            }
        }, (error) => {
            console.error("Error while fetching location : " + error);
        })
    }

    return (
        <div onClick={closeLocationMenu} ref={menuRef} className="fixed inset-0 h-full flex-center flex-col bg-black bg-opacity-30 backdrop-blur-sm z-50">
            <div className="flex flex-col gap-3">
                <button onClick={onClose} className="self-end text-2xl bg-gray-600 hover:bg-gray-700 p-1 text-white border-2 border-white rounded-full transition-all duration-300 hover:scale-90 focus:scale-75">
                    <RxCross1 />
                </button>
                <div className="*:text-gray-800 w-full flex flex-col gap-3 p-5  max-w-md bg-white rounded-xl">
                    <button className="flex-center gap-2 p-3  bg-blue-100 hover:bg-blue-200 text-lg rounded-lg shadow-lg border border-gray-400 " onClick={() => { handleDetectLocation(null) }}>
                        {isFetching ? <FaLocationArrow className=" animate-bounce text-red-500 " /> : <FaLocationArrow className="text-red-500" />}
                        Detect current location
                    </button>
                    <button className="  p-3  bg-blue-100 hover:bg-blue-200 text-lg rounded-lg shadow-lg border border-gray-400" onClick={() => { handleDetectLocation("default") }}>
                        Default location
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetectLocation