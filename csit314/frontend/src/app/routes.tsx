import { createBrowserRouter } from "react-router";

import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { RegisterPage } from "./pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },

  {
    path: "/register",
    Component: RegisterPage,
  },

  {
    path: "/dashboard",
    Component: DashboardPage,
  },
]);