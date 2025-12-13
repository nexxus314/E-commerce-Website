
import sampleimage from "./sampletshirt.png"

const ClotheLayout = () => {
  return (
    <div className='flex- flex-col justify-center gap-2 m-2'>
    <div className='rouned-xl mb-2'>
        <img src={sampleimage} alt="" className='border-1 border-gray-200 rounded-xl h-59 w-58 hover:scale-105 ease-in-out duration-300' />
        </div>
        <div className='gap-3'>
        <h3 className='font-satoshi text-black'>T-SHIRT WITH TAPE DETAILS</h3>
        <p>rating stars</p>
        <h1 className='font-satoshi text-xl text-black'>$100</h1>
    </div>

    </div>

  )
}

export default ClotheLayout