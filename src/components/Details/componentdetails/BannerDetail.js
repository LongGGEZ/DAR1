function BannerDetail({ posterMovieUrl, movies, moviesVi, title, runtime }) {
  return (
    <div
      style={{
        backgroundImage: `url(${posterMovieUrl}${movies.backdrop_path})`,
      }}
      className="detail-container"
    >
      <div className="center-details">
        <div className="detail-left">
          <div className="poster-img">
            <img src={`${posterMovieUrl + movies.poster_path}`} alt="Poster" />
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
                  <a href="">
                    {(index ? ", " : "") + `${genre.name}` ||
                      "Đang cập nhật..."}
                  </a>
                </div>
              ))}
          </div>
          <div className="vote">
            <label>Vote: </label> {movies.vote_average}
          </div>
          <div className="runtime">
            <label>Thời lượng: </label>
            {runtime === undefined ? "Đang cập nhật..." : runtime + " phút"}
          </div>
          <div className="btn-watch">
            <div className="btn-wacth-movie">Xem Phim</div>
            <div
              onClick={() =>
                document
                  .getElementById("trailerId")
                  .scrollIntoView({ behavior: "smooth" })
              }
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
