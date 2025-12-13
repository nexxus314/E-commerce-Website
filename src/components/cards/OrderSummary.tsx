
const OrderSummary = () => {
  return (

    <div className='flex flex-col w-[max] m-2 border-2 rounded-xl border-gray-200 p-5'>
        
        <div className='mb-4'>
            <h2 className='text-2xl font-satoshi font-bold'>Order Summary</h2>
        </div>

        <div className='flex flex-col w-full font-satoshi gap-3 border-gray-200 text-gray-500'>
            <div className="flex justify-between w-full">
                <p>SubTotal</p>
                <p>$0.00</p>
            </div>
            <div className="flex justify-between w-full">
                <p>Discount</p>
                <p>-$0.00</p>
            </div>
            <div className="flex justify-between w-full">
                <p>Delivery Fee</p>
                <p>$15.00</p>
            </div>
        </div>

        <div className='flex justify-between w-full mt-4 pt-4 border-t border-gray-200'>
            <h2 className='font-satoshi font-bold text-xl'>Total</h2>
            <h2 className='font-satoshi font-bold text-xl'>$15.00</h2>
        </div>
   
        <button className='bg-black text-white w-full rounded-full py-4 mt-6 hover:bg-gray-800 transition-colors'>
            Go To Checkout
        </button>

    </div>
  )
}

export default OrderSummary