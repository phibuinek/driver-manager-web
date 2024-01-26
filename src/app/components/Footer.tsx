// components/Footer.js
import Image from 'next/image';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <footer id='footer' className=" text-white p-10 bg-footer"   style={{
      backgroundImage: "url('/assets/footer.jpg') ",
      backgroundPosition: "center ", // Thay đổi giá trị ở đây
      //backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Logo and description */}
        <div className='block'>
          <h1 className='text-3xl font-semibold'>Driver Manager</h1>
          <p className="mt-2">Nền tảng tiên phong cung cấp ứng dụng quản lý tài xế dễ sử dụng cho doanh nghiệp được phát triển bởi <b className='italic'>công ty Industrial Embedded Solutions Company Limited</b></p>
          <div className="flex items-center justify-center space-x-4 mt-8">
            <FaFacebook className="text-2xl cursor-pointer" />
            <FaLinkedin className="text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Contact information */}
        <div className='leading-8'>
          <h3 className="font-bold text-lg mb-2">Liên hệ</h3>
          <p className='font-semibold text-xl'>Industrial Embedded Solutions Company Limited</p>
          <p>Trụ sở chính: 36 Đường D5, phường 25 quận Bình Thạnh, thành phố Hồ Chí Minh</p>
          <p>Email: contact@industry.com.vn</p>
          <p>Số điện thoại: +84906862311</p>
        </div>

        {/* Policies */}
        <div className='leading-8'>
          <h3 className="font-bold text-lg mb-2">Chính sách</h3>
          <a href="/Privacy">Chính sách và bảo mật quyền riêng tư</a>
          <h1 className='mt-10 text-xl font-semibold'>Tải ngay</h1>
          <div className='block mt-4'>
            <div className="flex items-center space-x-2">
              <AiFillApple className="text-2xl" />
              <span>App Store</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <AiFillAndroid className="text-2xl" />
              <span>Google Play</span>
            </div>
          </div>
        </div>

        {/* Links to app stores */}

      </div>
      

      {/* Social icons */}
    </footer>
    <div className='bg-green-700 opacity-1 py-2'>
      <div className=' ml-36 text-white'>Copyright 2024 © industry.com.vn</div>
      </div>
    </div>
  );
};

export default Footer;
