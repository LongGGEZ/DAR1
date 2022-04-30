import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import apiMovie from "../../../api/axios";
import { APIKey } from "../../../api/apikey";
import MovieCard from "../../MovieCard/MovieCard";
import "../../Container/Container.css";
import ReactPaginate from "react-paginate";

function News({ title, posterMovieUrl }) {
  const [pagesNumber, setPagesNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    document.title = title;
  });

  //fecth new movie
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(
          `/movie/upcoming?api_key=${APIKey}&language=vi&page=${pagesNumber}`
        );
        setPageCount(data.total_pages);
        setMovies(data && data.results);
        // console.log(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
    // console.log(pagesNumber);
  }, [pagesNumber]);

  const handlePageClick = (page) => {
    setPagesNumber(page.selected + 1);
    window.scrollTo(0, 0);
  };
  return (
    <div className="main-content">
      <div className="title">
        <h1>Phim mới</h1>
      </div>
      <div className="movie">
        <Grid container columns={{ xs: 4.8, sm: 9.6, md: 12 }}>
          {movies.map((movie) => (
            <Grid item xs={2.4} key={movie.id}>
              <MovieCard
                posterMovieUrl={posterMovieUrl}
                movie_id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                release_date={movie.release_date}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <ReactPaginate
        className="pagination"
        onPageChange={handlePageClick}
        breakLabel="..."
        nextLabel={
          <img
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            src="https://img.icons8.com/material-outlined/24/000000/right.png"
            alt="Next"
          />
        }
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={
          <img
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            src="https://img.icons8.com/material-outlined/24/000000/left.png"
            alt="Left"
          />
        }
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default News;
