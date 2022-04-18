import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiMovie from "../../api/axios";
import { APIKey } from "../../api/apikey";
import "./Details.css";

function MovieDetail({ posterMovieUrl }) {
  const { movie_id } = useParams();
  const [tvVI, setTvVI] = useState([]);
  const [tv, setTv] = useState([]);
  const [trailers, setTrailers] = useState({});
  //TiengViet
  useEffect(() => {
    const fetchTv = async () => {
      try {
        const { data } = await apiMovie.get(
          `/tv/${movie_id}?api_key=${APIKey}&language=VI`
        );
        setTvVI(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTv();
  }, [movie_id]);
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
  }, [movie_id]);
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
  }, [movie_id]);
  return (
    <div className="movie-detail">
      <div className="detail-left">
        <div className="moviedetail-title">
          <label>{tvVI.name || tv.name || "Đang cập nhật..."}</label>
        </div>
        <div className="bottom-line">
          <div className="overview">
            <div className="title-overview">Nội dung</div>
            <div className="overview-detail">
              {tvVI.overview || tv.overview || "Nội dung đang cập nhật..."}
            </div>
          </div>
        </div>
        <div className="bottom-line">
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
          <div className="production-countries">
            <label>Quốc gia: </label>
            {tvVI.production_countries &&
              tvVI.production_countries.map((pc, index) => (
                <div className="countries-name" key={index}>
                  <a href="">
                    {(index ? ", " : "") + `${pc.name}` || "Đang cập nhật..."}
                  </a>
                </div>
              ))}
          </div>
          <div className="runtime">
            <label>Thời lượng: </label>
            {tvVI.number_of_episodes + " tập" || "Đang cập nhật..."}
          </div>
          <div className="release-date">
            <label>Ngày khởi chiếu:</label>{" "}
            {tvVI.release_date || tvVI.last_air_date || "Đang cập nhật..."}
          </div>
        </div>
        {trailers === undefined || trailers.key === undefined ? (
          ""
        ) : (
          <div className="trailer">
            <div className="title-trailer">
              <label>Trailer</label>
            </div>
            <iframe
              width="100%"
              height="600"
              src={`https://www.youtube.com/embed/${trailers.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="detail-right">
        <div className="poster-img">
          <img src={`${posterMovieUrl + tvVI.poster_path}`} alt="Poster" />
        </div>
        {tvVI === null ? "" : <div className="btn-wacth-movie">Xem Phim</div>}
      </div>
    </div>
  );
}
export default MovieDetail;
