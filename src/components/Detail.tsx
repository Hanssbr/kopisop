import menu from "../assets/menu-coffe.png"

export const Detail = () => {
  return (
    <>
      <div id="container" className="flex justify-start md:justify-center md:items-center flex-col-reverse md:flex-row">
        <div id="text-detail" className=" pl-5 md:pl-24">
          <div className="w-full">
              <h1 className="font-montserrat font-extrabold text-5xl md:text-8xl text-brown">
                Latte <br />
                Machiato
              </h1>
              <p className="font-montserrat font-semibold text-md w-3/4 md:w-1/2 pt-7 text-brown">
                Caramel Macchiato is a sweet, layered espresso drink featuring
                vanilla syrup, steamed milk, espresso, and a caramel drizzle
              </p>
          </div>

          <div id="button" className="w-45.5 h-12.5 bg-brown flex justify-center items-center rounded-4xl text-white font-montserrat text-2xl font-extrabold mt-10 md:mt-20 md:mb-0 mb-10">Order</div>
        </div>
        <div id="img" className="w-06 h-82 md:w-263 md:h-188 md:mt-0 mt-32">
            <img src={menu} alt="kopi" />
        </div>
      </div>
    </>
  );
};
