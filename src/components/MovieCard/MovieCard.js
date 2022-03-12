import { Link } from "react-router-dom";
import "./MovieCard.css";
function MovieCrad() {
  return (
    <div>
      <div className="card-item">
        <Link to="/">
          <div className="card-content">
            <img
              src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/s/n/snwh_poster_bluemontage_4x5fb_1_.jpg"
              alt="Title"
            />
            <div className="card-info">
              <div className="movie-title">Spider-Man: No Way Home</div>
              <div className="movie-release">Ngày khởi chiếu: 17/02/2021</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default MovieCrad;
