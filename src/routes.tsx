import { createBrowserRouter } from "react-router-dom";
import App from "./layouts/App";
import Home from "./Page/home/Home";
import InfoCard from "./Page/CardInfo/InfoCard";
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
        path: `/Pakistan`,
        element: <InfoCard />,
      },
    ],
  },
]);

export default router;
