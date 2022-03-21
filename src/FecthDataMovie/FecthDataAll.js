import { APIKey } from "../api/apikey";
const requests = {
  fetchTrendingMovies: `/trending/all/day?api_key=${APIKey}`,
  fetchTopRateMovies: `/movie/top_rated?api_key=${APIKey}&language=en-US&page=1`,
  fetchNewMovies: `/movie/upcoming?api_key=${APIKey}&language=en-US&page=1`,

  fetchActionMovies: `/discover/movie/?api_key=${APIKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie/?api_key=${APIKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie/?api_key=${APIKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKey}&with_genres=99`,

  fecthGenreMovie: `/genre/movie/list?api_key=${APIKey}&language=en-US`,
};
export default requests;
