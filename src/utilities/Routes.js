import { Home } from "../pages/Home/home";
import { List } from "../pages/Products/List";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { SignIn } from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { renderRoutes } from "react-router-config";
import MainLayout from "../pages/Layouts/Main";
import AdminLayout from "../pages/Layouts/Admin";

const root = ({ route }) => <div>{renderRoutes(route.routes)}</div>;

const about = () => (
  <MainLayout>
    <About />
  </MainLayout>
);
const contact = () => (
  <MainLayout>
    <Contact />
  </MainLayout>
);
const signin = () => (
  <AdminLayout>
    <SignIn />
  </AdminLayout>
);
const signup = () => (
  <AdminLayout>
    <SignUp />
  </AdminLayout>
);
const routes = [
  {
    component: root,
    routes: [
      {
        path: "/",
        exact: true,
        component: root,
      },
      {
        path: "/about",
        component: about,
      },
      {
        path: "/contact",
        component: contact,
      },
      {
        path: "/signin",
        component: signin,
      },
      {
        path: "/signup",
        component: signup,
      },
    ],
  },
];

export default routes;
