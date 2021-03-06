import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiMovie from "../../api/axios";
import { APIKey } from "../../api/apikey";
import BannerDetail from "./componentdetails/BannerDetail";
import InfoDetail from "./componentdetails/InfoDetail";
import ReactLoading from "react-loading";
import { LoadingContext } from "../../Context/LoadingContext";
import "./Details.css";

function MovieDetail({ posterMovieUrl }) {
  const { movie_id } = useParams();
  const [movies, setMovies] = useState([]);
  const [moviesVI, setMoviesVI] = useState([]);
  const [casts, setCasts] = useState([]);
  const [trailers, setTrailers] = useState({});
  const context = useContext(LoadingContext);
  let navigate = useNavigate();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await apiMovie.get(
          `/movie/${movie_id}?api_key=${APIKey}&language=en-US`
        );
        setMovies(data);
        // console.log(data);
      } catch (error) {
        // console.error(error);
      }
    };
    fetchMovies();
  }, [movie_id]);
  //Tieng Viet
  useEffect(() => {
    context.setIsLoading(true);
    const fetchMoviesVI = async () => {
      try {
        const { data } = await apiMovie.get(
          `/movie/${movie_id}?api_key=${APIKey}&language=vi`
        );
        setMoviesVI(data);
        // console.log(data);
        setTimeout(() => {
          context.setIsLoading(false);
        }, 800);
      } catch (error) {
        context.setIsLoading(false);
        navigate("404");
        // console.error(error)
      }
    };
    fetchMoviesVI();
    return () => {
      clearTimeout();
    };
  }, [movie_id]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await apiMovie.get(
          `/movie/${movie_id}/credits?api_key=${APIKey}&language=en-US`
        );
        setCasts(data && data.cast);
        // console.log(data && data.cast);
      } catch (error) {
        // console.error(error);
      }
    };
    fetchCast();
  }, [movie_id]);

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
        // console.error(error);
      }
    };
    fetchTrailers();
  }, [movie_id]);

  return (
    <div className="movie-detail">
      {context.isLoading ? (
        <div className="isloading">
          <ReactLoading type="bubbles" color={"black"} className="loading" />
        </div>
      ) : (
        <>
          <BannerDetail
            posterMovieUrl={posterMovieUrl}
            movies={movies}
            moviesVi={moviesVI}
            title={moviesVI.title}
            runtime={movies.runtime + " ph??t"}
          />
          <InfoDetail
            posterMovieUrl={posterMovieUrl}
            movies={movies}
            moviesVi={moviesVI}
            cast={casts}
            trailers={trailers}
            releaseDate={movies.release_date}
          />
        </>
      )}
    </div>
  );
}
export default MovieDetail;
