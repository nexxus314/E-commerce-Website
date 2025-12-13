import sampleimage from "../components/cards/sampletshirt.png"; 

export const PRODUCTS = [
  {
    id: 1,
    title: "One Life Graphic T-shirt",
    price: 260,
    originalPrice: 300,
    discount: "-40%",
    rating: 4.5,
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    image: sampleimage,
    category: "T-shirt",
    tags: ["Fashion", "Casual"],
    stock: "In Stock"
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    price: 180,
    originalPrice: 220,
    discount: "-20%",
    rating: 4.0,
    description: "High quality denim jeans with a perfect skinny fit for modern style.",
    image: sampleimage, // Reuse image for now or add a new one
    category: "Jeans",
    tags: ["Denim", "Pants"],
    stock: "Low Stock"
  }
];