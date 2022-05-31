import { Link } from "react-router-dom";
import moment from "moment";
import "./MovieCard.css";
function MovieCard({
  posterMovieUrl,
  movie_id,
  media_type,
  title,
  original_name,
  poster,
  release_date,
  first_air_date,
}) {
  return (
    <Link className="card-item" to={`/${media_type || "movie"}/${movie_id}`}>
      <div className="card-content">
        <img
          src={
            poster
              ? `${posterMovieUrl}${poster}`
              : "http://hoahieu.com.vn/wp-content/themes/kutetheme/images/placeholder.jpg"
          }
          alt="Poster"
        />
      </div>
      <div className="card-info">
        <div className="movie-title">
          {title || original_name || "Đang cập nhật..."}
        </div>
        <div className="movie-release">
          <label>Khởi chiếu: </label>
          {moment(release_date).format("DD/MM/YYYY") ||
            moment(first_air_date).format("DD/MM/YYYY") ||
            "Đang cập nhật..."}
        </div>
      </div>
      {/* <div className="watch-movie">Xem Phim</div> */}
    </Link>
  );
}
export default MovieCard;
