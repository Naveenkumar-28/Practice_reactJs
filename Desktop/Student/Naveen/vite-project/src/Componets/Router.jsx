import { createBrowserRouter } from "react-router-dom";
import { FormLogin } from "./FormLogin";
import { FormRegister } from "./FormRegister";
import HomePage from "./HomePage/HomePage";

export const Router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/login", Component: FormLogin },
  { path: "/register", Component: FormRegister },
]);
