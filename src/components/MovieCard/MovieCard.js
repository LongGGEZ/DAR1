import { Link } from "react-router-dom";
import "./MovieCard.css";
function MovieCard({ movie_id, title, original_name, poster, release_date, first_air_date }) {
  return (
    <div className="card-item">
      <Link to={`/movie/${movie_id}`}>
        <div className="card-content">
          <img src={poster} alt="Poster" />
        </div>
        <div className="card-info">
          <div className="movie-title">
            {title || original_name || "Đang cập nhật..."}
          </div>
          <div className="movie-release">
            Khởi chiếu: {release_date ||first_air_date|| "Đang cập nhật..."}
          </div>
        </div>
      </Link>
    </div>
  );
}
export default MovieCard;
