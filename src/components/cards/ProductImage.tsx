import { useState } from "react";
type Props = {
  images: string[];
  thumbnail: string;
};


const ProductImages = ({ images, thumbnail }:Props) => {
  const [selectedImage, setSelectedImage] = useState(
    images?.[0] || thumbnail
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-[450px] bg-gray-100 rounded-2xl overflow-hidden">
        <img
          src={selectedImage}
          alt="Selected product"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex justify-center gap-3 overflow-x-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className={`w-24 h-24 rounded-xl object-cover cursor-pointer border
              ${
                selectedImage === img
                  ? "border-black"
                  : "border-transparent hover:border-black"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
