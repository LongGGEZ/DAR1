import { APIKey } from "../api/apikey";
const requests = {
  fetchTrendingMovies: `/trending/all/day?api_key=${APIKey}&language=vi`,
  fetchTopRateMovies: `/movie/top_rated?api_key=${APIKey}&language=vi&page=1`,
  fetchNewMovies: `/movie/upcoming?api_key=${APIKey}&language=vi&page=1`,

  fetchActionMovies: `/discover/movie/?api_key=${APIKey}&with_genres=28&language=vi`,
  fetchAnimationMovies: `/discover/movie/?api_key=${APIKey}&with_genres=16&language=vi`,
  fetchComedyMovies: `/discover/movie/?api_key=${APIKey}&with_genres=35&language=vi`,
  fetchHorrorMovies: `/discover/movie/?api_key=${APIKey}&with_genres=27&language=vi`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKey}&with_genres=10749&language=vi`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKey}&with_genres=99&language=vi`,

  fecthGenreMovie: `/genre/movie/list?api_key=${APIKey}&language=vi`,
};
export default requests;
