import ClotheLayout from "../../components/cards/ClotheLayout";

const TopSelling = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-100 border-b-gray-300 m-3 p-5">
      <h1 className="text-3xl md:text-5xl font-[IntegralCf] my-10">
        Top Selling
      </h1>

      <ClotheLayout />

      <button className="rounded-full border-4 border-solid border-gray-100 p-2 w-full md:w-40 hover:shadow-xl hover:scale-105 cursor-pointer">
        View All
      </button>
    </div>
  );
};

export default TopSelling;
