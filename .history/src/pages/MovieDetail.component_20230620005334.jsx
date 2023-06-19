import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
const MovieDetail = () => {
  const { movieId } = useParams();
  const { data } = useSWR(getDetail, fetcher);
  useEffect(() => {
    if (movieId) {
      const getDetail = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=bef59305517446c6a8bb7a01450f27c2`;
    }
  }, [movieId]);
  console.log(movieId);
  return <div>Movie Detail Page</div>;
};

export default MovieDetail;
