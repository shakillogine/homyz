import React from "react";
import imges from "../images/hero-image.png";
import { MdLocationOn } from "react-icons/md";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="header-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="flexColStart header-left">
          <div className="hero-title">
            <div className="orange-circel" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}>

              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>

          <div className="hero-des pt-12 pb-12 text-gray-400">
            <p>Find a variety of properties that suit you very easilty</p>
            <p>Forget all difficulties in finding a residence for you</p>
          </div>

          <div className="search-bar flexCenter ">
            <MdLocationOn color="blue" size={25} />
            <input className="text-black" type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats mt-10">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premiun Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter header-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container">

            <img src={imges} alt="imges" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
