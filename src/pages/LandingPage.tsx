import React from "react";
import kopi from "../assets/Kopi-Front.png";

export const LandingPage = () => {
  return (
    <>
      <div id="container">
        <div className="relative text-center">
          <img
            src={kopi}
            alt="kopi"
            className="md:object-cover w-full object-contain  mix-blend-hard-light"
          />
          <div className="w-full absolute top-50 left-0 text-center mt-10">
            <p className="text-6xl md:text-[260px] font-extrabold mix-blend-plus-lighter opacity-65 text-[#EDECE6] font-montserrat">
              COFFEEMU
            </p>
          </div>
        </div>
      </div>
      <div className="w-20 h-20 bg-red sm:flex md:hidden"></div>
    </>
  );
};
