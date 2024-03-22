import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <section className="flex container mx-auto mt-20 justify-center items-center flex-col">
      <img  src={'assets/emptycart.avif'} className="max-w-[430px] w-full" />
      <h1 className="text-xl mt-4 font-semibold text-gray-700">Your cart is empty</h1>
      <p className="text-base font-light text-gray-500">You can go to home page to view more restaurants</p>
      <Link to="/" className="bg-[#d74112] hover:bg-orange-700 transition-all delay-100 mt-4 text-white p-2 px-4 rounded-lg">
        <button>SEE RESTAURANTS NEAR YOU</button>
      </Link>
    </section> 
  )
}

export default Cart