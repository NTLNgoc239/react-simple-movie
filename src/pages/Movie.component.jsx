import React, { Fragment } from 'react';
import MovieLayout from "../component/movie/MovieLayout.component";

const Movie = () => {
  return (
    <Fragment>
      <MovieLayout type="now_playing"></MovieLayout>
      <MovieLayout type="popular"></MovieLayout>
      <MovieLayout type="top_rated"></MovieLayout>
    </Fragment>
  );
};

export default Movie;