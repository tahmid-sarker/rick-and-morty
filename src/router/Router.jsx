import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Cast from "../pages/Cast";
import CastDetails from "../pages/CastDetails";
import Error from "../pages/Error";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export const Router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/cast",
      Component: Cast,
    },
    {
      path: "/cast-details/:id",
      Component: CastDetails,
    },
    {
      path: "*",
      Component: Error,
    },
  ],
  { basename }
);
