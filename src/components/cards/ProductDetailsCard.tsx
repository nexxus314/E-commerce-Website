import { FiMinus, FiPlus } from "react-icons/fi";
import Rating from "../Ui/Rating";
import ProductImages from "./ProductImage";
import type{Product } from "../types/Products"
import {useCart} from "../../components/context/CartContext"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


type Props = {
  product: Product;
};
const ProductDetailsCard = ({ product }:Props) => {
  const {addToCart}= useCart();
  const [quantity,setQuantity]=useState(1)
  const navigate = useNavigate();
  const handleBuyNow = () => {
  addToCart(product, quantity);
  navigate("/cart");
};

  return (
    <div className="max-w-7xl mt-15 mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
         <ProductImages
  images={product.images}
  thumbnail={product.thumbnail}
/>

        </div>

        <div className="flex flex-col justify-center mb-0">
          <h1 className="text-3xl md:text-5xl font-extrabold font-integral uppercase leading-tight mb-2">
            {product.title}
          </h1>

          <div className="flex items-center gap-2 mb-4 text-yellow-500">
            <Rating rating={product.rating} />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold font-[satoshi]">
              ${product.price}
            </h2>
            <span className="text-3xl font-bold text-gray-300 line-through">
              ${product.discountPercentage}
            </span>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
              -40%
            </span>
          </div>

          <p className="text-gray-600 font-[satoshi] leading-relaxed mb-6">
            {product.description}
          </p>

          <hr className="border-gray-200 mb-6" />
           <h3 className="text-gray-500 font-[satoshi] mb-3">
              Tags
            </h3>

          <div className="flex flex-row">
           
            {product.tags.slice(0, 3).map((tag, index) => (
              <div
                key={index}
                className="flex text-center justify-center items-center bg-gray-100 text-gray-400 rounded-full p-3 w-min gap-2 m-2 text-sm font-satoshi hover:bg-gray-500 hover:text-white transition-colors"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="flex w-full gap-4 mt-10">
          <div className="flex items-center justify-between bg-gray-100 rounded-full px-5 py-3 w-[140px]">
            <button className="text-xl hover:text-gray-600"  onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              <FiMinus />
            </button>
            <span className="font-bold text-lg">{quantity}</span>
            <button className="text-xl hover:text-gray-600"  onClick={() => setQuantity((q) => q + 1)}>
              <FiPlus />
            </button>
          </div>

          <button onClick={()=>addToCart(product, quantity)} className="flex-1 bg-black text-white rounded-full py-3 font-bold font-satoshi hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
          <button
  onClick={handleBuyNow}
  className="flex-1 border border-black text-black rounded-full py-3 font-bold"
>
  Buy Now
</button>

        </div>
        </div>

        <hr className="border-gray-200 mb-8" />

        
      </div>
    </div>
  );
};

export default ProductDetailsCard;
