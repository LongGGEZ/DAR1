import {Link} from "react-router-dom"
function BannerDetail({ posterMovieUrl, movies, moviesVi, title, runtime }) {
  return (
    <div
      style={{
        backgroundImage: movies.backdrop_path
          ? `url(${posterMovieUrl}${movies.backdrop_path})`
          : "",
      }}
      className="detail-container"
    >
      <div className="center-details">
        <div className="detail-left">
          <div className="poster-img">
            <img
              src={
                movies.poster_path
                  ? `${posterMovieUrl + movies.poster_path}`
                  : "http://hoahieu.com.vn/wp-content/themes/kutetheme/images/placeholder.jpg"
              }
              alt="Poster"
            />
          </div>
        </div>
        <div className="detail-right">
          <div className="moviedetail-title">
            <label>
              {title || movies.original_title || "Đang cập nhật..."}
            </label>
          </div>
          <div className="genre">
            <label>Thể loại: </label>
            {moviesVi.genres &&
              moviesVi.genres.map((genre, index) => (
                <div className="genre-name" key={genre.id}>
                  <Link to={`/genre/${genre.id}`}>
                    {(index ? ", " : "") + `${genre.name}` ||
                      "Đang cập nhật..."}
                  </Link>
                </div>
              ))}
          </div>
          <div className="vote">
            <label>Vote: </label> {movies.vote_average}
          </div>
          <div className="runtime">
            <label>Thời lượng: </label>
            {runtime === undefined ? "Đang cập nhật..." : runtime}
          </div>
          <div className="btn-watch">
            <div className="btn-wacth-movie">Xem Phim</div>
            <div
              onClick={() => {
                const idTrailer = document.getElementById("trailerId");
                if (idTrailer) {
                  idTrailer.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-wacth-trailer"
            >
              Xem Trailer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BannerDetail;
