import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import ReactDOM from "react-dom/client"
import "react-multi-carousel/lib/styles.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"
import DetailItemAlcohol from "./pages/DetailItemAlcohol"
import DetailItemSoap from "./pages/DetailItemSoap"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/item/alcohol/:id",
    element: <DetailItemAlcohol />,
  },
  {
    path: "/item/soap/:id",
    element: <DetailItemSoap />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>,
)
