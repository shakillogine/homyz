import React from "react";
import img from "../images/value.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { valuMe } from "../map";

const Valu = () => {
  return (
    <section id="value">
      <div className="paddings innerWidth  v-container !flex">
        {/* /left side */}
        <div className="v-left max-lg:mt-[-40px]">
          <div className="image-container lg:mr-10">
            <img src={img} alt="" />
          </div>
        </div>

        {/* ///right side */}
        <div className="flexColStart v-right max-lg:mt-7">
          <span className="orangeText text-2xl font-bold">Our Value</span>
          <span className="primaryText text-4xl pt-3 pb-4">
            Value We Give to You
          </span>
          <span className="secondaryText font-medium">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {valuMe.map((item, i) => {
              return (
                <AccordionItem className="accordionItem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={29} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText p-6 font-medium">
                      {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Valu;
