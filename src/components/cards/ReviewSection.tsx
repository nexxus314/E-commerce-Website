import CustomerReviewCard from "./CustomerReviewCard";

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type Props = {
  reviews: Review[];
};

const ReviewSection = ({ reviews }: Props) => {
  if (reviews.length === 0) {
    return (
      <p className="text-center text-gray-500 font-satoshi">
        No reviews yet
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
           {reviews.map((review, index) => (
        <CustomerReviewCard key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewSection;
