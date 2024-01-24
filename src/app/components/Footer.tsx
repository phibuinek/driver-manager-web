// components/Footer.js
import Image from 'next/image';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';

const Footer = () => {
  return (
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
          <p className="mt-2">Nền tảng tiên phong cho doanh nghiệp</p>
          <div className="flex items-center justify-center space-x-4 mt-8">
            <FaFacebook className="text-2xl cursor-pointer" />
            <FaLinkedin className="text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Contact information */}
        <div className='leading-8'>
          <h3 className="font-bold text-lg mb-2">Liên hệ</h3>
          <p>Trụ sở chính: Lầu 23, Tòa nhà Green Home, 7A Thoại Ngọc Hầu, quận Tân Bình, thành phố Hồ Chí Minh</p>
          <p>Email: ies@atomsolution.vn</p>
          <p>Số điện thoại: 1900 3353</p>
        </div>

        {/* Policies */}
        <div className='leading-8'>
          <h3 className="font-bold text-lg mb-2">Chính sách</h3>
          <p>Bảo mật cho người sử dụng</p>
          <p>Chính sách quyền riêng tư</p>
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
  );
};

export default Footer;
