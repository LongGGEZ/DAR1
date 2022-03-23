import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import apiMovie from "../../../api/axios";
import requests from "../../../FecthDataMovie/FecthDataAll";
import MovieCard from "../../MovieCard/MovieCard";
import "../../Container/Container.css";

function News({ title, posterMovieUrl }) {
  useEffect(() => {
    document.title = title;
  });
  //fecth new movie
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(requests.fetchNewMovies);
        setMovies(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, []);

  return (
    <div className="main-content">
      <div className="title">
        <h1>Phim mới</h1>
      </div>
      <div className="movie">
        <Grid container>
          {movies.map((movie) => (
            <Grid item xs={2} key={movie.id}>
              <MovieCard
                movie_id={movie.id}
                title={movie.original_title}
                image={`${posterMovieUrl+movie.poster_path}`}
                release_date={movie.release_date}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
export default News;
