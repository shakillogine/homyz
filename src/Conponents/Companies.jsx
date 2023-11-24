import React from "react";
import img1 from "../images/prologis.png";
import img2 from "../images/tower.png";
import img3 from "../images/equinix.png";
import img4 from "../images/realty.png";

const Companies = () => {
  return (
    <section>
      <div className="paddings innerWidth">
        <div className="flex justify-around items-center img-width">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Companies;
