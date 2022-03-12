import MovieCard from "../MovieCard/MovieCard";
import FilmSlider from "../Slider/Slider";
import "./Content.css";
function Content() {
  return (
    <div className="main-content">
        <FilmSlider />
      <div className="list-film">
        <div>
          <div className="title">
            <h1>Phim đề cử</h1>
          </div>
          <div className="movie">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>
      <div className="list-film">
        <div>
          <div className="title">
            <h1>Phim lẻ mới cập nhật</h1>
          </div>
          <div className="movie">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>
      <div className="list-film">
        <div>
          <div className="title">
            <h1>Phim chiếu rạp</h1>
          </div>
          <div className="movie">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>
      <div className="list-film">
        <div>
          <div className="title">
            <h1>Phim bộ mới cập nhật</h1>
          </div>
          <div className="movie">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
