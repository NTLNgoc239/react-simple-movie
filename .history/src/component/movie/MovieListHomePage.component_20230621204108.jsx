import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import MovieCard from "./MovieCard.component";
import { useState } from "react";
import { useEffect } from "react";

const MovieListHomePage = (props) => {
  const [movieListData, setMovieListData] = useState([]);
  // const api = `https://api.themoviedb.org/3/movie/${props.type}?api_key=bef59305517446c6a8bb7a01450f27c2`;
  const { data } = useSWR(tmdbAPI.getMovieByType(props.type), fetcher);
  useEffect(() => {
    if (data) {
      setMovieListData(data.results);
    }
  }, [data]);
  return (
    <Swiper
      className="movie-list grid grid-cols-4 gap-10"
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      grabCursor={true}
      spaceBetween={40}
    >
      {movieListData &&
        movieListData.map((item, idx) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <MovieCard {...item}></MovieCard>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MovieListHomePage;
