import { useState } from 'react';

const ProductElement = ({ name, flavour, id, colour, picture }: Product) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMaxed, setIsMaxed] = useState(false);

  const colorMap = {
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    green: 'bg-green-500',
  };

  function handleHover() {
    setIsHovered(true);
  }

  function handleHoverOut() {
    setIsHovered(false);
  }

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      className={`font-poppins h-full w-[34%] hover:cursor-pointer flex flex-col items-center justify-center
      ${isHovered ? colorMap[colour] : 'bg-white'}
      ${isMaxed ? 'animate-maximize' : ''}
      ${isMaxed ? 'absolute top-0 left-0' : ''}`}>

      {/* Juice img */}
      <img
        src={picture}
        alt="bottle"
        className={`mx-auto h-[40vh] ${isHovered ? 'block' : 'hidden'} ${isHovered ? 'animate-scaleUp' : ''}`}
      />

      {/* Info */}
      <div className={`flex flex-col items-start justify-start text-left ${isHovered ? 'text-white' : 'text-black'}`}>
        <p className="text-md text-yellow-500 font-semibold">{id}</p>
        <h2 className="text-3xl">{name}</h2>
        <p>{flavour}</p>
      </div>

      {/* Button */}
      <button
        onClick={() => setIsMaxed(true)}
        className={`p-4 w-[200px] rounded-full shadow-md mt-2 flex items-center justify-center gap-2 ${isHovered ? 'text-white' : 'text-black'}`}>
        <p>View more</p>
        <img src="/arrow-right.svg" alt="arrow-right" className="w-[16px]" />
      </button>

      {/* Back option */}
      <button
        onClick={() => setIsMaxed(false)}
        className={`text-white ${isMaxed ? 'block' : 'hidden'}`}>
        Back
      </button>

    </div>
  );
};

export default ProductElement;
