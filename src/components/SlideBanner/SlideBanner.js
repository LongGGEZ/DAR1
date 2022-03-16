import React, { Component } from "react";
import "./Slide.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const banners = [
  {
    bannerurl:
      "https://previews.123rf.com/images/tul/tul1706/tul170600033/79991409-concepto-de-dise%C3%B1o-de-banner-de-moda-de-vector-de-pel%C3%ADcula-estilo-moderno-con-iconos-de-arte-de-l%C3%ADne.jpg",
  },
  {
    bannerurl:
      "https://img3.stockfresh.com/files/-/-talex-/m/37/9321974_stock-vector-cinema-and-movie-banner.jpg",
  },
  {
    bannerurl:
      "http://images6.fanpop.com/image/photos/40000000/The-Finest-Hours-Banner-movie-trailers-40025062-1200-638.jpg",
  },
  {
    bannerurl:
      "https://collider.com/wp-content/uploads/inception_movie_poster_banner_04.jpg",
  },
  {
    bannerurl:
      "https://www.mortalkombatonline.com/csb/e8c231a83865bb20de369ec1654b420f/content/sha256:d27306ebba09dafb716ef3b0e9b3d84df99cafb9c5a678b1ecd9a3ccf73de5e6.webp",
  },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="custom-slick-btn custom-slick-arrow custom-slick-next"
      onClick={onClick}
    >
      <i className="fa fa-angle-right custom-arrow"></i>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="custom-slick-btn custom-slick-arrow custom-slick-prev"
      onClick={onClick}
    >
      <i className="fa fa-angle-left custom-arrow"></i>
    </div>
  );
}
export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      autoplaySpeed: 4000,
      autoplay: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    return (
      <div className="Slide_slick">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="banner-item">
              <img src={banner.bannerurl} alt="Banner Slide" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
