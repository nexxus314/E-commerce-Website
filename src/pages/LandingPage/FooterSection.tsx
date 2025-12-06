
const FooterSection = () => {
  return (
   <>
   <footer className="w-full bg-[#F0F0F0] pt-20 pb-10 px-6 md:px-12 lg:px-20">

  <div className="bg-black text-white rounded-2xl px-8 py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
    <h2 className="text-3xl md:text-4xl font-[satoshi] leading-tight max-w-lg">
      STAY UP TO DATE ABOUT OUR LATEST OFFERS
    </h2>

    <div className="flex flex-col gap-3 w-full md:w-1/3">
      <div className="flex items-center gap-3 bg-white rounded-full p-3 font-[satoshi]">
        <input 
          type="email" 
          placeholder="Enter your email address"
          className="flex-1 text-black outline-none"
        />
      </div>

      <button className="bg-white text-black font-[satoshi] py-3 rounded-full hover:bg-gray-100">
      </button>
    </div>
  </div>


  <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-10 text-gray-700">

    <div className="col-span-2 md:col-span-1">
      <h3 className="text-2xl font-[IntegralCF] mb-3">SHOP.CO</h3>
      <p className="text-sm text-gray-600 max-w-xs font-[satoshi]">
        We have clothes that suit your style and which you're proud to wear. From women to men.
      </p>

      <div className="flex gap-3 mt-5">
        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">🐦</span>
        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">📸</span>
        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">🎵</span>
      </div>
    </div>

    <div>
      <h4 className="font-[satoshi] mb-3">COMPANY</h4>
      <ul className="space-y-2 text-sm font-[satoshi]">
        <li>About</li>
        <li>Features</li>
        <li>Works</li>
        <li>Career</li>
      </ul>
    </div>

    <div>
      <h4 className="font-[satoshi] mb-3">HELP</h4>
      <ul className="space-y-2 text-sm font-[satoshi]">
        <li>Customer Support</li>
        <li>Delivery Details</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div>
      <h4 className="font-[satoshi] mb-3">FAQ</h4>
      <ul className="space-y-2 text-sm font-[satoshi]">
        <li>Account</li>
        <li>Manage Deliveries</li>
        <li>Orders</li>
        <li>Payments</li>
      </ul>
    </div>

    <div>
      <h4 className="font-[satoshi] mb-3">RESOURCES</h4>
      <ul className="space-y-2 text-sm font-[satoshi]">
        <li>Free eBooks</li>
        <li>Development Tutorial</li>
        <li>How-to Blog</li>
        <li>YouTube Playlist</li>
      </ul>
    </div>
  </div>

  <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-500 font-[satoshi]">
    <p>Shopco © 2000–2023, All Rights Reserved</p>

    <div className="flex gap-3 mt-3 md:mt-0">
      <img src="visa.svg" className="h-6" />
      <img src="paypal.svg" className="h-6" />
      <img src="applepay.svg" className="h-6" />
      <img src="googlepay.svg" className="h-6" />
    </div>
  </div>

</footer>
</>
  )
}

export default FooterSection