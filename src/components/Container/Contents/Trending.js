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
        // console.log(data);
        // console.log(data && data.results);
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
          <Grid container columns={{ xs: 4.8, sm: 9.6, md: 12 }}>
            {movies.map((movie) => (
              <Grid item xs={2.4} key={movie.id}>
                <MovieCard
                  movie_id={movie.id}
                  media_type={movie.media_type}
                  title={movie.title}
                  original_name={movie.original_name}
                  first_air_date={movie.first_air_date}
                  poster={movie.poster_path?`${posterMovieUrl}${movie.poster_path}`:""}
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
