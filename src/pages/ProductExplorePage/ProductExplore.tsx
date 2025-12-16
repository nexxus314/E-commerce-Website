import NavBar from "../../components/Ui/NavBar";
import FooterSection from "../../components/Ui/FooterSection";
import { useProducts } from "../../components/context/ProductContext";
import { useNavigate } from "react-router-dom";
import ClotheLayout from "../../components/cards/ClotheLayout";

const ProductExplore = () => {
  const { products } = useProducts(); 
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-15">
        <NavBar />
      </div>
      

      <div className="grid grid-cols-2 lg:grid-cols-4  ">
        {products.map((product) => (
          <ClotheLayout
            key={product.id}
            product={product}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
      </div>

      <FooterSection />
    </div>
  );
};

export default ProductExplore;
