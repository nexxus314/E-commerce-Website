import type {Product} from "../types/Products"
import Rating from "../Ui/Rating"
import { useNavigate } from "react-router-dom";
type Props={
  product: Product;
  onClick?:()=> void;
}


const ClotheLayout = ({product,onClick}:Props) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)} className='flex flex-col m-1 rounded-xl gap-5 p-2 hover:scale-105 ease-in-out duration-300'>
    <div className='rounded-xl flex justify-center ' onClick={onClick}>
        <img src={product.thumbnail} alt="" className='rounded-xl bg-gray-200 h-50 md:h-60 w-70 ease-in-out duration-300' />
        </div>
        <div className='gap-3 ml-5'>
        <h3 className='font-satoshi text-black font-bold'>{product.title}</h3>
        <Rating rating={product.rating} />
        <h1 className='font-satoshi text-xl text-black font-bold'>${product.price}</h1>
        
    </div>

    </div>

  )
}

export default ClotheLayout