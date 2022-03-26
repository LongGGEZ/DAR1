import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiMovie from "../../api/axios";
import { APIKey } from "../../api/apikey";
import "./MovieDetail.css";

function MovieDetail({ posterMovieUrl }) {
  const [movies, setMovies] = useState([]);
  const { movie_id } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(
          `/movie/${movie_id}?api_key=${APIKey}&language=en-US`
        );
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [movie_id]);
  return (
    <div className="movie-detail">
      <div className="detail-left">
        <div className="moviedetail-title">
          <label>
            {movies.title || "Đang cập nhật..."}
            {movies.title !== movies.original_title
              ? `/${movies.original_title}` || "Đang cập nhật..."
              : ""}
          </label>
        </div>
        <div className="bottom-line">
          <div className="overview">
            <div className="title-overview">Nội dung</div>
            <div className="overview-detail">
              {movies.overview || "Nội dung đang cập nhật..."}
            </div>
          </div>
        </div>
        <div className="bottom-line">
          <div className="genre">
            <label>Thể loại: </label>
            {movies.genres &&
              movies.genres.map((genre, index) => (
                <div className="genre-name" key={genre.id}>
                  <a href="">
                    {" "}
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
                    {" "}
                    {(index ? ", " : "") + `${pc.name}` || "Đang cập nhật..."}
                  </a>
                </div>
              ))}
          </div>
          <div className="runtime">
            <label>Thời lượng: </label>
            {movies.runtime + " phút" || "Đang cập nhật..."}
          </div>
          <div className="release-date">
            <label>Ngày khởi chiếu:</label>{" "}
            {movies.release_date || "Đang cập nhật..."}
          </div>
        </div>
      </div>
      <div className="detail-right">
        <div className="poster-img">
          <img src={`${posterMovieUrl + movies.poster_path}`} alt="Poster" />
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
