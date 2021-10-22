import { FC, ExoticComponent } from "react";
import { Route, Redirect } from "react-router-dom";
import { IRoute } from "app-types/routing";

import { useAuth } from "../../hooks";
import { APP_PATHS } from "../constants/routes";

interface IPrivateRouteProps extends IRoute<ExoticComponent> {}

export const PrivateRoute: FC<IPrivateRouteProps> = (props) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Redirect to={APP_PATHS.Home} />;

  return <Route {...props} />;
};
