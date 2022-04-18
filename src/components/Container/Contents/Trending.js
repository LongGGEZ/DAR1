import { useState, useEffect } from "react";
import apiMovie from "../../../api/axios";
import requests from "../../../FecthDataMovie/FecthDataAll";
import MovieCard from "../../MovieCard/MovieCard";
import Grid from "@mui/material/Grid";
import "../../Container/Container.css";

function Trending({ title, posterMovieUrl }) {
  useEffect(() => {
    document.title = title;
  });
  const [movies, setMovies] = useState([]);
  //fetch trending movie
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(requests.fetchTrendingMovies);
        setMovies(data && data.results);
        console.log(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <div className="main-content">
      <div>
        <div className="title">
          <h1>Phim thịnh hành</h1>
        </div>
        <div className="movie">
          <Grid container>
            {movies.map((movie) => (
              <Grid item width={"20%"} key={movie.id}>
                <MovieCard
                  movie_id={movie.id}
                  title={movie.title}
                  original_name={movie.original_name}
                  first_air_date={movie.first_air_date}
                  poster={`${posterMovieUrl}${movie.poster_path}`}
                  release_date={movie.release_date}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
export default Trending;
