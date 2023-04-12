import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import InfoCard from "./Page/CardInfo/InfoCard";
import Home from "./Page/home/Home";
import { useState } from "react";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Barbados",
        element: <InfoCard />,
      },
    ],
  },
]);

export default router;
