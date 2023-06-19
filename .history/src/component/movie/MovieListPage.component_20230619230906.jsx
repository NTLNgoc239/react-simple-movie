import React, { Fragment, useEffect, useState } from "react";
import MovieCard from "./MovieCard.component";
import useSWR from "swr";
import { fetcher } from "../../config";

const MovieListPage = () => {
  const getListFilm = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=bef59305517446c6a8bb7a01450f27c2`;
  const [url, setUrl] = useState(getListFilm);
  const [searchKey, setSearchKey] = useState("");
  const { data } = useSWR(url, fetcher);
  const movies = data?.results || [];
  const handleOnChangeInput = (e) => {
    setSearchKey(e.target.value);
  };
  useEffect(() => {
    if (!searchKey) {
      const getSearchFilm = `https://api.themoviedb.org/3/search/movie?query=${searchKey}&include_adult=false&language=en-US&page=1&api_key=bef59305517446c6a8bb7a01450f27c2`;
      setUrl(getSearchFilm);
    }
  }, [searchKey]);
  return (
    <Fragment>
      <div className="flex flex-row items-center justify-center mb-5 w-full">
        <input
          type="text"
          className="p-3 rounded w-6/12 mr-2 outline-none border hover:border border-pink-500"
          value={searchKey}
          onChange={handleOnChangeInput}
          placeholder="Type here to search"
        ></input>
      </div>
      <div className="movie-list grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => <MovieCard {...item}></MovieCard>)}
      </div>
    </Fragment>
  );
};

export default MovieListPage;
