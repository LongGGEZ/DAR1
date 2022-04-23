import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiMovie from "../../api/axios";
import { APIKey } from "../../api/apikey";
import Grid from "@mui/material/Grid";
import "./Details.css";

function MovieDetail({ posterMovieUrl }) {
  const { movie_id } = useParams();
  const [tvVI, setTvVI] = useState([]);
  const [casts, setCasts] = useState([]);
  const [tv, setTv] = useState([]);
  const [trailers, setTrailers] = useState({});
  //TiengViet
  useEffect(() => {
    const fetchTv = async () => {
      try {
        const { data } = await apiMovie.get(
          `/tv/${movie_id}?api_key=${APIKey}&language=vi`
        );
        setTvVI(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTv();
  }, []);
  useEffect(() => {
    const fetchTv = async () => {
      try {
        const { data } = await apiMovie.get(
          `/tv/${movie_id}?api_key=${APIKey}&language=en-US`
        );
        setTv(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTv();
  }, []);
  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const { data } = await apiMovie.get(
          `tv/${movie_id}/videos?api_key=${APIKey}&language=en-US`
        );
        let trailerIndex =
          data && data.results.findIndex((ti) => ti.type === "Trailer");
        setTrailers(data && data.results[trailerIndex]);
        // console.log(data && data.results[trailerIndex]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrailers();
  }, []);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await apiMovie.get(
          `/tv/${movie_id}/credits?api_key=${APIKey}&language=en-US`
        );
        setCasts(data && data.cast);
        // console.log(data && data.cast);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCast();
  }, []);

  return (
    <div className="movie-detail">
      <div
        style={{
          backgroundImage: `url(${posterMovieUrl}${tvVI.backdrop_path})`,
        }}
        className="detail-container"
      >
        <div className="center-details">
          <div className="detail-left">
            <div className="poster-img">
              <img src={`${posterMovieUrl + tvVI.poster_path}`} alt="Poster" />
            </div>
          </div>
          <div className="detail-right">
            <div className="moviedetail-title">
              <label>{tvVI.name || tv.name || "Đang cập nhật..."}</label>
            </div>
            <div className="genre">
              <label>Thể loại: </label>
              {tvVI.genres &&
                tvVI.genres.map((genre, index) => (
                  <div className="genre-name" key={genre.id}>
                    <a href="">
                      {(index ? ", " : "") + `${genre.name}` ||
                        "Đang cập nhật..."}
                    </a>
                  </div>
                ))}
            </div>
            <div className="vote">
              <label>Vote: </label> {tvVI.vote_average}
            </div>
            <div className="runtime">
              <label>Thời lượng: </label>
              {tvVI.number_of_episodes === undefined
                ? "Đang cập nhật..."
                : tvVI.number_of_episodes + " tập"}
            </div>
            <div className="btn-watch">
              <div className="btn-wacth-movie">Xem Phim</div>
              <div
                onClick={() =>
                  document.getElementById("trailerId").scrollIntoView({behavior: "smooth"})
                }
                className="btn-wacth-trailer"
              >
                Xem Trailer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-line">
        <div className="title-overview">Thông tin</div>
        <div className="production-countries">
          <label>Quốc gia: </label>
          {tv.production_countries &&
            tv.production_countries.map((pc, index) => (
              <div className="countries-name" key={index}>
                <a href="">
                  {(index ? ", " : "") + `${pc.name}` || "Đang cập nhật..."}
                </a>
              </div>
            ))}
        </div>
        <div className="release-date">
          <label>Ngày khởi chiếu:</label>{" "}
          {tv.last_air_date || "Đang cập nhật..."}
        </div>
        <div className="production-companies">
          <label>Công ty sản xuất: </label>
          {tv.production_companies &&
            tv.production_companies.map((pcn, index) => (
              <div className="companies-name" key={index}>
                <a href="">
                  {(index ? ", " : "") + `${pcn.name}` || "Đang cập nhật..."}
                </a>
              </div>
            ))}
        </div>
      </div>
      <div className="bottom-line">
        <div className="overview">
          <div className="title-overview">Nội dung</div>
          <div className="overview-detail">
            {tvVI.overview || tv.overview || "Nội dung đang cập nhật..."}
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
      <div className="title-cast">
        <label>Diễn viên:</label>
      </div>
      <div className="preview-cast">
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 6, md: 12 }}>
          {casts.slice(0, 6).map((dv, index) => (
            <Grid item xs={2} key={dv.id}>
              <div className="cast">
                <img
                  src={`${posterMovieUrl}${dv.profile_path}`}
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
    </div>
  );
}
export default MovieDetail;
