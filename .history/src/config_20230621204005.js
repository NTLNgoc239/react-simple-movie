export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "bef59305517446c6a8bb7a01450f27c2";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieByType: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
};
