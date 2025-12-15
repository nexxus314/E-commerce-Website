import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type Props = {
  rating: number; // 0 → 5
};

const Rating = ({ rating }: Props) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
      <span className="text-sm font-satoshi text-gray-600 ml-1">{rating}/5</span>
    </div>
  );
};

export default Rating;
