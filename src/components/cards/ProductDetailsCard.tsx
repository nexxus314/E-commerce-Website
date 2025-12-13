import { FiMinus, FiPlus } from "react-icons/fi";
import { FaStar } from "react-icons/fa"; 
import sampleimage from "./sampletshirt.png";

const ProductDetailsCard = () => {

    
    
  return (
    <div className="max-w-7xl mt-15 mx-auto p-4 md:p-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="flex flex-col gap-4">
            <div className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden">
                <img src={sampleimage} alt="Product Main" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex gap-4 overflow-x-auto">
                <img src={sampleimage} alt="Thumb 1" className="w-24 h-24 rounded-xl object-cover border-2 border-black cursor-pointer" />
                <img src={sampleimage} alt="Thumb 2" className="w-24 h-24 rounded-xl object-cover border border-transparent hover:border-black cursor-pointer" />
                <img src={sampleimage} alt="Thumb 3" className="w-24 h-24 rounded-xl object-cover border border-transparent hover:border-black cursor-pointer" />
            </div>
        </div>

        <div className="flex flex-col justify-center">
            
            <h1 className="text-3xl md:text-5xl font-extrabold font-integral uppercase leading-tight mb-2">
                One Life Graphic T-shirt
            </h1>

            <div className="flex items-center gap-2 mb-4 text-yellow-500">
                <div className="flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                <span className="text-gray-500 text-sm font-[satoshi]">4.5/5</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl font-bold font-[satoshi]">$260</h2>
                <span className="text-3xl font-bold text-gray-300 line-through">$300</span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">-40%</span>
            </div>

            <p className="text-gray-600 font-[satoshi] leading-relaxed mb-6">
                The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
            </p>

            <hr className="border-gray-200 mb-6" />

            <div className="mb-6">
                <h3 className="text-gray-500 font-[satoshi] mb-3">Choose Size/Tag</h3>
                <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all font-[satoshi]">Small</button>
                    <button className="px-6 py-3 rounded-full bg-black text-white font-[satoshi]">Medium</button>
                    <button className="px-6 py-3 rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all font-[satoshi]">Large</button>
                    <button className="px-6 py-3 rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all font-[satoshi]">X-Large</button>
                </div>
            </div>

            <hr className="border-gray-200 mb-8" />

            <div className="flex w-full gap-4">
                
                <div className="flex items-center justify-between bg-gray-100 rounded-full px-5 py-3 w-[140px]">
                    <button className="text-xl hover:text-gray-600"><FiMinus /></button>
                    <span className="font-bold text-lg">1</span>
                    <button className="text-xl hover:text-gray-600"><FiPlus /></button>
                </div>

                <button className="flex-1 bg-black text-white rounded-full py-3 font-bold font-satoshi hover:bg-gray-800 transition-colors">
                    Add to Cart
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;