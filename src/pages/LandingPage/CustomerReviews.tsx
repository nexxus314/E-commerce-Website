import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import CustomerReviewCard from "../../components/cards/CustomerReviewCard"

const CustomerReviews = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center m-5 ">
        <h1 className="font-integral text-3xl ml-5">OUR HAPPY CUSTOMERS </h1>
        <div className="flex flex-row justify-end">
          <FaArrowLeft />
          <FaArrowRight />
          </div>

      </div>
      <CustomerReviewCard >
        


  
        </CustomerReviewCard>

    </div>
  );
};

export default CustomerReviews;
