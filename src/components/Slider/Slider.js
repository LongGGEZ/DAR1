import "./Slider.css"
const banners=[{
  bannerurl:"https://previews.123rf.com/images/tul/tul1706/tul170600033/79991409-concepto-de-dise%C3%B1o-de-banner-de-moda-de-vector-de-pel%C3%ADcula-estilo-moderno-con-iconos-de-arte-de-l%C3%ADne.jpg"
},
{
  bannerurl:"https://img3.stockfresh.com/files/-/-talex-/m/37/9321974_stock-vector-cinema-and-movie-banner.jpg"
},
{
  bannerurl:"http://images6.fanpop.com/image/photos/40000000/The-Finest-Hours-Banner-movie-trailers-40025062-1200-638.jpg"
},
{
  bannerurl:"https://collider.com/wp-content/uploads/inception_movie_poster_banner_04.jpg"
},
{
  bannerurl:"https://www.mortalkombatonline.com/csb/e8c231a83865bb20de369ec1654b420f/content/sha256:d27306ebba09dafb716ef3b0e9b3d84df99cafb9c5a678b1ecd9a3ccf73de5e6.webp"
},]
function FilmSlider() {
  return (
    <>
      {banners.slice(3,4).map((banner, index) => (
        <div className="movie-item" key={index}>
          <img src={banner.bannerurl} alt="poster" />
        </div>
      ))}
    </>
  );
}
export default FilmSlider