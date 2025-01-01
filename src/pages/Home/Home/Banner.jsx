import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-banner flex justify-evenly items-center lg:h-[1000px] h-[400px] md:h-[600px]">
      <div className="container mx-auto relative flex items-center w-full h-full">
        <div
          data-aos="zoom-in-down"
          data-aos-delay="300"
          data-aos-duration="2000"
          className="absolute md:left-10 left-5 lg:left-24 md:w-60 md:h-72 w-36 h-40 rounded-md"
        >
          <div className=" w-full relative h-full  bottom-4 left-4 md:bottom-1/4 md:left-1/4 bg-[#241d1d7a] rounded-md">
            <h1 className="text-center md:text-7xl text-3xl font-bold break-words text-[#239abe]">
              BooM Auto
            </h1>
            <p className="lg:text-lg text-base lg:font-semibold my-1 md:my-3 text-center text-cyan-600">
              Get Exclusive Discount..
            </p>
            <Link
              to="/allToys"
              className="md:py-2 w-full absolute block text-center  py-1 btn-hover  bottom-0 text-base lg:text-xl font-normal md:font-semibold rounded-md bg-[#293f9062] text-[#68dcff]"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
