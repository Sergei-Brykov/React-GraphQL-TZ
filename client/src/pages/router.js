import { LoginPage } from "./Login";
import { RegistrationPage } from "./Registration";
import { path } from "../provider/path";
import { HomePage } from "./Home";

export const routes = [
  {
    path: path.login,
    exact: true,
    component: LoginPage,
  },
  {
    path: path.registration,
    exact: true,
    component: RegistrationPage,
  },
  {
    path: path.home,
    exact: true,
    component: HomePage,
  },
];
