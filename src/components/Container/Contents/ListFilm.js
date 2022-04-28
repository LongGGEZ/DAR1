import { useEffect, useState } from "react";
import apiMovie from "../../../api/axios";
import MovieCard from "../../MovieCard/MovieCard";
import Grid from "@mui/material/Grid";

function ListFilm({ title, fetchData, posterMovieUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(fetchData);
        setMovies(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className="list-film">
        <div className="title">
          <h1>{title}</h1>
          <div className="center">
            <span className="show-all">Xem tất cả</span>
          </div>
        </div>
        <div className="movie-flex">
          <Grid container columns={{ xs: 4, sm: 6, md: 12 }}>
            {movies.slice(0, 6).map((movie) => (
              <Grid item xs={2} key={movie.id}>
                <MovieCard
                  posterMovieUrl={posterMovieUrl}
                  movie_id={movie.id}
                  title={movie.title}
                  poster={movie.poster_path}
                  release_date={movie.release_date}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}
export default ListFilm;
