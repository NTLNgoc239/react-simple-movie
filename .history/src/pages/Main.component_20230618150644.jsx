import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "swiper";

const Main = () => {
  return (
    <Fragment>
      <Navigation></Navigation>
      <Outlet />
    </Fragment>
  );
};

export default Main;
