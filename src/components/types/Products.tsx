export type Product = {
  id: number;
  title: string;
  description: string;

  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;

  brand: string;
  sku: string;
  category: string;

  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };

  availabilityStatus: string;
  shippingInformation: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  warrantyInformation: string;

  tags: string[];
  thumbnail: string;
  images: string[];

  reviews?: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
};
