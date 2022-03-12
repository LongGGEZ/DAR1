import MovieCard from "../MovieCard/MovieCard";
function ComingSoon() {
  return (
    <div>
      <div className="title">
        <h1>Phim sắp chiếu</h1>
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
export default ComingSoon;
