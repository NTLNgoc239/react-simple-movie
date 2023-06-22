import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import PropertyList from "component/property/PropertyList.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useSWR(tmdbAPI.getMovieByType("upcoming"), fetcher);
  const movie = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-10">
      <Swiper className="h-full">
        {movie.length > 0 &&
          movie.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem id={item.id}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = (props) => {
  const getDetail = `https://api.themoviedb.org/3/movie/${props.id}?api_key=bef59305517446c6a8bb7a01450f27c2`;
  const { data } = useSWR(getDetail, fetcher);
  const detail = data || [];
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/movie/${detail.id}`);
  }
  return (
    <div className="w-full h-full rounded-lg bg-white relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={
          detail.poster_path
            ? `https://image.tmdb.org/t/p/original${detail.poster_path}`
            : "https://www.slashfilm.com/img/gallery/avengers-endgame-was-the-final-avengers-movie-according-to-kevin-feige/l-intro-1645116838.jpg"
        }
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className=" text-left text-4xl font-bold tracking-wide mb-5">
          {detail.original_title}
        </h2>
        {detail.genres && (
          <PropertyList property={detail.genres}></PropertyList>
        )}
        <button className="px-6 py-3  bg-primary rounded-lg font-medium" onClick={handleNavigate}>
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
