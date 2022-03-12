import MovieCard from "../MovieCard/MovieCard";
function Trending() {
  return (
    <div>
      <div className="title">
        <h1>Phim thịnh hành</h1>
      </div>
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
export default Trending;
