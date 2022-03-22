import { useEffect, useState } from "react";
import apiMovie from "../../../api/axios";
import MovieCard from "../../MovieCard/MovieCard";

function ListFilm({ title, fetchData, posterMovieUrl }) {
  const [movies, setMovies] = useState([]);
  //phim de cu
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
  }, [fetchData]);

  return (
    <div>
      <div className="list-film">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="movie-flex">
            {movies.slice(0,5).map(movie => 
              <div key={movie.id}>
                <MovieCard
                  title={movie.original_title}
                  image={`${posterMovieUrl + movie.poster_path}`}
                  release_date={movie.release_date}
                />
              </div>
            )}
          </div>
      </div>
    </div>
  );
}
export default ListFilm;
