import { useState, useEffect, useContext } from "react";
import apiMovie from "../../../api/axios";
import MovieCard from "../../MovieCard/MovieCard";
import Grid from "@mui/material/Grid";
import { APIKey } from "../../../api/apikey";
import "../../Container/Container.css";
import ReactPaginate from "react-paginate";
import ReactLoading from "react-loading";
import { LoadingContext } from "../../../Context/LoadingContext";

function Trending({ title, posterMovieUrl }) {
  const [pagesNumber, setPagesNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const context = useContext(LoadingContext);
  useEffect(() => {
    document.title = title;
  });
  const [movies, setMovies] = useState([]);
  //fetch trending movie
  useEffect(() => {
    const fetchMovie = async () => {
      context.setIsLoading(true);
      try {
        const { data } = await apiMovie.get(
          `/trending/all/day?api_key=${APIKey}&language=vi&page=${pagesNumber}`
        );
        setMovies(data && data.results);
        setPageCount(data.total_pages);
        setTimeout(() => {
          context.setIsLoading(false);
        }, 500);
        // console.log(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
  }, [pagesNumber]);

  const handlePageClick = (page) => {
    setPagesNumber(page.selected + 1);
    // console.log(page.selected);
    window.scrollTo(0, 0);
  };
  // console.log(context.isLoading);
  return (
    <div className="main-content">
      {context.isLoading ? (
        <div className="isloading">
          <ReactLoading type="bubbles" color={"black"} className="loading" />
        </div>
      ) : (
        <div>
          <div className="title">
            <h1>Phim thịnh hành</h1>
          </div>
          <div className="movie">
            <Grid container columns={{ xs: 4.8, sm: 9.6, md: 12 }}>
              {movies.map((movie) => (
                <Grid item xs={2.4} key={movie.id}>
                  <MovieCard
                    posterMovieUrl={posterMovieUrl}
                    movie_id={movie.id}
                    media_type={movie.media_type}
                    title={movie.title}
                    original_name={movie.original_name}
                    first_air_date={movie.first_air_date}
                    poster={movie.poster_path}
                    release_date={movie.release_date}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      )}
      <ReactPaginate
        className={`pagination ${context.isLoading ? "display-none" : ""}`}
        onPageChange={handlePageClick}
        breakLabel="..."
        nextLabel={
          <img
            src="https://img.icons8.com/material-outlined/24/000000/right.png"
            alt="Next"
          />
        }
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={
          <img
            src="https://img.icons8.com/material-outlined/24/000000/left.png"
            alt="Left"
          />
        }
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default Trending;
