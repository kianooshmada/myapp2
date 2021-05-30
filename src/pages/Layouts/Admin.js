import React from "react";
import { Route } from "react-router-dom";

const Admin = ({ component: Component, ...rest }) => {
  return (
    <div>
      <header>admin header....</header>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </div>
  );
};

export default Admin;
