import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Payment = () => {
  const { tipAmount, items, restaurant } = useSelector((store) => store.cart);
  console.log(restaurant);
  const [totalItemPrice, setTotalItemPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalItemPrice(
      items.reduce((totalSum : number, currentItem : any) => {
        const itemPrice = currentItem[0]?.defaultPrice
          ? currentItem[0]?.defaultPrice
          : currentItem[0]?.price;
        return Math.floor(totalSum + (itemPrice / 100) * currentItem[1]);
      }, 0)
    );
  }, [items]);

  useEffect(() => {
    const updatedTotalPrice = totalItemPrice + 40 + Number(tipAmount) + 40;
    setTotalPrice(updatedTotalPrice);
  }, [tipAmount, totalItemPrice]);


  // if the cart is empty redirect to the home page
  if (!restaurant) {
    return Navigate({ to: "/" });
  }

  return (
    <>
      <header>
        <nav className="fixed top-0 w-full flex items-center bg-transparent p-4 pointer-events-none">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="object-contain h-3 h-8 w-auto  md:flex"
          />
        </nav>
      </header>

      <div className="flex-1 mt-16 md:flex-initial w-full lg:w-[920px] bg-white py-8 px-4 md:p-8 gap-8 md:rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden mx-auto h-screen my-auto">
        <div className="flex flex-col">
          <div className="flex md:hidden mb-6 items-center">
            <img
              src="/assets/logo.svg"
              alt="logo"
              className="object-contain h-3 md:h-8 w-auto hidden md:flex"
            />
            <h2 className="text-2xl font-bold">{restaurant?.name}</h2>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Details</h2>
          <div className="grid gap-5">
            <div className="grid gap-1">
              <label
                className="text-sm font-medium text-primary"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                className="px-2.5 h-10 rounded-md border border-neutral-300 focus:outline-grey-300 autofill:bg-white"
                placeholder="Enter Name"
                name="name"
                defaultValue=""
              />
            </div>
            <div className="min-h-[64px] w-full">
              <div className="grid gap-1">
                <label
                  className="text-sm font-medium text-primary"
                  htmlFor="phone"
                >
                  Phone (WhatsApp enabled to access later)
                </label>
                <input
                  autoComplete="tel"
                  className="px-2.5 h-10 rounded-md border border-neutral-300 focus:outline-grey-300 autofill:bg-white"
                  id="phone"
                  placeholder="Enter Phone"
                  type="tel"
                  name="phone"
                />
              </div>
            </div>
            <div className="min-h-[64px] w-full">
              <div className="grid gap-1">
                <label
                  className="text-sm font-medium text-primary"
                  htmlFor="address"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  rows={5}
                  className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Flat No. 302, XYZ Apartment Main Street, Ashok Nagar South Delhi District
110021 New Delhi"
                ></textarea>
              </div>
            </div>
            <div className="relative">
              <div className="grid gap-1">
                <label
                  className="text-sm font-medium text-primary"
                  htmlFor="couponCode"
                >
                  Coupon Code
                </label>
                <input
                  id="couponCode"
                  className="px-2.5 h-10 rounded-md border border-neutral-300 focus:outline-grey-300 autofill:bg-white pr-16"
                  placeholder="Enter Coupon Code"
                  name="couponCode"
                />
              </div>
              <button className="absolute font-medium text-sm text-[#202020] z-10 right-2 top-[34px] disabled:opacity-50 transition-opacity">
                Apply
              </button>
            </div>
            <div className="relative border-t pt-4">
              <div className="grid gap-1">
                <label
                  className="text-sm font-medium text-primary"
                  htmlFor="upiID"
                >
                  Your UPI ID
                </label>
                <input
                  id="upiID"
                  className="px-2.5 pl-[52px] h-10 rounded-md border border-neutral-300 focus:outline-grey-300 autofill:bg-white pr-16"
                  placeholder="Enter the UPI ID"
                  name="upiID"
                />
              </div>
              <img
                width={40}
                className="absolute font-medium text-sm text-[#202020] z-10 left-2 top-[50px] disabled:opacity-50 transition-opacity"
                src="assets/upi-ar21.svg"
                alt="upi"
              />
              <button className="absolute font-medium text-sm text-[#202020] z-10 right-2 top-[50px] disabled:opacity-50 transition-opacity">
                Verify
              </button>
            </div>
            <div className="flex flex-col">
              <button className="mt-auto w-full h-12 bg-black-600 flex justify-center items-center rounded-md border-none outline-none font-bold text-white bg-primary">
                Pay {totalPrice}
              </button>
            </div>
          </div>
        </div>
        <div className="fixed bg-white top-0 left-0 w-screen h-full overflow-auto min-h-screen py-8 px-4 flex-col mb-28 pb-24 md:mb-0 md:static md:w-full md:min-h-fit md:p-0 z-20 hidden md:flex">
          <div className="flex items-center mb-6 md:mb-3">
            <img
              alt="The Freelance Freedom"
              src="https://d3o9zigtf206n3.cloudfront.net/onboarding-files/650ac2ccab13ae0be4b1f248/app-logo/Soch logo round.png"
              className="md:hidden shrink-0 rounded-md h-4 w-auto object-contain mr-4"
            />
            <h2 className="text-lg md:text-2xl font-bold">
              {restaurant?.name}
            </h2>
          </div>
          <div>
            <div className="prose prose-neutral  overflow-hidden mb-2 font-medium whitespace-break-spaces">
              <p className="text-base text-gray-500 font-light">
                {restaurant?.areaName}
              </p>
              <p className="text-sm text-gray-500 font-light">
                {items.length} items
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-video">
            <img
              alt={`${restaurant?.name} logo`}
              loading="lazy"
              decoding="async"
              className="rounded-md object-cover"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: "0",
                top: "0",
                right: "0",
                bottom: "0",
                color: "transparent",
              }}
              sizes="100vw"
              src={restaurant?.imgUrl}
            />
          </div>

          <footer className="fixed md:hidden w-full left-0 bottom-0 py-5 px-4 bg-gray-50 flex justify-center items-center">
            <button className="w-full h-12 bg-black-600 rounded-md border-none outline-none font-bold text-white hover:bg-primary">
              Continue
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Payment;
