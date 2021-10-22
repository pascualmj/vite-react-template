import { lazy, ExoticComponent } from 'react';
import { IRoute } from 'app-types/routing';

import * as routesConstants from '../constants/routes';

const Profile = lazy(() => import('../../pages/profile/Profile'));

export const privateRoutes: IRoute<ExoticComponent>[] = [
  {
    name: routesConstants.ROUTE_PROFILE,
    path: routesConstants.APP_PATHS.Profile,
    component: Profile,
    exact: true,
    auth: true
  }
];
