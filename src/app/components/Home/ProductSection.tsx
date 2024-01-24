


// components/ProductSection.js
import Image from 'next/image';
import yourProductImage from '../../../../public/assets/1.jpg';
import yourProductImage1 from '../../../../public/assets/2.jpg';
import yourProductImage2 from '../../../../public/assets/3.jpg';
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
    yourProductImage1,
    yourProductImage2,
  ];
  const zoomInProperties = {
    scale:0.75,
    duration:500,
    transitionDuration:800,
    infinity:true,

    // preArrow: (
    //   <div className='ml-10 top-40 '>
    //     <BsChevronLeft className='cursor-pointer' size={50} color="#000" />
    //   </div>
    // ),
    // nextArrow: (
    //   <div className='mr-10'>
    //     <BsChevronLeft className='cursor-pointer text-green-400' size={50} color="#000" />
    //   </div>
    // )
  }
  return (
    <div id='product' className="bg-white shadow-2xl rounded-lg border-gray-300 overflow-hidden m-20 p-20">
      {/* Navigation arrows and title */}
      <div className="flex items-center justify-between p-4 ml-12">
        <h2 className="mb-10 md:ml-48 text-center text-4xl font-semibold border-2 bg-button py-2 px-48 rounded-full text-white">SẢN PHẨM</h2>
        {/* <div className='border border-[#2FA060]'></div> */}
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

        {/* <Image
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
        />  */}
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
        <Image className='object-cover block w-[100%] h-[100%]' src={yourProductImage1} alt='Product Image'></Image>
        </SwiperSlide>
        <SwiperSlide>
        <Image className='object-cover block w-[100%] h-[100%] text-green-300' src={yourProductImage2} alt='Product Image'></Image>
        </SwiperSlide>
      </Swiper>
      </div>

      {/* Additional content can go here */}
    </div>
  );
};

export default ProductSection;



