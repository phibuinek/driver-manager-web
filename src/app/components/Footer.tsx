// components/Footer.js
import Image from 'next/image';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div>
          <Image src={require("../../../public/assets/logo/logo-app.png")} alt="Logo" width={50} height={50} />
          <h2 className="text-xl font-bold">Driver Management</h2>
          <p className="mt-2">Nền tảng tiên phong cho doanh nghiệp</p>
        </div>

        {/* Contact information */}
        <div>
          <h3 className="font-bold text-lg mb-2">Liên hệ</h3>
          <p>Trụ sở chính: Lầu 23, Tòa nhà Green Home, 7A Thoại Ngọc Hầu, quận Tân Bình, thành phố Hồ Chí Minh</p>
          <p>Email: ies@atomsolution.vn</p>
          <p>Số điện thoại: 1900 3353</p>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-bold text-lg mb-2">Chính sách</h3>
          <p>Bảo mật cho người sử dụng</p>
          <p>Chính sách quyền riêng tư</p>
        </div>

        {/* Links to app stores */}
        <div>
          <h3 className="font-bold text-lg mb-2">Đã có trên</h3>
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

      {/* Social icons */}
      <div className="flex justify-center space-x-4 mt-8">
        <FaFacebook className="text-2xl cursor-pointer" />
        <FaLinkedin className="text-2xl cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
