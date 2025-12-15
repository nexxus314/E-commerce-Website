import React from "react";
import CartComponents from "../../components/cards/CartComponents";
import OrderSummary from "../../components/cards/OrderSummary";
import FooterSection from "../../components/Ui/FooterSection";
import NavBar from "../../components/Ui/NavBar";
const CustomerCart = () => {
  return (
    <>
<NavBar/>    
      <div className="mt-20">
                        <h1 className="text-3xl font-integral m-2 ml-3">YOUR CART</h1>


        <div className="flex flex-col lg:grid grid-cols-2 justify-center m-3 p-2 gap-4">
        <CartComponents/>
        

        <OrderSummary/>
</div>
        <FooterSection/>

      </div>
    </>
  );
};

export default CustomerCart;
