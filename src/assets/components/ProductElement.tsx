import { useState } from 'react';

const ProductElement = ({ name, flavour, id, colour, picture, desc }: Product) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMaxed, setIsMaxed] = useState(false);

  const colorMap : any = {
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
  };

  function handleHoverIn() {
    setIsHovered(true);
  }

  function handleHoverOut() {
    setIsHovered(false);
  }

    return (
        <div
            onMouseOver={handleHoverIn}
            onMouseLeave={handleHoverOut}
            className={`font-poppins h-full w-[34%] hover:cursor-pointer flex flex-col items-center justify-center
      ${isHovered ? colorMap[colour] : 'bg-white'}
      ${isMaxed ? 'animate-maximize absolute top-0 left-0' : 'animate-minimize'}`}>

            {/* Juice img */}
            <img
                src={picture}
                alt="bottle"
                className={`mx-auto h-[40vh] 
        ${isMaxed ? 'absolute z-30' : ''}
        ${isHovered ? 'block animate-scaleUp' : 'hidden'}`}
            />

            {/* Info */}
            <div className={`flex flex-col items-start justify-start text-left gap-2 
        ${isMaxed ? 'absolute bottom-0 left-0 px-8 py-16' : 'block'}
        ${isHovered ? 'text-white' : 'text-black'}`}>
                <p className="text-md text-yellow-500 font-semibold">{id}</p>
                <h2 className="text-3xl">{name}</h2>
                <p>{flavour}</p>
                <div className={`${isMaxed ? 'flex flex-col gap-2' : 'hidden'}`}>
                    <p className='w-[300px] text-sm flex flex-wrap'>{desc}</p>
                    {/* Add to cart btn */}
                    <button
                        onClick={() => { }}
                        className={`p-4 w-[200px] rounded-full shadow-md bg-white text-black outline-none mt-2 flex items-center justify-center gap-2 hover:scale-105 transition-transform ease-in
        ${isMaxed ? 'block' : 'hidden'}`}>
                        <p>Add to cart</p>
                        <img src="/arrow-right.svg" alt="arrow-right" className={`w-[16px]`} />
                    </button>
                </div>
            </div>

            {/* Button */}
            <button
                onClick={() => setIsMaxed(true)}
                className={`p-4 w-[200px] rounded-full shadow-md mt-2 flex items-center justify-center gap-2 
        ${isHovered ? 'text-white' : 'text-black'}
        ${isMaxed ? 'hidden' : 'block'}`}>
                <p>View more</p>
                <img src="/arrow-right.svg" alt="arrow-right" className={`w-[16px]`} />
            </button>

            {/* Price */}
            <p className={`font-poppins text-2xl 
      ${isMaxed ? 'text-white absolute bottom-0 left-1/2 -translate-x-1/2 px-8 py-16' : 'hidden'}`}>3,99€</p>

            {/* Maxed Name */}
            <h3 className={`font-poppins text-[240px] text-white font-bold
        ${isMaxed ? 'block animate-scaleUp' : 'hidden'}`}>{name.split(' ', 1)}
            </h3>

            {/* Back option */}
            <button
                onClick={() => setIsMaxed(false)}
                className={`text-white ${isMaxed ? 'block' : 'hidden'} absolute left-0 top-0 px-8 py-16`}>
                Back
            </button>


        </div>
  );
};

export default ProductElement;
