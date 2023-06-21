export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "bef59305517446c6a8bb7a01450f27c2";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieByType: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetail: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieCasts: (movieId) =>
    `${tmdbEndpoint}/${movieId}/credits?api_key=${apiKey}`,
  getMovieVideo: (movieId) =>
    `${tmdbEndpoint}/${movieId}/videos?api_key=${apiKey}`,
};
