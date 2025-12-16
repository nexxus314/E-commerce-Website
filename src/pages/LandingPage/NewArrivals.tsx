import ClotheLayout from "../../components/cards/ClotheLayout";
import { useProducts } from "../../components/context/ProductContext";

export const NewArrivals = () => {
  const { products } = useProducts();

  const NewArrivals = products.slice(0,5)

  return (
    <div className="flex flex-col justify-center items-center m-3  p-5">
      <h1 className="text-3xl md:text-5xl font-integral mb-10">NEW ARRIVALS</h1>
       <div className="grid grid-cols-2 gap-4 md:grid-cols-5">

{NewArrivals.map((product) => (
        <ClotheLayout key={product.id} product={product} />
      ))}
</div>

      <button className="rounded-full border-4 border-solid border-gray-100 p-2 w-full md:w-40 hover:shadow-xl hover:scale-105 cursor-pointer">
        View All
      </button>
    </div>
  );
};
