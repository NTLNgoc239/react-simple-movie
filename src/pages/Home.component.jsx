import React, { Fragment } from 'react';
import Banner from "../component/banner/Banner.component";
import MovieLayout from "../component/movie/MovieLayout.component"
const Home = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <MovieLayout type="now_playing"></MovieLayout>
      <MovieLayout type="popular"></MovieLayout>
      <MovieLayout type="top_rated"></MovieLayout>s
    </Fragment>
  );
};

export default Home;