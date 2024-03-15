
import RestaurantCardShimmer from './RestaurantCardShimmer'

const CollectionsShimmer = () => {
    return (
        <section className="container mt-8">
            <div className=" bg-gray-200 animate-pulse h-[40px] w-[100px] my-3 rounded-lg"></div>
            <div className=" bg-gray-200 animate-pulse h-[24px] w-[200px] md:w-[350px] my-3 rounded-lg"></div>
            <div className=" my-7 bg-gray-200 animate-pulse h-[32px] w-[140px]  rounded-lg"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-2">
                {
                    Array(10).fill("").map(() => (
                        <RestaurantCardShimmer />
                    ))
                }
            </div>
        </section>
    )
}

export default CollectionsShimmer