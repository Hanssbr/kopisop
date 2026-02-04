import coffe from "../assets/coffe-list.png";

export const Card = () => {
  return (
    <>
      <div id="container" className="">
        <div
          id="list"
          className="h-97 w-62.5 bg-brown rounded-3xl shadow-xl shadow-brown"
        >
          <div className="flex flex-col ">
            <img
              src={coffe}
              alt="kopi"
              className="object-cover items-center pt-8"
            />
            <p className="font-semibold font-montserrat text-white text-2xl flex justify-start pl-5">
              Latte
              <br />
              Machiato
            </p>
            <div className="w-full flex justify-center pt-5">
              <div className="w-50 h-9 bg-[#FFF6E1] rounded-[200px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
