// import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
// import Image from 'next/image';
// import { useState } from "react";
// import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation, Pagination} from 'swiper/modules'
// import yourProductImage from '../../../public/assets/Icon (1).svg'; 
// const Carousel = () => {
//   const images = [
//     yourProductImage,
//     yourProductImage,
//     yourProductImage,
//     yourProductImage,
//   ];
//     return (
//       <div>
//         <Swiper
//           navigation
//           pagination={{ type: 'fraction' }}
//           modules={[Navigation, Pagination]}
//           onSwiper={swiper => console.log(swiper)}
//           className='h-96 w-full rounded-lg'
//         >
//           {images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <div className="flex h-full w-full items-center justify-center">
//                   <Image className="block h-full w-full object-cover" src={image.src} alt='product'></Image>
//                 </div>
//               </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     )
//   }
//   export default Carousel
