import React, { Component } from "react";
import "./Slide.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const banners = [
  {
    bannerurl:
      "https://cellphones.com.vn/sforum/wp-content/uploads/2021/06/d80646d0-4429-11eb-9dce-47010f84228e.jpg",
  },
  {
    bannerurl: "http://www.skviral.com/wp-content/uploads/2016/06/image.png",
  },
  {
    bannerurl:
      "https://www.mortalkombatonline.com/csb/e8c231a83865bb20de369ec1654b420f/content/sha256:d27306ebba09dafb716ef3b0e9b3d84df99cafb9c5a678b1ecd9a3ccf73de5e6.webp",
  },
  {
    bannerurl:
      "http://images6.fanpop.com/image/photos/40000000/The-Finest-Hours-Banner-movie-trailers-40025062-1200-638.jpg",
  },
  {
    bannerurl:
      "https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-batman.jpg",
  },
  {
    bannerurl:
      "https://collider.com/wp-content/uploads/inception_movie_poster_banner_01.jpg",
  },
  {
    bannerurl:
      "https://previews.123rf.com/images/tul/tul1706/tul170600033/79991409-movie-vector-trendy-banner-design-concept-modern-style-with-thin-line-art-icons-on-gradient-colors-b.jpg",
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
