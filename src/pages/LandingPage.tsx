import kopi from "../assets/Kopi-Front.png";

export const LandingPage = () => {
  return (
    <>
      <div id="container">
        <div className="relative text-center">
          <div className="w-full h-screen md:h-auto overflow-hidden">
            <img
              src={kopi}
              alt="kopi"
              className="w-full h-full object-cover md:object-contain mix-blend-hard-light object-center"
            />
          </div>

          <div className="md:w-full md:absolute top-50 left-0 text-center mt-10 hidden">
            <p className="warp-break-word text-9xl md:text-[260px] font-extrabold mix-blend-plus-lighter opacity-65 text-[#EDECE6] font-montserrat">
              COFFEEMU
            </p>
          </div>
          <div className="md:w-full md:hidden absolute top-30 left-0 text-center mt-10">
            <p className="warp-break-word text-9xl md:text-[260px] font-extrabold mix-blend-plus-lighter opacity-65 text-[#EDECE6] font-montserrat">
              CO
            </p>
            <p className="warp-break-word text-9xl md:text-[260px] font-extrabold mix-blend-plus-lighter opacity-65 text-[#EDECE6] font-montserrat">
              FF
            </p>
            <p className="warp-break-word text-9xl md:text-[260px] font-extrabold mix-blend-plus-lighter opacity-65 text-[#EDECE6] font-montserrat">
              EE
            </p>
            <p className="warp-break-word text-9xl md:text-[260px] font-extrabold mix-blend-plus-lighter opacity-65 text-[#EDECE6] font-montserrat">
              MU
            </p>
          </div>
        </div>
      </div>
      <div className="w-20 h-20 bg-red sm:flex md:hidden"></div>
    </>
  );
};
