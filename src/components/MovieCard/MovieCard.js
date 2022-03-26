import { Link } from "react-router-dom";
import "./MovieCard.css";
function MovieCard({ movie_id, title, image, release_date }) {
  return (
    <div className="card-item">
      <Link to={`/movie/${movie_id}`}>
        <div className="card-content">
          <img src={image} alt="Poster" />
        </div>
        <div className="card-info">
          <div className="movie-title">{title||"Đang cập nhật..."}</div>
          <div className="movie-release">Khởi chiếu: {release_date||"Đang cập nhật..."}</div>
        </div>
      </Link>
    </div>
  );
}
export default MovieCard;
