import React from "react";
import image from "../images/logo2.png";

const Footer = () => {
  return (
    <section>
      <div className="paddings innerWidth flexCenter f-container justify-between footer-end">
        <div className="flexColStart f-left gap-1">
          <img src={image} alt="" width={120} />

          <span className="secondaryText mt-2 text-base">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText text-4xl">Information</span>
          <span className="secondaryText mt-2">145 New York, FL 5467, USA</span>

          <div className="flexCenter f-menu gap-7 mt-5 font-bold">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
