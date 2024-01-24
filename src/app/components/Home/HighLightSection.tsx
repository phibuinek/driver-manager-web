// components/HighlightSection.js
import Image from 'next/image';
import illustration from '../../../../public/assets/banner/hightlight-img.png'; // Replace with the path to your illustration

const HighlightSection = () => {
  return (
    <div className='items-center justify-center text-center'>
        <div className=' items-center justify-center flex bg-button border-2 text-white text-3xl py-4 rounded-2xl font-semibold mx-96'>ĐẶC ĐIỂM NỔI BẬT</div>
        <div className='grid grid-cols-4 gap-10 mx-14'>
            <div className='col-span-1 mt-10'>
              <div className='rounded-lg bg-gray-200 shadow-2xl shadow-gray-400 mix-blend-darken'>
                {/* <div className='rounded-lg bg-green-400 mx-10 py-2 my-4 text-white'>TỐI ƯU QUẢN LÝ THÀNH VIÊN</div> */}
                <div className='flex  text-center justify-center'>
                    <div className='rounded-lg bg-gradient-to-r from-[#21d6b9] to-[#65de76] py-2 mt-6 mb-4 px-4 text-white'>TỐI ƯU QUẢN LÝ THÀNH VIÊN</div>
                </div>
                <div className='flex'>
                <ul className='list-image-point text-left ml-10 mb-24 mr-10'>
                  <li className='list-disc'>Hệ thống đồng bộ giúp theo dõi vị
                  trí và hoạt động của mỗi thành viên
                  trong đội xe.</li>
                  <li className='list-disc'>Giao diện thân thiện, dễ sử dụng
                  giúp quản lý thông tin cá nhân, vị
                  trí làm việc, và lịch trình một cách
                  hiệu quả.</li>
                  <li className='list-disc'>Cung cấp công cụ đánh giá hiệu
                  suất cá nhân và tổ chức đội nhóm
                  một cách chính xác.</li>
                </ul>
                </div>
              </div>
            </div>
            <div className='col-span-1 mt-10'>
              <div className='rounded-lg bg-gray-200 shadow-2xl shadow-gray-400 mix-blend-darken'>
                {/* <div className='rounded-lg bg-green-400 mx-10 py-2 my-4 text-white'>TỐI ƯU QUẢN LÝ THÀNH VIÊN</div> */}
                <div className='flex  text-center justify-center'>
                    <div className='rounded-lg bg-gradient-to-r from-[#21d6b9] to-[#65de76] py-2 mt-6 mb-4 px-4 text-white'>AN TOÀN VÀ BẢO MẬT</div>
                </div>
                <div className='flex'>
                <ul className='list-image-point text-left ml-10 mb-44 mr-10'>
                  <li className='list-disc'>Hệ thống mã hóa mạnh mẽ đảm
                  bảo an toàn dữ liệu về thông tin cá
                  nhân, vị trí và hoạt động của đội
                  xe.</li>
                  <li className='list-disc'>Cảnh báo và thông báo tức thì về
                  các tình huống rủi ro để ngăn chặn
                  sự cố và đảm bảo an toàn.</li>
                </ul>
                </div>
              </div>
            </div>
            <div className='col-span-1 mt-10'>
              <div className='rounded-lg bg-gray-200 shadow-2xl shadow-gray-400 mix-blend-darken'>
                {/* <div className='rounded-lg bg-green-400 mx-10 py-2 my-4 text-white'>TỐI ƯU QUẢN LÝ THÀNH VIÊN</div> */}
                <div className='flex  text-center justify-center'>
                    <div className='rounded-lg bg-gradient-to-r from-[#21d6b9] to-[#65de76] py-2 mt-6 mb-4 px-4 text-white'>QUẢN LÝ THỐNG KÊ SỐ LIỆU</div>
                </div>
                <div className='flex'>
                <ul className='list-image-point text-left ml-10 mb-14 mr-10'>
                  <li className='list-disc'>Bảng thống kê tự động cung cấp cái
                  nhìn tổng quan về hiệu suất và hoạt
                  động của đội xe.</li>
                  <li className='list-disc'>Tích hợp các công cụ phân tích dữ
                  liệu để đưa ra các đánh giá chi tiết về
                  mức tiêu thụ nhiên liệu, thời gian hoạt
                  động và các chỉ số khác.</li>
                  <li className='list-disc'>Hệ thống báo cáo đa dạng giúp
                  doanh nghiệp đưa ra quyết định dựa
                  trên dữ liệu chính xác và chi tiết.</li>
                </ul>
                </div>
              </div>
            </div>
            <div className='col-span-1 mt-10'>
              <div className='rounded-lg bg-gray-200 shadow-2xl shadow-gray-400 mix-blend-darken'>
                {/* <div className='rounded-lg bg-green-400 mx-10 py-2 my-4 text-white'>TỐI ƯU QUẢN LÝ THÀNH VIÊN</div> */}
                <div className='flex  text-center justify-center'>
                    <div className='rounded-lg bg-gradient-to-r from-[#21d6b9] to-[#65de76] py-2 mt-6 mb-4 px-4 text-white'>SỬ DỤNG ỨNG DỤNG MIỄN PHÍ</div>
                </div>
                <div className='flex'>
                <ul className='list-image-point text-left ml-10 mb-32 mr-10'>
                  <li className='list-disc'>Ứng dụng cung cấp các tính năng
                  cơ bản miễn phí với giao diện thân
                  thiện để hỗ trợ doanh nghiệp quản
                  lý cơ bản vận tải và vận hành đội
                  xe.</li>
                  <li className='list-disc'>Hỗ trợ đa nền tảng, giúp doanh
                  nghiệp tiết kiệm chi phí và tận dụng
                  ứng dụng trên nhiều thiết bị.</li>
                </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default HighlightSection;
