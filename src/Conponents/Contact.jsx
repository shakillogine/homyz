import React from "react";
import img from "../images/contact.jpg";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill, BsFillChatRightFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="c-warpper" id="contact">
      <div className="padding innerWidth flexCenter c-container p-7 ">
        {/* //  left side */}
        <div className="flexColStart left">
          <span className="orangeText text-2xl">Our Contact Us</span>
          <span className="primaryText text-4xl">Easy to contact us</span>
          <span className="secondaryText newbor">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="flexStart contactModes">
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
          </div>

          <div className="flexStart contactModes">
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatRightFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* //  right side */}
        <div className="right">
          <div className="image-container ml-auto">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
