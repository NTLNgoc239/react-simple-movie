import React, { Fragment, useEffect, useState } from "react";
import MovieCard from "component/movie/MovieCard.component";
import useSWR from "swr";
import { fetcher, apiKey } from "../../config";
import useDebounce from "hooks/useDebounce";
import ReactPaginate from "react-paginate";

const MovieListPage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/discover/movie?page=${nextPage}&api_key=${apiKey}`
  );
  const [searchKey, setSearchKey] = useState("");
  const searchKeyDebounce = useDebounce(searchKey, 500);
  const { data, error } = useSWR(url, fetcher);
  const [itemOffset, setItemOffset] = useState(0);
  const movies = data?.results || [];
  const loading = !data && !error;
  const total_pages = data?.total_pages || 0;
  const pageNumber = [...Array(total_pages).keys()];
  const handleOnChangeInput = (e) => {
    setSearchKey(e.target.value);
  };
  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const pageCount = Math.ceil(pageNumber.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % pageNumber.length;
    console.log(
      `User requested page number ${event.selected + 1
      }, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
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

      <div className="flex justify-center items-center text-white">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          activeClassName="text-pink-500"
          disabledClassName="text-opacity-0"
          className="pagination flex justify-center items-center gap-x-5 mb-5"
        />
      </div>
    </Fragment>
  );
};

export default MovieListPage;
