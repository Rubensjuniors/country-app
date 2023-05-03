import { createBrowserRouter } from "react-router-dom";
import App from "./layouts/App";
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
    ],
  },
]);

export default router;
