import { Home } from "../pages/Home/home";
import { List } from "../pages/Products/List";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/productsList",
    component: List,
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];

export { routes };
