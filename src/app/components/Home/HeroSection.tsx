// const HeroSection = () => {
//     return (
//       <div className="text-center p-10 bg-green-100">
//         <h1 className="text-4xl font-bold mb-4">Giải pháp cho lĩnh vực quản lý doanh nghiệp Logistic và Shipping đầu tiên của Việt Nam</h1>
//         <p className="mb-6">Some description text...</p>
//         <button className="bg-blue-500 text-white px-6 py-2 rounded">Liên hệ ngay</button>
//       </div>
//     );
//   };
  
//   export default HeroSection;

import Image from "next/image";

const HeroSection = () => {
    return (
      // The main container with padding and background color
      <div className="flex items-center justify-between p-10 bg-white mx-16 mt-10">
        <div className="text-left flex-1">
          <div className="block text-3xl font-bold mb-4 py-4 text-pretty leading-10">
            <h1 className="text-primary font-extrabold text-5xl leading-relaxed">GIẢI PHÁP HIỆU QUẢ</h1>
            <h1 className="text-black">Giúp Quản lý Vận Tải &</h1>
            <h1 className="text-black">Vận hành Đội Xe</h1>
            <h1 className="text-black">cho  Doanh  nghiệp  tại  Việt  Nam</h1>
          </div>
          {/* <p className="mb-6">Mô tả ngắn gọn về dịch vụ...</p> */}
          
          <button className="bg-[#2FA060] text-white px-6 p-3 rounded hover:bg-green-400 transition-colors rounded-xl">
            Liên hệ ngay để trải nghiệm dịch vụ của chúng tôi
          </button>
        </div>
        <div className="flex-1">
          {/* Here you should insert your image component or an img tag referencing your illustration */}
          {/* <img src="/path-to-your-illustration.png" alt="Illustration" /> */}
          <Image src={require("../../../../public/assets/hinhanh.jpg")} alt=""
          width={540}  // Adjust the width as per your requirement
          height={320} // Adjust the height as per your requirement
          layout="responsive" // This will make the image responsive
          />
        </div>
        
      </div>
    );
  };
  
  export default HeroSection;
  