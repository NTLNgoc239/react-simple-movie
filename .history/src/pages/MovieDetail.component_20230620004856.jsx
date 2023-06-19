import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config";
const MovieDetail = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return <div>Movie Detail Page</div>;
};

export default MovieDetail;
