import ClotheLayout from "../../components/cards/ClotheLayout";

export const NewArrivals = () => {
  return (
    <div className="flex flex-col justify-center items-center m-3  p-5">
      <h1 className="text-3xl md:text-5xl font-[IntegralCf] mb-10">
        NEW ARRIVALS
      </h1>
      <ClotheLayout />

      <button className="rounded-full border-4 border-solid border-gray-100 p-2 w-full md:w-40 hover:shadow-xl hover:scale-105 cursor-pointer">
        View All
      </button>
    </div>
  );
};
