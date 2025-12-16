type Review = {
  name: string;
  rating: number;
  comment: string;
};

type Props = {
  review: Review;
};

const CustomerReviews = ({ review }: Props) => {
  return (
    <div className="m-10">
      <h2 className="text-2xl font-integral mb-4">Customer Reviews</h2>

      <div className="p-4 border rounded-xl">
        <p className="font-satoshi font-bold">{review.name}</p>
        <p className="font-satoshi text-sm text-gray-500">
          ⭐ {review.rating}/5
        </p>
        <p className="font-satoshi mt-2">{review.comment}</p>
      </div>
    </div>
  );
};

export default CustomerReviews;
