import React from 'react';

const MovieCard = (props) => {
  const { poster_path, title, release_date, vote_average } = props
  return (
    <div className="movie-card flex flex-col justify-between rounded-2xl p-3 border-solid border-white border-[1px] text-white bg-slate-800 h-full select-none">
      <img src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/12/20/nguoinhen-1639982903115922037303.jpeg"} alt="" className="object-cover rounded-2xl w-full h-[250px]" />
      <div className='flex flex-col flex-1'>
        <h3 className="font-bold text-md my-3">{title}</h3>
        <div className="flex flex-row justify-between items-center text-sm mb-5 opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <div className="flex flex-row justify-between items-center">
            <span>{vote_average}</span>
            <span>*</span>
          </div>
        </div>
        <button className="px-6 py-3  bg-primary rounded-lg font-medium mt-auto">Watch Now</button>
      </div>
    </div>
  );
};

export default MovieCard;