import {
  Author,
  Dashboard,
  Error,
  Home,
  Join,
  Login,
  Notification,
  Novel,
  User,
} from "../pages";

export const AppRoutes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/author/:id",
    component: Author,
  },
  {
    // exact: true,
    path: "/novel/:id",
    component: Novel,
  },
  {
    exact: true,
    path: "/user/:username",
    component: User,
  },
  {
    exact: true,
    path: "/join",
    component: Join,
  },
  {
    exact: true,
    path: "/login",
    component: Login,
  },
  {
    exact: true,
    path: "/notifications",
    component: Notification,
    private: true,
  },
  {
    exact: true,
    path: "/dashboard",
    component: Dashboard,
    private: true,
  },
];
