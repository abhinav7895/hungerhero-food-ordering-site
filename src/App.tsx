import { Suspense, lazy } from "react"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./_root/pages/Home";
import store from "./lib/redux/store";
import { Provider as ReduxProvider } from "react-redux";

const Signin = lazy(() => import("./_auth/forms/Signin"));
const Signup = lazy(() => import("./_auth/forms/Signup"));
const Offers = lazy(() => import("./_root/pages/Offers"));
const Support = lazy(() => import("./_root/pages/Support"));
const Cart = lazy(() => import("./_root/pages/Cart"));
const Restaurant = lazy(() => import("./_root/pages/Restaurant"));
const Search = lazy(() => import("./_root/pages/Search"));
const  RestaurantCollections = lazy(() => import("./_root/pages/RestaurantCollections"));
const  RestaurantMenu = lazy(() => import("./_root/pages/RestaurantMenu"));

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <Suspense fallback="Loading..."><Signin /></Suspense>
      },
      {
        path: "/sign-up",
        element: <Suspense fallback="Loading..."><Signup /></Suspense>
      }
    ]
  },
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/restaurants/:resId",
        element: <Suspense fallback="Loading Restaurant"><Restaurant /></Suspense>
      },
      {
        path: "/collections/:collectionId",
        element: <Suspense fallback="Loading Restaurant"><RestaurantCollections /></Suspense>
      },
      {
        path: "/restaurant/:restaurantID",
        element: <Suspense fallback="Loading Restaurant"><RestaurantMenu /></Suspense>
      },
      {
        path: "/offers-near-me",
        element: <Suspense fallback="Loading Offers"><Offers /></Suspense>
      },
      {
        path: "/support",
        element: <Suspense fallback="Loading Support Page"><Support /></Suspense>
      },
      {
        path: "/checkout",
        element: <Suspense fallback="Loading Cart Page"><Cart /></Suspense>
      },
      {
        path: "/search",
        element: <Suspense fallback="Loading Search Page"><Search /></Suspense>
      },

    ]
  }
])

const App = () => {
  return (
    <main>
      <ReduxProvider store={store} >
        <RouterProvider router={router}>
        </RouterProvider>
      </ReduxProvider >
    </main>
  )
}

export default App