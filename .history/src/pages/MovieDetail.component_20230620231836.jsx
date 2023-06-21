import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, apiKey } from "../config";
import PropertyList from "../component/property/PropertyList.component";
import MovieCard from "../component/movie/MovieCard.component";
import { SwiperSlide, Swiper } from "swiper/react";
const MovieDetail = () => {
  const { movieId } = useParams();
  const getDetail = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=bef59305517446c6a8bb7a01450f27c2`;
  const { data } = useSWR(getDetail, fetcher);
  if (!data) return;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <>
      {data ? (
        <>
          <div className="w-full h-[600px] relative">
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div
              className="w-full h-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
              }}
            ></div>
          </div>
          <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 mb-8">
            <img
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="w-full title text-white text-6xl text-center mb-5">
            {title}
          </h1>
          <PropertyList property={genres}></PropertyList>
          <p className="w-full max-w-[800px] text-white text-center mx-auto leading-relaxed mb-10">
            {overview}
          </p>
          <MovieCredits></MovieCredits>
          <MovieVideo></MovieVideo>
          <MovieSimilar></MovieSimilar>
        </>
      ) : (
        "...is Loading..."
      )}
      ;
    </>
  );
};

const MovieCredits = () => {
  // https://api.themoviedb.org/3/movie/1010581/credits?language=en-US
  const { movieId } = useParams();
  const getCredits = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${apiKey}`;
  const { data } = useSWR(getCredits, fetcher);
  if (!data) return;
  const { cast } = data;
  return (
    <div className="py-10">
      <h1 className="text-white text-center text-4xl mb-10 font-bold">Casts</h1>
      <div className="cast-list grid grid-cols-4 gap-10">
        {cast.slice(0, 4).map((item) => (
          <div
            className="flex flex-col items-center justify-between h-[350px] mb-3"
            key={item.id}
          >
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                  : "https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png"
              }
              alt=""
              className="rounded-xl w-full h-full object-cover"
            />
            <h3 className="text-white text-md font-bold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieVideo = () => {
  //
  const { movieId } = useParams();
  const getCredits = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=${apiKey}`;
  const { data } = useSWR(getCredits, fetcher);
  if (!data) return;
  const { results } = data;
  return (
    <div className="py-10">
      <h3 className="text-white text-xl font-bold p-4 bg-pink-500 w-auto inline-block mb-5">
        Special Feature Preview
      </h3>
      <div className="flex flex-col gap-10 justify-start">
        {results.slice(0, 3).map((item) => (
          <div
            className="movie-video w-full m-0 p-0 overflow-hidden"
            key={item.id}
          >
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${item.key}`}
              title={item.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieSimilar = () => {
  const { movieId } = useParams();
  const getCredits = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&api_key=${apiKey}`;
  const { data } = useSWR(getCredits, fetcher);
  if (!data) return;
  const { results } = data;
  return (
    <div className="py-10 text-white  mb-3">
      <h2 className="text-white text-xl font-bold p-4 bg-pink-500 w-auto inline-block mb-10">
        Similar Movie
      </h2>
      <div className="movie-list pb-3">
        <Swiper
          className="grid grid-cols-4 gap-10"
          slidesPerView={4}
          navigation
          grabCursor={true}
          spaceBetween={40}
        >
          {results &&
            results.map((item, idx) => (
              <SwiperSlide key={item.id} className="swiper-slide mb-3">
                <MovieCard {...item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieDetail;
