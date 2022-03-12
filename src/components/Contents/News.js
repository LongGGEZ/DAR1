import MovieCard from "../MovieCard/MovieCard"
import "./Content.css"
function News() {
  return (
    <div>
      <div className="title"><h1>Phim mới</h1></div>
      <div className="movie">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      </div>
      <div className="movie">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      </div>
    </div>
  );
}
export default News;
