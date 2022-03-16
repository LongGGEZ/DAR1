import axios from "axios";
import { useState, useEffect } from "react";

function CallMovieAPI() {
  const [movies, setMovies] = useState([]);
  const posterMovieUrl = "https://image.tmdb.org/t/p/w500";
  //fetch movie
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=b4537afeaad3af17fa8676533391f855`
        );
        setMovies(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, []);
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <div>{movie.original_title}</div>
          <img src={`${posterMovieUrl}${movie.poster_path}`} alt="Poster" />
          <div>{movie.release_date}</div>
        </div>
      ))}
    </div>
  );
}
export default CallMovieAPI;
