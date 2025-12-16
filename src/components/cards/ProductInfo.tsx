import InfoRow from "./InfoRow";

type Props = {
  product: Product;
};

const ProductInfo = ({ product }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">

      <div className="flex justify-center gap-16 text-gray-500 font-satoshi mb-8">
        <span className="font-bold text-black border-b-2 border-black pb-2">
          Product Details
        </span>
        <span>Rating & Reviews</span>
      </div>

      <hr className="mb-10" />

      <div className="grid md:grid-cols-3 gap-10 font-satoshi">

        <div>
          <h3 className="font-bold text-lg mb-6">Product Details</h3>

          <InfoRow label="Brand" value={product.brand} />
          <InfoRow label="SKU" value={product.sku} />
          <InfoRow label="Weight" value={`${product.weight} kg`} />
          <InfoRow
            label="Dimensions"
            value={`${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm`}
          />
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Shipping Information</h3>

          <InfoRow label="Status" value={product.availabilityStatus} />
          <InfoRow label="Shipping" value={product.shippingInformation} />
          <InfoRow
            label="Min Order Qty"
            value={product.minimumOrderQuantity.toString()}
          />
          <InfoRow label="Return Policy" value={product.returnPolicy} />
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Additional Info</h3>

          <InfoRow label="Category" value={product.category} />
          <InfoRow label="Tags" value={product.tags.join(", ")} />
          <InfoRow label="Warranty" value={product.warrantyInformation} />
          <InfoRow label="Stock" value={product.stock.toString()} />
        </div>

      </div>
    </div>
  );
};

export default ProductInfo;
