import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { APIKey } from "../../../api/apikey";
import apiMovie from "../../../api/axios";
import MovieCard from "../../MovieCard/MovieCard";
import Grid from "@mui/material/Grid";
function ListFilm({ title, genre_id, posterMovieUrl }) {
  // const { genre_id } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(
          `/discover/movie/?api_key=${APIKey}&with_genres=${genre_id}&language=vi`
        );
        setMovies(data && data.results);
        // console.log(data && data.results);
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
          <Link to={`/genre/${genre_id}`} className="center">
            <span className="show-all">Xem tất cả</span>
          </Link>
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
