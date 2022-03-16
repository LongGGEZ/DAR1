import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";

import Grid from "@mui/material/Grid";

function Trending({ title, posterMovieUrl }) {
  useEffect(() => {
    document.title = title;
  });
  const [movies, setMovies] = useState([]);
  //fetch trending movie
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

  return (
    <div>
      <div className="title">
        <h1>Phim thịnh hành</h1>
      </div>
      <div className="movie">
        <Grid container>
          {movies.map((movie) => (
            <Grid item xs={2} key={movie.id}>
              <MovieCard
                title={movie.original_title}
                image={`${posterMovieUrl}${movie.poster_path}`}
                release_date={movie.release_date}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
export default Trending;
