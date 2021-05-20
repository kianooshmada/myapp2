import { List } from "../pages/Products/List";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
const routes = [
  {
    text: "Home",
    path: "/",
    component: "",
  },
  {
    text: "Products List",
    path: "/productsList",
    component: List,
  },
  {
    text: "About",
    path: "/about",
    component: About,
  },
  {
    text: "Contact",
    path: "/contact",
    component: Contact,
  },
  {
    text: "Sign In",
    path: "/signin",
    component: SignIn,
  },
  {
    text: "Sign Up",
    path: "/signup",
    component: SignUp,
  },
];

export { routes };
