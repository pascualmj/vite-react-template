import { lazy, ExoticComponent } from "react";
import { IRoute } from "app-types/routing";

import * as routesConstants from "../constants/routes";

const Home = lazy(() => import("../../pages/home/Home"));

export const publicRoutes: IRoute<ExoticComponent>[] = [
  {
    name: routesConstants.ROUTE_HOME,
    path: routesConstants.APP_PATHS.Home,
    component: Home,
    exact: true,
  },
];
