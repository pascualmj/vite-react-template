import { FC, ExoticComponent } from "react";
import { Route } from "react-router-dom";
import { IRoute } from "app-types/routing";

import { PrivateRoute } from "./PrivateRoute";

interface IAppRouteProps extends IRoute<ExoticComponent> {}

export const AppRoute: FC<IAppRouteProps> = ({
  auth: isPrivateRoute,
  ...routeProps
}) => {
  const RouteComponent = isPrivateRoute ? PrivateRoute : Route;

  return <RouteComponent {...routeProps} />;
};
