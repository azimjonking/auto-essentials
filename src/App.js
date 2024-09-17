import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Myaccount from "./pages/myaccount/Myaccount";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Details from "./pages/details/Details";

// components
import Description from "./components/productDesc/Description";
import AddInfo from "./components/productDesc/AddInfo";
import Review from "./components/productDesc/Review";

// import layout
import AppLayout from "./layout/AppLayout";

// import custom hooks
import { useFetch } from "./hooks/useFetch";

function App() {
  const topProductsData = useFetch("http://localhost:3000/topProducts");

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home topProductsData={topProductsData} />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "myaccount",
          element: <Myaccount />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "details",
          element: <Details />,
          children: [
            {
              index: true,
              element: <Description />,
            },
            {
              path: "addinfo",
              element: <AddInfo />,
            },
            {
              path: "reviews",
              element: <Review />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
