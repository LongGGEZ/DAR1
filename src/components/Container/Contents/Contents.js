import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import apiMovie from "../../../api/axios";
import { APIKey } from "../../../api/apikey";
import MovieCard from "../../MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "../../Container/Container.css";
import ReactLoading from "react-loading";
import { LoadingContext } from "../../../Context/LoadingContext";

function Contents({ title, posterMovieUrl }) {
  const { currentPage } = useParams();
  const { genre_id } = useParams();
  const [pagesNumber, setPagesNumber] = useState(1);
  const [genres, setGenres] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const context = useContext(LoadingContext);
  useEffect(() => {
    document.title = genres && genres.name;
  });
  let navigate = useNavigate();
  //fecth movie
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    context.setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const { data } = await apiMovie.get(
          `/discover/movie/?api_key=${APIKey}&with_genres=${genre_id}&language=vi&page=${pagesNumber}`
        );
        setPageCount(data.total_pages);
        setMovies(data && data.results);
        if (data && data.results.length === 0) {
          navigate("404");
        }
        setTimeout(() => {
          context.setIsLoading(false);
        }, 800);
      } catch (error) {
        navigate("404");
        console.error(error);
      }
    };
    fetchMovie();
    return () => {
      clearTimeout();
    };
  }, [genre_id, pagesNumber]);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const { data } = await apiMovie.get(
          `genre/movie/list?api_key=${APIKey}&language=vi`
        );
        setGenres(
          data.genres.find((genre) => genre.id && String(genre.id) === genre_id)
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchGenre();
  }, [genre_id]);

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
    navigate(`/genre/${genre_id}/${pageX}`);
    window.scrollTo(0, 0);
  };
  return (
    <div className="main-content">
      {context.isLoading ? (
        <div className="isloading">
          <ReactLoading type="bubbles" color={"black"} className="loading" />
        </div>
      ) : (
        <>
          <div className="title">
            <h1>{genres && genres.name}</h1>
          </div>
          <div className="movie">
            <Grid container spacing={3} columns={{ xs: 4.8, sm: 9.6, md: 12 }}>
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
            forcePage={pagesNumber - 1}
            onPageChange={handlePageClick}
            nextLabel={
              <img
                src="https://img.icons8.com/material-outlined/24/000000/right.png"
                alt="Next"
              />
            }
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount > 500 ? 500 : pageCount}
            previousLabel={
              <img
                src="https://img.icons8.com/material-outlined/24/000000/left.png"
                alt="Left"
              />
            }
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
}
export default Contents;
