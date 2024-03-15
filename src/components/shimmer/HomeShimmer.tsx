import RestaurantCardShimmer from "./RestaurantCardShimmer"
import { v4 as uuidv4 } from 'uuid';;


const HomeShimmer = () => {
  return (
    <>
        <section className="mt-8 border-b border-b-gray-200 container mx-auto py-5">
          <div className="*:text-gray-800 flex justify-between px-4 gap-2 items-center">
            <div className="text-3xl h-[36px] w-[200px] md:w-[300px]  bg-gray-200 animate-pulse   font-bold rounded-xl">

            </div>
            <div className="flex gap-4 text-3xl *:bg-blue-200">
              <div className="size-[30px] animate-pulse rounded-full"></div>
              <div className="size-[30px] animate-pulse rounded-full"></div>
            </div>
          </div>
          <div className="w-full  my-5">
            <div className="flex gap-4 overflow-x-hidden scroll-smooth scrollbar-hide">
              {
                Array(20).fill("").map((index) => (
                  <div key={uuidv4()} className=" min-w-[80px]  min-h-[80px] md:min-w-[130px] md:min-h-[130px] flex">
                    <div className=" size-full bg-gray-200 animate-pulse rounded-full "></div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>


        <section className="mt-8 border-b border-b-gray-200 container mx-auto py-5">
          <div className="*:text-gray-800 flex justify-between px-4 gap-2 items-center">
            <div className="text-3xl h-[36px] w-[200px] md:w-[300px]  bg-gray-200 animate-pulse   font-bold rounded-xl">

            </div>
            <div className="flex gap-4 text-3xl *:bg-blue-200">
              <div className="size-[30px] animate-pulse rounded-full"></div>
              <div className="size-[30px] animate-pulse rounded-full"></div>
            </div>
          </div>
          <div className="w-full  my-5">
            <div className="flex gap-4 overflow-x-hidden scroll-smooth scrollbar-hide">
              {
                Array(20).fill("").map((index) => (
                  <RestaurantCardShimmer key={uuidv4()}/>
                ))
              }
            </div>
          </div>
        </section>

        <section className="mt-8 border-b border-b-gray-200 container mx-auto py-5">
          <div className="*:text-gray-800 flex justify-between gap-2 items-center">
            <div className="text-3xl h-[36px] w-[200px] md:w-[300px]  bg-gray-300 animate-pulse   font-bold rounded-xl">

            </div>
            
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {
                Array(5).fill("").map((index) => (
                    <div key={uuidv4()} className="w-[135px] h-[35px] bg-gray-300 animate-pulse rounded-xl">

                    </div>
                ))
            }
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2 mt-5">
              {
                Array(20).fill("").map((index) => (
                  <RestaurantCardShimmer key={uuidv4()} />
                ))
              }
          </div>
        </section>
    </>
  )
}

export default HomeShimmer