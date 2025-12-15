import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
type NavBarProps = {
  onNewArrivalsClick?: () => void;
  onSaleClick?: () => void;
};

const NavBar = ({ onNewArrivalsClick, onSaleClick }: NavBarProps) => {
  const [sidebarOpen, setsidebarOpen] = useState<boolean>(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState<boolean>(false);
  function toggleSidebar() {
    setsidebarOpen(!sidebarOpen);
  }
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnNewArrivalsClick = () => {
    if (location.pathname === "/") {
      onNewArrivalsClick?.();
    } else {
      navigate("/?scroll=new-arrivals");
    }
  };
  const handleTopSaleClick = () => {
    if (location.pathname === "/") {
      onSaleClick?.();
    } else {
      navigate("/?scroll=top-sale");
    }
  };
  const handleShopClick = () => {
    if (location.pathname === "/explore") {
      return;
    } else {
      navigate("/explore");
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="flex flex-row justify-between m-2 ">
          <div className="flex flex-row gap-2">
            <button className="md:invisible">
              <IoMenu
                size={30}
                className=" "
                onClick={() => {
                  toggleSidebar();
                }}
              />
            </button>

            <h1
              onClick={() => navigate("/")}
              className="font-bold font-integral text-3xl md:text-4xl"
            >
              SHOP.CO
            </h1>
          </div>
          <div className="hidden md:flex flex-row justify-between gap-8 font-satoshi rounded-xl ">
            <button onClick={handleShopClick} className="cursor-pointer">
              Shop
            </button>
            <button onClick={handleTopSaleClick} className="cursor-pointer">
              On Sale
            </button>
            <button
              onClick={handleOnNewArrivalsClick}
              className="cursor-pointer"
            >
              
              New Arrivals
            </button>
          </div>
          <div className="flex flex-row gap-2 font-satoshi">
            <CiSearch
              className="h-10 w-8 md:hidden"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            />
            <CiSearch className="h-10 w-8 hidden md:block" />
            {mobileSearchOpen && (
              <input
                type="text"
                className="bg-gray-100 p-2 w-full rounded-full md:w-150 md:block text-center"
                placeholder="Search product..."
              />
            )}
            <input
              type="text"
              className="bg-gray-100 p-2 w-150 rounded-full hidden md:block text-center"
              placeholder="Search product..."
            />
            <PiShoppingCartLight
              onClick={() => navigate("/cart")}
              className=" h-10 w-8 "
            />
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
        className={`fixed top-14 left-0 h-full w-60 bg-white shadow-xl z-20 font-satoshi transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 md:hidden p-6 flex flex-col gap-6`}
      >
        <button onClick={handleShopClick} className="text-left">
          Shop
        </button>
        <button onClick={handleTopSaleClick} className="text-left">
          On Sale
        </button>
        <button onClick={handleOnNewArrivalsClick} className="text-left">
          New Arrivals
        </button>
      </div>
    </div>
  );
};

export default NavBar;
