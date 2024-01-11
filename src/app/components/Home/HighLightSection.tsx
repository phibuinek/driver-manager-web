// components/HighlightSection.js
import Image from 'next/image';
import illustration from '../../../../public/assets/banner/hightlight-img.png'; // Replace with the path to your illustration

const HighlightSection = () => {
  return (
    <div className="flex items-center justify-center bg-green-100 py-12 px-6 md:px-12 m-16">
      {/* Illustration on the left */}
      <div className="hidden md:block md:w-1/2">
        <Image
          src={illustration}
          alt="Illustration"
          width={500} // Adjust based on your actual image's aspect ratio
          height={300} // Adjust based on your actual image's aspect ratio
        />
      </div>

      {/* Text content on the right */}
      <div className="md:w-1/2">
       <div className='py-4'>
       <h2 className="text-3xl font-bold mb-4">ĐIỂM NỔI BẬT</h2>
        <p className="text-lg mb-2 font-light">
          Nền tảng tối ưu dành cho doanh nghiệp lữ khách
        </p>
        <div className='border border-[#2FA060] w-[25%]'></div>
       </div>
        <div className="my-4">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-[#000000]">
              Tối ưu quản lý thành viên
            </h3>
            <p className="mt-2 text-[#000000]">
              Chức năng thêm, xóa sửa các thành viên doanh nghiệp
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-[#000000]">
              An toàn và bảo mật
            </h3>
            <p className="mt-2 text-[#000000]">
              Ứng dụng có chứng nhận bảo mật của quốc tế
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-[#000000]">
              Sử dụng ứng dụng miễn phí
            </h3>
            <p className="mt-2 text-[#000000]">
              Trải nghiệm ứng dụng miễn phí với các tính năng ưu việt
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-[#000000]">
              Quản lý thông kê số liệu rõ ràng
            </h3>
            <p className="mt-2 text-[#000000]">
              Quản lý lượng nhân viên, thông kê doanh thu cho doanh nghiệp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
