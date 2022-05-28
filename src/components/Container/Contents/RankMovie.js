import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import requests from "../../../FecthDataMovie/FecthDataAll";
import apiMovie from "../../../api/axios";
import ReactLoading from "react-loading";
import { LoadingContext } from "../../../Context/LoadingContext";
import "../../Container/Container.css";
function RankMovie({ title, posterMovieUrl }) {
  useEffect(() => {
    document.title = title;
  });
  const context = useContext(LoadingContext);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    context.setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(requests.fetchTopRateMovies);
        setMovies(data && data.results);
        setTimeout(() => {
          context.setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div className="main-content">
      {context.isLoading ? (
        <div className="isloading">
          <ReactLoading type="bubbles" color={"black"} className="loading" />
        </div>
      ) : (
        <>
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
                    <td className="rank-poster">
                      <Link to={`/movie/${movie.id}`}>
                        <img
                          className="poster"
                          src={`${posterMovieUrl + movie.poster_path}`}
                          alt="Poster"
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    </td>
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
        </>
      )}
    </div>
  );
}
export default RankMovie;
