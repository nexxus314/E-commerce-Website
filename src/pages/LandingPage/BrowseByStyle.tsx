import casual from "../../assets/image 11.png"
import formals from  "../../assets/image 12.png"
import party from "../../assets/image 13.png"
import gym from "../../assets/image 14.png"

const BrowseByStyle = () => {
  return (
    <>
      <div className="m-5 p-5 bg-gray-200 rounded-xl">
        
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-integral mb-10 text-center">
          BROWSE BY DRESS STYLE
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 *:rounded-xl ">

          {/* Casual */}
          <div className="relative col-span-1 hover:scale-102 transform-translate ease-in-out duration-300">
            <img 
              src={casual} 
              alt="Casual" 
              className="w-full h-38 md:h-98 object-cover rounded-xl"
            />
            <p className="absolute top-4 left-4 text-black font-bold text-4xl drop-shadow-xl font-satoshi">
              Casual
            </p>
          </div>

          <div className="relative col-span-1 md:col-span-2 hover:scale-102 transform-translate ease-in-out duration-300">
            <img 
              src={formals} 
              alt="Formal" 
              className="w-full md:w-full object-cover rounded-xl"
            />
            <p className="absolute top-4 left-4  font-satoshi text-black font-bold text-4xl drop-shadow-xl">
              Formal
            </p>
          </div>

          <div className="relative col-span-1 md:col-span-2 hover:scale-101 transform-translate ease-in-out duration-300">
            <img 
              src={party} 
              alt="Party" 
              className="w-full object-cover rounded-xl"
            />
            <p className="absolute top-4 left-4 text-w font-bold  font-satoshi text-4xl drop-shadow-xl">
              Party
            </p>
          </div>

          <div className="relative col-span-1 hover:scale-102 transform-translate ease-in-out duration-300">
            <img 
              src={gym} 
              alt="Gym" 
              className="w-full md:h-90 h-38 object-cover rounded-xl"
            />
            <p className="absolute top-4 left-4 text-black font-bold text-4xl  font-satoshi drop-shadow-xl">
              Gym
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default BrowseByStyle;
