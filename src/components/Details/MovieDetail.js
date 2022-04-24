import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import apiMovie from "../../api/axios";
import { APIKey } from "../../api/apikey";
import BannerDetail from "./componentdetails/BannerDetail";
import InfoDetail from "./componentdetails/InfoDetail";
import "./Details.css";

function MovieDetail({ posterMovieUrl }) {
  const { movie_id } = useParams();
  const [movies, setMovies] = useState([]);
  const [moviesVI, setMoviesVI] = useState([]);
  const [casts, setCasts] = useState([]);
  const [trailers, setTrailers] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await apiMovie.get(
          `/movie/${movie_id}?api_key=${APIKey}&language=en-US`
        );
        setMovies(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);
  //Tieng Viet
  useEffect(() => {
    const fetchMoviesVI = async () => {
      try {
        const { data } = await apiMovie.get(
          `/movie/${movie_id}?api_key=${APIKey}&language=vi`
        );
        setMoviesVI(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMoviesVI();
  }, []);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await apiMovie.get(
          `/movie/${movie_id}/credits?api_key=${APIKey}&language=en-US`
        );
        setCasts(data && data.cast);
        // console.log(data && data.cast);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCast();
  }, []);

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const { data } = await apiMovie.get(
          `movie/${movie_id}/videos?api_key=${APIKey}&language=en-US`
        );
        let trailerIndex =
          data && data.results.findIndex((ti) => ti.type === "Trailer");
        setTrailers(data && data.results[trailerIndex]);
        // console.log(data && data.results[trailerIndex]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrailers();
  }, []);

  return (
    <div className="movie-detail">
      <BannerDetail
        posterMovieUrl={posterMovieUrl}
        movies={movies}
        moviesVi={moviesVI}
        title={moviesVI.title}
        runtime={movies.runtime}
      />
      <InfoDetail
        posterMovieUrl={posterMovieUrl}
        movies={movies}
        moviesVi={moviesVI}
        cast={casts}
        trailers={trailers}
        releaseDate={movies.release_date}
      />
    </div>
  );
}
export default MovieDetail;
