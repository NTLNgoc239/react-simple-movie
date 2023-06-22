import React, { Fragment, useEffect, useState } from "react";
import MovieCard from "component/movie/MovieCard.component";
import useSWRInifite from "swr/infinite";
import { fetcher, apiKey } from "../../config";
import useDebounce from "hooks/useDebounce";

const MovieListPage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?page=${nextPage}&api_key=${apiKey}`
  );
  const [searchKey, setSearchKey] = useState("");
  const searchKeyDebounce = useDebounce(searchKey, 500);
  const { data, error, size, setSize, isLoading } = useSWRInifite(
    (index) => url.replace("page=1", `page=${index + 2}`),
    fetcher
  );
  const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
  const loading = !data && !error;
  const handleOnChangeInput = (e) => {
    setSearchKey(e.target.value);
  };
  const itemsPerPage = 20;
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);
  useEffect(() => {
    if (searchKeyDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?query=${searchKeyDebounce}&page=${nextPage}&api_key=${apiKey}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/discover/movie?page=${nextPage}&api_key=${apiKey}`
      );
    }
  }, [searchKeyDebounce, nextPage]);
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
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )}
      <span className="movie-list grid grid-cols-4 gap-10 mb-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => <MovieCard {...item} key={item.id}></MovieCard>)}
      </span>
      <button
        className={`px-6 py-3  text-white rounded-lg text-center block mb-4 mx-auto ${isReachingEnd ? "bg-gray-600" : "bg-primary"}`}
        onClick={() => isReachingEnd ? {} : setSize(size + 1)}
        disabled={isReachingEnd}
      >
        {isLoadingMore
          ? "Loading..."
          : isReachingEnd
            ? "No More Movies"
            : "Load More"}
      </button>
    </Fragment>
  );
};

export default MovieListPage;
