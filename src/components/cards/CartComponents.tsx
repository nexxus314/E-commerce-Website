import { MdOutlineDelete } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import type { CartItem } from "../../components/types/Cart";
import { useCart } from "../../components/context/CartContext";

type Props = {
  cart: CartItem[];
};

const CartComponents = ({ cart }: Props) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p className="flex text-center justify-center items-center p-16 text-xl font-integral border-1 border-gray-200 rounded-lg">Your cart is empty 🛒</p>;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {cart.map(({ product, quantity }) => (
        <div
          key={product.id}
          className="flex w-full items-center p-4 border border-gray-200 rounded-2xl"
        >
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold font-integral">
                {product.title}
              </h3>

              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500 hover:text-red-700"
              >
                <MdOutlineDelete size={22} />
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <h4 className="text-xl font-bold font-satoshi">
                ${product.price}
              </h4>

              <div className="flex items-center gap-4 rounded-full bg-gray-100 px-4 py-2">
                <button
                  onClick={() => decreaseQty(product.id)}
                  className="text-xl font-bold hover:text-gray-600"
                >
                  <FiMinus />
                </button>

                <span className="font-medium">{quantity}</span>

                <button
                  onClick={() => increaseQty(product.id)}
                  className="text-xl font-bold hover:text-gray-600"
                >
                  <FiPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartComponents;
