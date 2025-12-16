import type { CartItem } from "../types/Cart";

type Props = {
  cart: CartItem[];
};

const OrderSummary = ({ cart }: Props) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discount = 0; // future feature
  const deliveryFee = cart.length > 0 ? 15 : 0;

  const total = subtotal - discount + deliveryFee;

  return (
    <div className="flex flex-col m-2 border-2 rounded-xl border-gray-200 p-5">
      <div className="mb-4">
        <h2 className="text-2xl font-satoshi font-bold">
          Order Summary
        </h2>
      </div>

      <div className="flex flex-col w-full font-satoshi gap-3 text-gray-500">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>

        <div className="flex justify-between">
          <p>Discount</p>
          <p>-${discount.toFixed(2)}</p>
        </div>

        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>${deliveryFee.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
        <h2 className="font-satoshi font-bold text-xl">Total</h2>
        <h2 className="font-satoshi font-bold text-xl">
          ${total.toFixed(2)}
        </h2>
      </div>

      <button className="bg-black text-white w-full rounded-full py-4 mt-6 hover:bg-gray-800 transition-colors">
        Go To Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
