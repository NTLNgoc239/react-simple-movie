import React, { Fragment } from 'react';
import MovieLayout from "../component/movie/MovieLayout.component";
import MovieListPage from '../component/movie/MovieListPage.component';
import Search from "../component/searchBar/Search.component"

const Movie = () => {
  return (
    <Fragment>
      {/* <Search></Search> */}
      <MovieListPage></MovieListPage>
    </Fragment>
  );
};

export default Movie;