import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../component/navigation/Navigation.component";

const Main = () => {
  return (
    <Fragment>
      <Navigation></Navigation>
      <Outlet />
    </Fragment>
  );
};

export default Main;
