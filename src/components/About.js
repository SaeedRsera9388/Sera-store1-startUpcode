import React from "react";
import "./Style.css";
import About1 from "../assets/pngserasummer.png";
import storeimg1 from "../assets/storeimg1.jpg";
import About2 from "../assets/pngserasummer1.png";
import storeimg2 from "../assets/aboutpeople1.jpg";
import About3 from "../assets/pngserasummer2.png";
import storeimg3 from "../assets/aboutbuilding1.jpg";
import CountUp from "react-countup";
// motion
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  return (
    <div
      className="paddings justify-center py-10 mb-10 flex flex-col"
      id="about"
    >
      {/* About 1 */}
      <div className="flex flex-col sm:flex-row xl:flex">
        <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: "false", amount: 0.7 }}
        className="StoreImg sm:mr-6 xl:mr-10">
          <img
            
            src={storeimg1}
            alt=""
          />
        </motion.div>
        <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: "false", amount: 0.7 }}
        className="flex flex-col text-center justify-center gap-5">
          <div className="flex justify-center py-10">
            <div className="About-horizontal-line "></div>
            <h3 className="text-4xl py">Franchisement </h3>
            <div className="About-horizontal-line "></div>
          </div>

          <h2 className="text-3xl">
            <span className="flex  justify-center gap-10">
              <CountUp end={2500} duration={3} />
              <span>+</span>
            </span>
            Franchise{" "}
          </h2>
          <p className="text-2xl text-black/50 py-10">
            Sera Summer's fictional presence in <b>192 countries highlights </b>
            potential success in key markets. <b>In the US</b>, innovation
            drives consumer appeal; in <b>Japan</b>, quality equals luxury.{" "}
            <b>European nations like France and Italy value its elegance</b>,
            while in emerging markets like <b>Brazil and China</b>, it
            symbolizes status. Though fictitious, Sera Summer underscores the
            importance of tailored global branding strategies.
          </p>
          <div class="message">
            <span class="highlight text-2xl">Discover Our Number</span>
          </div>
        </motion.div>
      </div>

      {/* About 2 */}
      <div className="flex flex-col mt-10 mb-10 sm:flex-row-reverse xl:flex-row">
        <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: "false", amount: 0.7 }}
        className="flex flex-col text-center justify-center gap-5">
          <div className="flex justify-center">
            <div className="About-horizontal-line "></div>
            <h3 className="text-4xl ">Adaptability </h3>
            <div className="About-horizontal-line "></div>
          </div>
          <h2 className="text-3xl">
            Present in
            <span className="flex  justify-center gap-10">
              <CountUp end={192} duration={29} />
              <span>+</span>
            </span>
            Countries
          </h2>

          <p className="text-2xl text-black/50 py-10">
            Sera Summer's fictional presence in <b>192 countries highlights </b>
            potential success in key markets. <b>In the US</b>, innovation
            drives consumer appeal; in <b>Japan</b>, quality equals luxury.{" "}
            <b>European nations like France and Italy value its elegance</b>,
            while in emerging markets like <b>Brazil and China</b>, it
            symbolizes status. Though fictitious, Sera Summer underscores the
            importance of tailored global branding strategies.
          </p>
          <div class="message">
            <span class="highlight text-2xl">Discover Our Moto</span>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: "false", amount: 0.7 }}
        className="StoreImg mt-10 sm:ml-6 xl:ml-10">
          <img src={storeimg2} alt="" />
        </motion.div>
      </div>

      {/* About 3 */}
      <div className="flex flex-col mb-10 sm:flex-row xl:flex-row-reverse mt-10">
        <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: "false", amount: 0.7 }}
        className="flex flex-col text-center justify-center gap-5">
          <div className="flex justify-center">
            <div className="About-horizontal-line "></div>
            <h3 className="text-4xl ">Adaptability </h3>
            <div className="About-horizontal-line "></div>
          </div>

          <h2 className="text-3xl">
            Enhancement and Adaptability in satisfying
            <span className="flex  justify-center gap-1">
              <CountUp end={50} duration={50} />
              <span>M+</span>
            </span>
            customer{" "}
          </h2>
          <p className="text-2xl text-black/50 py-10">
            Sera Summer's fictional presence in <b>192 countries highlights </b>
            potential success in key markets. <b>In the US</b>, innovation
            drives consumer appeal; in <b>Japan</b>, quality equals luxury.{" "}
            <b>European nations like France and Italy value its elegance</b>,
            while in emerging markets like <b>Brazil and China</b>, it
            symbolizes status. Though fictitious, Sera Summer underscores the
            importance of tailored global branding strategies.
          </p>
          <div class="message">
            <span class="highlight text-2xl">Discover Our World</span>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: "false", amount: 0.7 }}
        className="StoreImg mt-10  sm:mr-6 xl:mr-10">
          <img src={storeimg3} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
