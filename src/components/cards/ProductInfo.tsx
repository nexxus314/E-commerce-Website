import React from "react";

const ProductInfo = () => {
  return (
    <div>
      <div className="flex flex-col m-2 gap-4 p-3">
        <h1 className="font-satoshi text-xl font-bold">Product Details</h1>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <p>Brand</p>
            <p>Essence</p>
          </div>
          <div>
            <hr className="border-t-1 border-gray-200" />
          </div>
          <div className="flex justify-between">
            <p>SKU</p>
            <p>BEA-ESS-ESS-001</p>
          </div>
          <hr className="border-t-1 border-gray-200" />

          <div className="flex justify-between">
            <p>Weight</p>
            <p>4 kg</p>
          </div>
          <hr className="border-t-1 border-gray-200" />

          <div className="flex justify-between">
            <p>Dimensions</p>
            <p>15.14 × 13.08 × 22.99 cm</p>
          </div>
          <hr className="border-t-1 border-gray-200" />
        </div>
      </div>
      <div className="flex flex-col m-2 gap-4 p-3">
        <h1 className="font-bold font-satoshi text-xl">Shipping Information</h1>
         <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <p>Brand</p>
            <p>Essence</p>
          </div>
          <div>
            <hr className="border-t-1 border-gray-200" />
          </div>
          <div className="flex justify-between">
            <p>SKU</p>
            <p>BEA-ESS-ESS-001</p>
          </div>
          <hr className="border-t-1 border-gray-200" />

          <div className="flex justify-between">
            <p>Weight</p>
            <p>4 kg</p>
          </div>

          
      </div>
      
      </div>
    </div>
  );
};

export default ProductInfo;
