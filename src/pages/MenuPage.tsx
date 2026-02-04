import { Card } from "../components/Card";

export const MenuPage = () => {
  return (
    <>
      <div className="w-screen flex justify-center bg-cream md:pt-0 pt-20">
          <div className="h-full md:h-screen flex justify-center  md:justify-between items-center gap-6 flex-wrap">
              <Card />
              <Card />
              <Card />
              <Card />
          </div>
      </div>
    </>
  );
};
