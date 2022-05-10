import { Link } from "react-router-dom";
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
    <div className="card-item">
      <Link to={`/${media_type || "movie"}/${movie_id}`}>
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
            {(release_date && release_date.split("-").reverse().join("-")) ||
              (first_air_date &&
                first_air_date.split("-").reverse().join("-")) ||
              ("Đang cập nhật...")}
          </div>
        </div>
      </Link>
    </div>
  );
}
export default MovieCard;
