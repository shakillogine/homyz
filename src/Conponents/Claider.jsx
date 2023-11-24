import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { cliderMe } from "../map";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Claider = () => {
  return (
    <section id="claider">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText text-2xl font-semibold">
            Best Choices
          </span>
          <span className="primaryText text-4xl">Popular Residencies</span>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 2,
            },
            865: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 4,
            },
            1700: {
              slidesPerView: 4,
            },
          }}
        >
          <SliderButton />
          {cliderMe.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText font-medium">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Claider;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>
        <AiOutlineLeft />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <AiOutlineRight />
      </button>
    </div>
  );
};
