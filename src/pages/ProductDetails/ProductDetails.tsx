import ProductDetailsCard from "../../components/cards/ProductDetailsCard";
import NavBar from "../../components/Ui/NavBar";
import FooterSection from "../LandingPage/FooterSection";
import ProductInfo from "../../components/cards/ProductInfo";
import ReviewSection from "../../components/cards/ReviewSection";
import { useProduct } from "../../hooks/useProduct";
import { useParams } from "react-router-dom";
const ProductDetails = () => {

  const {id}= useParams();
  const { product, loading, error } = useProduct(id);
if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;
  if (!product) return null;
  
}
  return (
    <div>
      <NavBar/>
      <ProductDetailsCard

      data={{
            title: product.title,
            price: product.price,
            originalPrice: product.price + 50,
            discount: "-20%",
            rating: 4.5,
            description: product.description,
            image: product.images[0] 
        }}/>
      <ProductInfo/>
      <ReviewSection/>
      <FooterSection/>

      
    </div>
  );
};

export default ProductDetails;
