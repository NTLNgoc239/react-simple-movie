import React, { Fragment } from 'react';
import Banner from "../component/banner/Banner.component";
import Movie from "./Movie.component"
const Home = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <Movie></Movie>
    </Fragment>
  );
};

export default Home;