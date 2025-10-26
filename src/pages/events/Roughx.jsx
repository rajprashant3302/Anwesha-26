import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./TrendingSlider.css"; // Copy your CSS here

export default function Roughx() {
  const slides = [
    { img: "/joker_2.jpg", price: "$20", name: "Special Pizza" },
    { img: "/joker_2.jpg", price: "$20", name: "Meat Ball" },
    { img: "/joker_2.jpg", price: "$40", name: "Burger" },
    { img: "/joker_2.jpg", price: "$15", name: "Frish Curry" },
    { iimg: "/joker_2.jpg", price: "$15", name: "Pane Cake" },
    { img: "/joker_2.jpg", price: "$20", name: "Vanilla Cake" },
    { img: "/joker_2.jpg", price: "$8", name: "Straw Cake" },
  ];

  return (
    <section id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">- Popular Delivery -</h3>
        <h1 className="text-center section-heading">Trending Food</h1>
      </div>

      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="tranding-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={slide.img} alt={slide.name} />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">{slide.price}</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">{slide.name}</h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <ion-icon key={i} name="star"></ion-icon>
                      ))}
                    </div>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
