import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";

const NavBar = () => {
  const [sidebarOpen,setsidebarOpen] = useState<boolean>(false);

  function toggleSidebar(){
    setsidebarOpen(!sidebarOpen)
  }

  return (
    <div>
       <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="flex flex-row justify-between m-2 ">
        <div className="flex flex-row gap-2">
        <button className="md:invisible">
          <IoMenu size={30} className=" "onClick={()=>{
          toggleSidebar()
        }} />
        </button>
    
        <h1 className="font-bold font-[IntegralCF] text-3xl md:text-4xl">SHOP.CO</h1>
</div>
        <div className="hidden md:flex flex-row justify-between gap-8 font-[satoshi] rounded-xl ">
          <button className="cursor-pointer">Shop</button> 
          <button className="cursor-pointer"> On Sale </button>
          <button className="cursor-pointer"> New Arrivals </button>
          <button className="cursor-pointer"> Brands </button>
        </div>
        <div className="flex flex-row gap-2 font-[satoshi]">
          
        <CiSearch className="h-10 w-8 " />

        <input
          type="text"
          className="bg-gray-100 p-2 w-full rounded-full hidden md:w-150 md:block text-center"
          placeholder="Search Products..."
        />
        <PiShoppingCartLight className=" h-10 w-8 "/>
        <VscAccount className="h-7 w-7 mt-1.5 md:mt-1.5" />
        </div>
        </div>
      </div>
       {sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-40 z-10 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      <div
        className={`fixed top-14 left-0 h-full w-60 bg-white shadow-xl z-20 font-[satoshi] transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 md:hidden p-6 flex flex-col gap-6`}
      >
        

        <button className="text-left">Shop</button>
        <button className="text-left">On Sale</button>
        <button className="text-left">New Arrivals</button>
        <button className="text-left">Brands</button>
      </div>
    </div>
  );
};

export default NavBar;
