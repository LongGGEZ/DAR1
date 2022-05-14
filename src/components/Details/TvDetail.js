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
  const [tvVI, setTvVI] = useState([]);
  const [casts, setCasts] = useState([]);
  const [tv, setTv] = useState([]);
  const [trailers, setTrailers] = useState({});
  const context = useContext(LoadingContext);
  let navigate = useNavigate()
  //TiengViet
  useEffect(() => {
    context.setIsLoading(true);
    const fetchTv = async () => {
      try {
        const { data } = await apiMovie.get(
          `/tv/${movie_id}?api_key=${APIKey}&language=vi`
        );
        setTvVI(data);
        setTimeout(() => {
          context.setIsLoading(false);
        }, 500);
        // console.log(data);
      } catch (error) {
        context.setIsLoading(false);
        navigate("404")
        // console.error(error)
      }
    };
      fetchTv();
  }, [movie_id]);

  useEffect(() => {
    const fetchTv = async () => {
      try {
        const { data } = await apiMovie.get(
          `/tv/${movie_id}?api_key=${APIKey}&language=en-US`
        );
        setTv(data);
        // console.log(data);
      } catch (error) {
        // console.error(error);
      }
    };
    fetchTv();
  }, []);
  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const { data } = await apiMovie.get(
          `tv/${movie_id}/videos?api_key=${APIKey}&language=en-US`
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
  }, []);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await apiMovie.get(
          `/tv/${movie_id}/credits?api_key=${APIKey}&language=en-US`
        );
        setCasts(data && data.cast);
        // console.log(data && data.cast);
      } catch (error) {
        // console.error(error);
      }
    };
    fetchCast();
  }, []);

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
            movies={tv}
            moviesVi={tvVI}
            title={tvVI.name}
            runtime={tv.number_of_episodes + " tập"}
          />
          <InfoDetail
            posterMovieUrl={posterMovieUrl}
            movies={tv}
            moviesVi={tvVI}
            cast={casts}
            trailers={trailers}
            releaseDate={tv.first_air_date}
          />
        </>
      )}
    </div>
  );
}
export default MovieDetail;
