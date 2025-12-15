import ClotheLayout from "../../components/cards/ClotheLayout";
import { useProducts } from "../../components/context/ProductContext";

const TopSelling = () => {
  const {products} = useProducts();
  const TopSelling = products.slice(0,5)
  return (
    <div className="flex flex-col justify-center items-center border-2 border-gray-100 border-b-gray-300 m-3 p-5">
      <h1 className="text-3xl md:text-5xl font-integral my-10">
        Top Selling
      </h1>
      <div className="flex flex-row">
{TopSelling.map((product) => (
        <ClotheLayout key={product.id} product={product} />
      ))}
</div>

      <button className="rounded-full border-4 border-solid border-gray-100 p-2 w-full md:w-40 hover:shadow-xl hover:scale-105 cursor-pointer">
        View All
      </button>
    </div>
  );
};

export default TopSelling;
