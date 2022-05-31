import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { APIKey } from "../../../api/apikey";
import apiMovie from "../../../api/axios";
import MovieCard from "../../MovieCard/MovieCard";
import Grid from "@mui/material/Grid";
import ReactLoading from "react-loading";
import { LoadingContext } from "../../../Context/LoadingContext";
function ListFilm({ title, genre_id,fetchData, posterMovieUrl }) {
  // const { genre_id } = useParams();
  const context = useContext(LoadingContext);
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    // context.setIsLoading(true)
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
  }, [genre_id]);
  // console.log(context.isLoadingHome);
  return (
    <>
      {context.isLoading ? (
        <div className="isloading">
          <ReactLoading type="bubbles" color={"black"} className="loading" />
        </div>
      ) : (
        <div className="list-film">
          <div className="title">
            <h1>{title}</h1>
            <Link to={`/genre/${genre_id}`} className="center">
              <span className="show-all">Xem tất cả</span>
            </Link>
          </div>
          <div className="movie-flex">
            <Grid container spacing={3} columns={{ xs: 4, sm: 6, md: 12 }}>
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
      )}
    </>
  );
}
export default ListFilm;
