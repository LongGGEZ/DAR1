import Grid from "@mui/material/Grid";
function InfoDetail({
  posterMovieUrl,
  movies,
  moviesVi,
  releaseDate,
  cast,
  trailers,
}) {
  return (
    <>
      <div className="bottom-line">
        <div className="title-overview">Thông tin</div>
        <div className="production-countries">
          <label>Quốc gia: </label>
          {movies.production_countries &&
            movies.production_countries.map((pc, index) => (
              <div className="countries-name" key={index}>
                <a href="">{(index ? ", " : "") + `${pc.name}`}</a>
              </div>
            ))}
          {movies.production_countries &&
            movies.production_countries.length === 0 &&
            "Đang cập nhật..."}
        </div>

        <div className="release-date">
          <label>Ngày khởi chiếu: </label>
          {(releaseDate && releaseDate.split("-").reverse().join("-")) ||
            "Đang cập nhật..."}
        </div>
        <div className="production-companies">
          <label>Công ty sản xuất: </label>
          {movies.production_companies &&
            movies.production_companies.map((pcn, index) => (
              <div className="companies-name" key={index}>
                <a href="">{(index ? ", " : "") + `${pcn.name}`}</a>
              </div>
            ))}
          {movies.production_companies &&
            movies.production_companies.length === 0 &&
            "Đang cập nhật..."}
        </div>
      </div>
      <div className="bottom-line">
        <div className="overview">
          <div className="title-overview">Nội dung</div>
          <div className="overview-detail">
            {moviesVi.overview ||
              movies.overview ||
              "Nội dung đang cập nhật..."}
          </div>
        </div>
      </div>
      {trailers === undefined || trailers.key === undefined ? (
        ""
      ) : (
        <div id="trailerId" className="trailer">
          <div className="title-trailer">
            <label>Trailer</label>
          </div>
          <iframe
            width="100%"
            height="600px"
            src={`https://www.youtube.com/embed/${trailers.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {cast.length !== 0 ? (
        <>
          <div className="title-cast">
            <label>Diễn viên:</label>
          </div>
          <div className="preview-cast">
            <Grid
              container
              spacing={{ xs: 2 }}
              columns={{ xs: 4, sm: 6, md: 12 }}
            >
              {cast.slice(0, 6).map((dv, index) => (
                <Grid item xs={2} key={dv.id}>
                  <div className="cast">
                    <img
                      src={
                        dv.profile_path
                          ? `${posterMovieUrl}${dv.profile_path}`
                          : "https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"
                      }
                      alt="Diễn viên"
                    />
                    <div className="info-container">
                      <h4>
                        <b>{dv.name}</b>
                      </h4>
                      <p>{dv.character}</p>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
export default InfoDetail;
