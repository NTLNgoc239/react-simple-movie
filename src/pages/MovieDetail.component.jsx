import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
const MovieDetail = () => {
  const { movieId } = useParams();
  const getDetail = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=bef59305517446c6a8bb7a01450f27c2`;
  const { data } = useSWR(getDetail, fetcher);
  console.log(movieId);
  console.log(data);
  return <div>Movie Detail Page</div>;
};

export default MovieDetail;
