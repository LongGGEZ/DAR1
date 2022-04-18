import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiMovie from "../../api/axios";
import { APIKey } from "../../api/apikey";
import "./Details.css";

function MovieDetail({ posterMovieUrl }) {
  const { movie_id } = useParams();
  const [movies, setMovies] = useState([]);
  const [moviesVI, setMoviesVI] = useState([]);
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
  }, [movie_id]);
  //Tieng Viet
  useEffect(() => {
    const fetchMoviesVI = async () => {
      try {
        const { data } = await apiMovie.get(
          `/movie/${movie_id}?api_key=${APIKey}&language=VI`
        );
        setMoviesVI(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMoviesVI();
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
        console.error(error);
      }
    };
    fetchTrailers();
  }, [movie_id]);
  return (
    <div className="movie-detail">
      <div className="detail-left">
        <div className="moviedetail-title">
          <label>
            {moviesVI.title || movies.title || movies.original_title|| "Đang cập nhật..."}
          </label>
        </div>
        <div className="bottom-line">
          <div className="overview">
            <div className="title-overview">Nội dung</div>
            <div className="overview-detail">
              {moviesVI.overview ||
                movies.overview ||
                "Nội dung đang cập nhật..."}
            </div>
          </div>
        </div>
        <div className="bottom-line">
          <div className="genre">
            <label>Thể loại: </label>
            {moviesVI.genres &&
              moviesVI.genres.map((genre, index) => (
                <div className="genre-name" key={genre.id}>
                  <a href="">
                    {(index ? ", " : "") + `${genre.name}` ||
                      "Đang cập nhật..."}
                  </a>
                </div>
              ))}
          </div>
          <div className="production-countries">
            <label>Quốc gia: </label>
            {movies.production_countries &&
              movies.production_countries.map((pc, index) => (
                <div className="countries-name" key={index}>
                  <a href="">
                    {(index ? ", " : "") + `${pc.name}` || "Đang cập nhật..."}
                  </a>
                </div>
              ))}
          </div>
          <div className="runtime">
            <label>Thời lượng: </label>
            {movies.runtime === undefined
              ? "Đang cập nhật..."
              : movies.runtime + " phút"}
          </div>
          <div className="release-date">
            <label>Ngày khởi chiếu:</label>{" "}
            {movies.release_date || "Đang cập nhật..."}
          </div>
        </div>
        {trailers === undefined || trailers.key === undefined ? (
          ""
        ) : (
          <div className="trailer">
            <div className="title-trailer">
              <label>Trailer</label>
            </div>
            <iframe
              width="100%"
              height="600"
              src={`https://www.youtube.com/embed/${trailers.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="detail-right">
        <div className="poster-img">
          <img src={`${posterMovieUrl + movies.poster_path}`} alt="Poster" />
        </div>
        {movies === null ? "" : <div className="btn-wacth-movie">Xem Phim</div>}
      </div>
    </div>
  );
}
export default MovieDetail;
