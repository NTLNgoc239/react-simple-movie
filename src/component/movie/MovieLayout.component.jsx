import React from 'react';
import MovieList from './MovieList.component';

const MovieLayout = (props) => {
  const TYPE_OF_MOVIE = {
    'now_playing': 'Now Playing',
    'popular': 'Popular',
    'top_rated': 'Top Rated',
  }
  return (
    <section className="movies-layout page-container pb-10 mb-5">
      <h2 className="text-white text-2xl font-bold capitalize mb-5">
        {TYPE_OF_MOVIE[props.type]}
      </h2>
      <MovieList {...props}></MovieList>
    </section>
  );
};

export default MovieLayout;