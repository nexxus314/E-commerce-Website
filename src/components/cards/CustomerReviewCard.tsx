import { FaStar } from "react-icons/fa";

const CustomerReviewCard = () => {
  return (
    <>
      <div className="border-2 border-solid rounded-lg border-gray-100 shadow-sm flex flex-col items-center p-5 m-10 justify-center gap-2 text-center w-min hover:scale-102 hover:shadow-xl font-satoshi">
        <div className="flex items-center gap-2 mb-4 text-yellow-500">
          <div className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        
        <h1 className="font-integral text-xl">Eleanor Colins</h1>
        <p className="text-gray-600">email@email.com</p>

        <p className="text-gray-900 text-lg">"random review"</p>
        <p className="text-gray-600">Posted on April 30,2035</p>
      </div>
    </>
  );
};

export default CustomerReviewCard;
