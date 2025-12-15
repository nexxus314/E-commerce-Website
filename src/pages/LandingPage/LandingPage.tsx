import NavBar from "../../components/Ui/NavBar";
import picture from "../../assets/HeroSection.png";
import movingStrip from "../../assets/moving_strip.png";
import { NewArrivals } from "./NewArrivals";
import TopSelling from "./TopSelling";
import BrowseByStyle from "./BrowseByStyle";
import CustomerReviews from "./CustomerReviews";
import FooterSection from "../../components/Ui/FooterSection";
import { useNavigate,useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";
const LandingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const newArrivalsRef = useRef<HTMLDivElement | null>(null);
  const scrollToNewArrivals = () => {
    newArrivalsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onSaleRef = useRef<HTMLDivElement | null>(null);

  const scrollToTopsale = () =>{
    onSaleRef.current?.scrollIntoView({behavior:"smooth"})
  }


  useEffect(()=>{
    const scrollTarget = searchParams.get("scroll");
    if(scrollTarget === "new-arrivals"){
      scrollToNewArrivals();
    }
    if(scrollTarget === "top-sale"){
      scrollToTopsale();
    }
  },[searchParams])
  return (
    <>
      <NavBar onNewArrivalsClick={scrollToNewArrivals} onSaleClick={scrollToTopsale} />
      <div className="flex flex-col bg-gray-100 justify-center text-center md:mt-15 md:flex md:flex-row md:grid md:grid-cols-2 gap-4">
        <div className="mx-2 gap-3 mt-30">
          <h1 className="font-integral md:text-5xl text-3xl mx-3 md:mx-10 text-start">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-500 font-satoshi mx-3 md:mx-10 my-5 text-start">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button
            onClick={() => navigate("/explore")}
            className="bg-black flex justify-center md:ml-10 text-center font-satoshi text-white p-4 rounded-full mt-3 w-full md:w-50 mr-10 hover:shadow-xl hover:scale-102 transition ease-in-out duration-400"
          >
            Shop Now
          </button>
          <div className="mt-10 mb-3 grid grid-cols-2 lg:grid-cols-3">
            <div className=" border-2 border-gray-100 border-r-gray-300 p-3">
              <h3 className="text-3xl font-integral font-extrabold">200+</h3>
              <p className="font-satoshi">International Brands</p>
            </div>
            <div className=" border-2 border-gray-100 border-r-gray-300 p-3">
              <h3 className="font-extrabold font-integral text-3xl">2,000+</h3>
              <p className="font-satoshi">High-Quality product</p>
            </div>

            <div className=" border-2 border-gray-100  p-3 col-span-2 lg:col-span-1 lg:justify-self-auto justify-self-center">
              <h3 className="font-extrabold font-integral text-3xl">30,000+</h3>
              <p className="font-satoshi">Happy Customers</p>
            </div>
          </div>
        </div>

        <div>
          <img src={picture} alt="herosection" className="" />
        </div>
      </div>
      <div className="overflow-hidden bg-black">
        <div className="flex w-[200%] animate-infinite-slide">
          <img src={movingStrip} alt="company-strip-1" className="w-1/2" />
          <img src={movingStrip} alt="company-strip-2" className="w-1/2" />
        </div>
      </div>
      <div ref={newArrivalsRef}>
        <NewArrivals />
      </div>
      <div ref={onSaleRef}>
        <TopSelling />
      </div>
      
      <BrowseByStyle />
      <CustomerReviews />
      <FooterSection />
    </>
  );
};

export default LandingPage;
