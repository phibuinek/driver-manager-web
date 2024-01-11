


// components/ProductSection.js
import Image from 'next/image';
import yourProductImage from '../../../../public/assets/banner/productDetail.png'; // Replace with the path to your image
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import { Zoom } from 'react-slideshow-image';
// import Carousel from '../carousel.component';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ProductSection = () => {
  const images = [
    yourProductImage,
    yourProductImage,
    yourProductImage,
    yourProductImage,
  ];
  const zoomInProperties = {
    scale:0.75,
    duration:500,
    transitionDuration:800,
    infinity:true,

    preArrow: (
      <div className='ml-10 top-40 '>
        <BsChevronLeft className='cursor-pointer' size={50} color="#000" />
      </div>
    ),
    nextArrow: (
      <div className='mr-10'>
        <BsChevronLeft className='cursor-pointer' size={50} color="#000" />
      </div>
    )
  }
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-16 p-10">
      {/* Navigation arrows and title */}
      <div className="flex items-center justify-between p-4">
        <div className="cursor-pointer items-center">
          {/* Assuming you have SVGs or icons for these arrows */}
          {/* Replace 'LeftArrowIcon' with your actual left arrow icon component */}
          {/* <BsChevronLeft size={50} color="#000" /> */}
        </div>
        <h2 className="text-2xl text-[#252525] font-semibold">Sản phẩm của chúng tôi</h2>
        <div className='border border-[#2FA060]'></div>
        <div className="cursor-pointer">
          {/* Replace 'RightArrowIcon' with your actual right arrow icon component */}
          {/* <BsChevronRight size={50} color="#000"/> */}
        </div>
      </div>

      {/* Product image or visual representation */}

      <div className="flex relative justify-center items-center"> {/* Adjust height as needed */}
        {/* <Image
          src={yourProductImage}
          alt="Product Image"
          layout="fill"
          objectFit="contain" // This will make sure the image is scaled correctly
        />
=======
      <div className="relative h-[500px] w-full"> {/* Adjust height as needed */}

        <Image
          src={yourProductImage}
          alt="Product Image"
          layout="fill"
          objectFit="contain" // This will make sure the image is scaled correctly
        />
        <Image
          src={yourProductImage}
          alt="Product Image"
          layout="fill"
          objectFit="contain" // This will make sure the image is scaled correctly
        /> */}
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper items-center absolute flex justify-center"
      >
        <SwiperSlide>
          <Image className='object-cover block w-[100%] h-[100%]' src={yourProductImage} alt='Product Image'></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image className='object-cover block w-[100%] h-[100%]' src={yourProductImage} alt='Product Image'></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image className='object-cover block w-[100%] h-[100%]' src={yourProductImage} alt='Product Image'></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image className='object-cover block w-[100%] h-[100%]' src={yourProductImage} alt='Product Image'></Image>
        </SwiperSlide>
      </Swiper>
      </div>

      {/* Additional content can go here */}
    </div>
  );
};

export default ProductSection;



