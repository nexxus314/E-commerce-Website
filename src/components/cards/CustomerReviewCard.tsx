import { FaStar } from "react-icons/fa";


type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type Props = {
  review: Review[];
};

const CustomerReviewCard = ({review}:Props) => {
  return (
    <>
      <div className="border-2 border-solid rounded-lg border-gray-100 shadow-sm flex flex-col items-center p-5 m-10 justify-center gap-2 text-center w-min hover:scale-102 hover:shadow-xl font-satoshi">
        <div className="flex items-center gap-2 mb-4 text-yellow-500">
         {Array.from({ length: review.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
        </div>
        
        <h1 className="font-integral text-lg">{review.reviewerName}</h1>
      <p className="text-gray-500 text-sm">{review.reviewerEmail}</p>


        <p className="text-gray-900 text-lg">"{review.comment}"</p>
        <p className="text-gray-600">Posted on {new Date(review.date).toLocaleDateString()}</p>
      </div>
    </>
  );
};

export default CustomerReviewCard;
