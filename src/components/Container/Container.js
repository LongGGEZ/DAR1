import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import SlideBanner from "../SlideBanner/SlideBanner";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import "../Container/Container.css";
function Content({ title, posterMovieUrl }) {
  useEffect(() => {
    document.title = title;
  });
  //phim de cu
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=b4537afeaad3af17fa8676533391f855&language=en-US&page=1`
        );
        setMovies(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
      fetchMovie();
  }, []);
  //phim le moi
  const [movies1, setMovies1] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=b4537afeaad3af17fa8676533391f855&language=en-US&page=1`
        );
        setMovies1(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, []);
  //phim chieu rap
  const [movies2, setMovies2] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=b4537afeaad3af17fa8676533391f855&language=en-US&page=1`
        );
        setMovies2(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, []);

  return (
    <div className="main-content">
      <div className="slide-fix">
        <SlideBanner />
      </div>
      <div className="list-film">
        <div>
          <div className="title">
            <h1>Phim đề cử</h1>
          </div>
          <div className="movie">
            {movies.slice(5, 10).map((movie) => (
              <div key={movie.id}>
                <MovieCard
                  title={movie.original_title}
                  image={`${posterMovieUrl}${movie.poster_path}`}
                  release_date={movie.release_date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="list-film">
        <div>
          <div className="title">
            <h1>Phim lẻ mới cập nhật</h1>
          </div>
          <div className="movie">
            {movies1.slice(0, 5).map((movie) => (
              <div key={movie.id}>
                <MovieCard
                  id={movie.id}
                  title={movie.original_title}
                  image={`${posterMovieUrl}${movie.poster_path}`}
                  release_date={movie.release_date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="list-film">
        <div>
          <div className="title">
            <h1>Phim chiếu rạp</h1>
          </div>
          <div className="movie">
            {movies2.slice(0, 5).map((movie) => (
              <div key={movie.id}>
                <MovieCard
                  title={movie.original_title}
                  image={`${posterMovieUrl}${movie.poster_path}`}
                  release_date={movie.release_date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="list-film">
        <div>
          <div className="title">
            <h1>Phim bộ mới cập nhật</h1>
          </div>
          <div className="movie">
            {movies1.slice(15, 20).map((movie) => (
              <div key={movie.id}>
                <MovieCard
                  title={movie.original_title}
                  image={`${posterMovieUrl}${movie.poster_path}`}
                  release_date={movie.release_date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
