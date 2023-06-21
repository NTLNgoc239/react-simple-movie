import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button.component";

const MovieCard = (props) => {
  const { poster_path, title, release_date, vote_average, id } = props;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <div className="movie-card flex flex-col justify-between rounded-2xl p-3 border-solid border-white border-[1px] text-white bg-slate-800 h-full select-none">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/12/20/nguoinhen-1639982903115922037303.jpeg"
        }
        alt=""
        className="object-cover rounded-2xl w-full h-[250px]"
      />
      <div className="flex flex-col flex-1">
        <h3 className="font-bold text-md my-3">{title}</h3>
        <div className="flex flex-row justify-between items-center text-sm mb-5 opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <div className="flex flex-row justify-between items-center">
            <span>{vote_average}</span>
            <span>*</span>
          </div>
        </div>
        <Button handleNavigate={handleNavigate}></Button>
      </div>
    </div>
  );
};

export default MovieCard;
