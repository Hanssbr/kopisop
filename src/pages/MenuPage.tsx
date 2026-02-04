import { Card } from "../components/Card";

export const MenuPage = () => {
  return (
    <>
      <div className="w-screen flex justify-center bg-[#FFF6E1]">
          <div className="h-screen flex justify-between items-center gap-6 flex-wrap">
              <Card />
              <Card />
              <Card />
              <Card />
          </div>
      </div>
    </>
  );
};
