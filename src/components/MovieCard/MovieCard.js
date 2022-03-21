import { Link } from "react-router-dom";
import "./MovieCard.css";
function MovieCard({id, title, image, release_date }) {
  return (
      <div className="card-item">
        <Link to={`/movie/${id}`}>
          <div className="card-content">
            <img src={image} alt="Poster" />
            <div className="card-info">
              <div className="movie-title">{title}</div>
              <div className="movie-release">
                Ngày khởi chiếu: {release_date}
              </div>
            </div>
          </div>
        </Link>
    </div>
  );
}
export default MovieCard;
