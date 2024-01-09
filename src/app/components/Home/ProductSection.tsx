


// components/ProductSection.js
import Image from 'next/image';
import yourProductImage from '../../../../public/assets/banner/productDetail.png'; // Replace with the path to your image
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";

const ProductSection = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-16 p-10">
      {/* Navigation arrows and title */}
      <div className="flex items-center justify-between p-4">
        <div className="cursor-pointer items-center">
          {/* Assuming you have SVGs or icons for these arrows */}
          {/* Replace 'LeftArrowIcon' with your actual left arrow icon component */}
          <BsChevronLeft size={50} color="#000" />
        </div>
        <h2 className="text-2xl text-[#252525] font-semibold">Sản phẩm của chúng tôi</h2>
        <div className="cursor-pointer">
          {/* Replace 'RightArrowIcon' with your actual right arrow icon component */}
          <BsChevronRight size={50} color="#000"/>
        </div>
      </div>

      {/* Product image or visual representation */}
      <div className="relative" style={{ height: '500px' }}> {/* Adjust height as needed */}
        <Image
          src={yourProductImage}
          alt="Product Image"
          layout="fill"
          objectFit="contain" // This will make sure the image is scaled correctly
        />
      </div>

      {/* Additional content can go here */}
    </div>
  );
};

export default ProductSection;

// Replace 'LeftArrowIcon' and 'RightArrowIcon' with your actual icon components
// If you're using SVGs as React components, make sure to import them:
// import { ReactComponent as LeftArrowIcon } from '../../../../path-to-icons/left-arrow.svg';
// import { ReactComponent as RightArrowIcon } from '../../../../path-to-icons/right-arrow.svg';


