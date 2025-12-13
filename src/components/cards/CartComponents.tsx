import image from "./sampletshirt.png";
import { MdOutlineDelete } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi"; 

const CartComponents = () => {
  return (
    <div className="flex w-full items-center p-4 border border-gray-200 rounded-2xl mt-2 mb-4">
       
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={image} 
          alt="T-shirt" 
          className="h-full w-full object-cover object-center" 
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between self-stretch">
        <div className="flex justify-between">
            <div>
                <h3 className="text-lg font-bold font-integral">Gradient Graphic T-shirt</h3>
                <p className="mt-1 text-sm text-gray-500 font-satoshi">Size: <span className="text-black">Large</span></p>
                <p className="text-sm text-gray-500 font-satoshi">Color: <span className="text-black">White</span></p>
            </div>
            
            <button className="text-red-500 hover:text-red-700">
                <MdOutlineDelete size={24} />
            </button>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
            <h4 className="text-xl font-bold font-satoshi">$145</h4>
            
            <div className="flex items-center gap-4 rounded-full bg-gray-100 px-4 py-2">
                <button className="text-xl font-bold cursor-pointer hover:text-gray-600"><FiMinus/></button>
                <span className="font-medium">1</span>
                <button className="text-xl font-bold cursor-pointer hover:text-gray-600"><FiPlus/></button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default CartComponents;