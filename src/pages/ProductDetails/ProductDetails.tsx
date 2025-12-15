import ProductDetailsCard from "../../components/cards/ProductDetailsCard";
import NavBar from "../../components/Ui/NavBar";
import FooterSection from "../../components/Ui/FooterSection";
import ProductInfo from "../../components/cards/ProductInfo";
import ReviewSection from "../../components/cards/ReviewSection";
import { useParams } from "react-router-dom";
import { useProducts } from "../../components/context/ProductContext";

const ProductDetails = () => {

  const {id} =useParams();
  const {products} = useProducts();


  const product = products.find(p=> p.id === Number(id))

  if(!product) return <p>Loading...</p>


  return (
    <div>
      <NavBar/>
      <ProductDetailsCard product = {product}/>
      <ProductInfo product = {product}/>
      <ReviewSection reviews={product.reviews}/>
      <FooterSection/>

      
    </div>
  );
};

export default ProductDetails;
