import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiMovie from "../../api/axios";
import { APIKey } from "../../api/apikey";
import "./MovieDetail.css";

function MovieDetail() {
  const posterMovieUrl = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const { movie_id } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(
          `/movie/${movie_id}?api_key=${APIKey}&language=en-US`
        );
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <div className="movie-detail">
      <div className="left">
        <div className="moviedetail-title">{movies.original_title}</div>
        <div className="overview">
          <div className="title-overview">Nội dung</div>
          <div className="overview-detail">{movies.overview}</div>
        </div>
        <div>
          Thể loại...
          <div>
            {/* {movies.genres.map((genre) => (
              <div>{genre.name}</div>
            ))} */}
            {/* {console.log(movies.genres.name)} */}
          </div>
        </div>
        <div>Ngày khởi chiếu: {movies.release_date}</div>
      </div>
      <div className="right">
        <div className="poster-img">
          <img src={`${posterMovieUrl + movies.poster_path}`} alt="Poster" />
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
