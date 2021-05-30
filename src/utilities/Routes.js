import { Home } from "../pages/Home/home";
import { List } from "../pages/Products/List";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { renderRoutes } from "react-router-config";
// const routes = [
//   {
//     path: "/home",
//     component: Home,
//   },
//   {
//     path: "/about",
//     component: About,
//   },
//   {
//     path: "/contact",
//     component: Contact,
//   },
//   {
//     path: "/productsList",
//     component: List,
//   },
//   {
//     path: "/signin",
//     component: SignIn,
//   },
//   {
//     path: "/signup",
//     component: SignUp,
//   },
// ];

const Root = ({ route }) => <div>{renderRoutes(route.routes)}</div>;
const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
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
        path: "/signin",
        component: SignIn,
      },
      {
        path: "/signup",
        component: SignUp,
      },
      // {
      //   path: "/child/:id",
      //   component: Child,
      //   routes: [
      //     {
      //       path: "/child/:id/grand-child",
      //       component: GrandChild,
      //     },
      //   ],
      // },
    ],
  },
];

export default routes;
