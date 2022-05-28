import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import apiMovie from "../../../api/axios";
import { APIKey } from "../../../api/apikey";
import MovieCard from "../../MovieCard/MovieCard";
import "../../Container/Container.css";
import ReactPaginate from "react-paginate";
import ReactLoading from "react-loading";
import { LoadingContext } from "../../../Context/LoadingContext";

function News({ title, posterMovieUrl }) {
  const { currentPage } = useParams();
  const [movies, setMovies] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const context = useContext(LoadingContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title;
  });

  //fecth new movie

  useEffect(() => {
    context.setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(
          `/movie/upcoming?api_key=${APIKey}&language=vi&page=${pagesNumber}`
        );
        setPageCount(data.total_pages);
        setMovies(data && data.results);
        setTimeout(() => {
          context.setIsLoading(false);
        }, 800);
        // console.log(data && data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovie();
    return () => {
      clearTimeout();
    };
  }, [pagesNumber]);

  useEffect(() => {
    if (currentPage) {
      if (currentPage < 0 || currentPage > pageCount) {
        setPagesNumber(1);
      } else {
        setPagesNumber(currentPage);
      }
    }
  }, [pageCount, currentPage]);

  const handlePageClick = (page) => {
    const pageX = page.selected + 1;
    navigate(`/news/${pageX}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="main-content">
      {context.isLoading ? (
        <div className="isloading">
          <ReactLoading type="bubbles" color="black" className="loading" />
        </div>
      ) : (
        <>
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
        </>
      )}
      <ReactPaginate
        className={`pagination ${!context.isLoading || "display-none"}`}
        forcePage={pagesNumber - 1}
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
export default News;
