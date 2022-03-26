import { useState, useEffect } from "react";
import requests from "../../../FecthDataMovie/FecthDataAll";
import apiMovie from "../../../api/axios";
import "../../Container/Container.css";
function RankMovie({ movie_id, title, posterMovieUrl }) {
  useEffect(() => {
    document.title = title;
  });
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(requests.fetchTopRateMovies);
        setMovies(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <div className="main-content">
      <div className="title">
        <h1>Xếp hạng phim</h1>
      </div>
      <div className="movie-rank">
        <table className="table-container">
          <tbody>
            <tr>
              <th>Xếp hạng</th>
              <th>Poster</th>
              <th>Tên Phim</th>
              <th>Vote</th>
              <th>Ngày khởi chiếu</th>
            </tr>
            {movies.map((movie, index) => (
              <tr className="top-film" key={movie.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`${posterMovieUrl + movie.poster_path}`}
                    alt="Poster"
                  />
                </td>
                <td>{movie.title}</td>
                <td>
                  {movie.vote_average}{" "}
                  <img
                    src="https://img.icons8.com/fluency/32/000000/star.png"
                    alt="vote"
                  />
                </td>
                <td>{movie.release_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default RankMovie;
