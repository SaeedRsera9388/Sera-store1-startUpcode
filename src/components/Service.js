import React from "react";
import "./Style.css";

const Service = () => {
  return (
    <section className="s-wrapper" id="service">
      <div className="s-container relative flex justify-center flex-col paddings">
        <div>
          <h2 className="py-2 paddings flex justify-center text-pink-700 text-7xl sm:text-5xl xl:text-7xl">
            Our Goals
          </h2>
          <p className="justify-center text-center m-5 text-3xl sm:text-xl xl:text-3xl">
            we are ready to support at our best services at{" "}
            <span className="text-pink-700">your disposal</span> we believe a
            good place makes a <span className="text-pink-700">good spirit</span> for{" "}
            <span className="text-pink-700">glorious purposes</span>
            Our <span className="text-pink-700">vision surpasses</span> ones
            mind when the desired properties are found,{" "}
            <span className="text-pink-200 sm:text-xl xl:text-3xl">
              explore your world of dreamy
            </span>
          </p>
        </div>

        <div className="flex flex-col justify-center text">
          <h2 className="text-2xl text-black/40 flex justify-center py-6 sm:text-lg xl:text-2xl">
            {" "}
            Saeed Ranjbari - Founder and chief executive officer
          </h2>

    

          <div class="message">
            <span class="highlight text-2xl">
              Read the message from our Founder
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
