import { Suspense, lazy } from "react"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./_root/pages/Home";
import store from "./lib/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { Toaster } from "./lib/shadcn/components/ui/toaster";
import Payment from "./_root/pages/Payment";



const Signin = lazy(() => import("./_auth/forms/Signin"));
const Signup = lazy(() => import("./_auth/forms/Signup"));
const Offers = lazy(() => import("./_root/pages/Offers"));
const Support = lazy(() => import("./_root/pages/Support"));
const Cart = lazy(() => import("./_root/pages/Cart"));
const Restaurant = lazy(() => import("./_root/pages/Restaurant"));
const Search = lazy(() => import("./_root/pages/Search"));
const RestaurantCollections = lazy(() => import("./_root/pages/RestaurantCollections"));
const RestaurantMenu = lazy(() => import("./_root/pages/RestaurantMenu"));

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <Suspense ><Signin /></Suspense>
      },
      {
        path: "/sign-up",
        element: <Suspense ><Signup /></Suspense>
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
        element: <Suspense><Restaurant /></Suspense>
      },
      {
        path: "/collections/:collectionId",
        element: <Suspense><RestaurantCollections /></Suspense>
      },
      {
        path: "/restaurant/:restaurantID",
        element: <Suspense><RestaurantMenu /></Suspense>
      },
      {
        path: "/offers-near-me",
        element: <Suspense><Offers /></Suspense>
      },
      {
        path: "/support",
        element: <Suspense><Support /></Suspense>
      },
      {
        path: "/checkout",
        element: <Suspense><Cart /></Suspense>
      },
      {
        path: "/search",
        element: <Suspense><Search /></Suspense>
      },
    ]
  },
  {
    element: <Payment />,
    path: "/payments"
  }
])

const App = () => {
  return (
    <main>
      <ReduxProvider store={store} >
        <RouterProvider router={router}>
        </RouterProvider>
      </ReduxProvider >
      <Toaster />
    </main>
  )
}

export default App