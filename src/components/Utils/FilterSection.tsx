import Black from "../../assets/Black.png";
import Blue from "../../assets/Blue.png";
import Green from "../../assets/Green.png";
import LightBlue from "../../assets/LightBlue.png";
import Orange from "../../assets/Orange.png";
import Pink from "../../assets/Pink.png";
import Red from "../../assets/Red.png";
import White from "../../assets/White.png";
import Yellow from "../../assets/Yellow.png";
import Purple from "../../assets/Purple.png";
import filter from "../../assets/filter.png";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

const FilterSection = () => {
  return (
    <>
      <div className="border-3 border-gray-100 rounded-3xl m-5 w-60 ">
        <div className=" flex flex-row justify-center items-center gap-30 m-5 p-3 border-gray-100 border-b-1 rounded-xl ">
          <h1 className="font-[satoshi] text-lg"> Filters </h1>
          <img src={filter} alt="" className="h-4 w-4" />
        </div>

        <div className="flex flex-col grid grid-cols-1 justify-center items-start font-[satoshi] font-[gray-100] m-5 py-5 border-gray-100 border-b-1 gap-5">
          <div className="flex flex-row justify-center gap-30">
            <p>T-Shirts</p>
            <FaAngleRight className="mt-1" />
          </div>
          <div className="flex flex-row justify-center gap-30 ">
            <p>Shirts</p>
            <FaAngleRight className="mt-1 ml-3" />
          </div>
          <div className="flex flex-row justify-center gap-30">
            <p>Shorts</p>
            <FaAngleRight className="mt-1 ml-2" />
          </div>
          <div className="flex flex-row justify-center gap-30">
            <p>Hoodie</p>
            <FaAngleRight className="mt-1 " />
          </div>
          <div className="flex flex-row justify-center gap-30">
            <p>Jeans</p>
            <FaAngleRight className="mt-1 ml-2" />
          </div>
        </div>
        <div className=" flex flex-row justify-start items-center gap-30 m-4 p-3 rounded-xl ">
          <h1 className="font-[satoshi] text-lg"> Price </h1>
          <FaChevronUp className="" />
        </div>
        <div className="flex justify-center border-gray-100 border-b-1 pb-5">
          <input type="range" className="bg-gray-200  " />
        </div>
        <div className="flex flex-col m-3 p-3">
          <div className="flex flex-row justify-between">
            <p className="text-[satoshi] text-lg">Colors</p>
            <FaChevronUp className="mt-1" />
          </div>

          <div className="flex flex-row h-8 w-8 ml-1 mt-2 gap-1">
            <img src={Black} alt="Black " />
            <img src={Blue} alt="" />
            <img src={Green} alt="" />
            <img src={LightBlue} alt="" />
            <img src={Orange} alt="" />
          </div>
          <div className="flex flex-row h-8 w-8 ml-1 mt-2 gap-1 ">
            <img src={Pink} alt="" />
            <img src={Red} alt="" />
            <img src={White} alt="" />
            <img src={Yellow} alt="" />
            <img src={Purple} alt="" />
          </div>

          <div className="text-[satoshi] text-lg ml-0 m-3 border-gray-100 border-t-1">
            <h3 className="p-2 text-[satoshi] text-xl "> Size </h3>
            <div className="text-sm font-[satoshi] w-full flex flex-wrap gap-2">
              <p className="bg-gray-200 rounded-full p-3 w-max">XXX-Small</p>
              <p className="bg-gray-200 rounded-full p-3 w-max">X-Small</p>{" "}
              <p className="bg-gray-200 rounded-full p-3 w-max">Small</p>
              <p className="bg-gray-200 rounded-full p-3 w-max">Medium</p>{" "}
              <p className="bg-gray-200 rounded-full p-3 w-max">Large</p>{" "}
              <p className="bg-gray-200 rounded-full p-3 w-max">X-Large</p>
              <p className="bg-gray-200 rounded-full p-3 w-max">XX-Large</p>
              <p className="bg-gray-200 rounded-full p-3 w-max">3X-Large</p>
              <p className="bg-gray-200 rounded-full p-3 w-max">4X-Large</p>
            </div>
          </div>
          <div>
            <div className=" flex flex-row justify-center items-center gap-30 border-gray-100 border-b-1 rounded-xl ">
              <h1 className="font-[satoshi] text-lg"> Dress Style </h1>
              <FaChevronUp />
            </div>

            <div className="flex flex-col grid grid-cols-1 justify-center items-start font-[satoshi] font-[gray-100]  py-5 border-gray-100 border-b-1 gap-5">
              <div className="flex flex-row ml-1 gap-30">
                <p>Casual</p>
                <FaAngleRight className="" />
              </div>
              <div className="flex flex-row justify-between gap-30 ">
                <p>Formal</p>
                <FaAngleRight className="" />
              </div>
              <div className="flex flex-row justify-between gap-30">
                <p>Party</p>
                <FaAngleRight className="" />
              </div>
              <div className="flex flex-row justify-between gap-30 ">
                <p>Gym</p>
                <FaAngleRight className="" />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
