// import Image from "next/image";
// const FeaturesSection = () => {
//     return (
//       <div className="py-12 bg-[#D9D9D9]">
//         <div className="text-center">
//           <h2 className="text-3xl text-[#252525] font-bold mb-2">LỢI ÍCH CHÍNH CỦA CHÚNG TÔI CAM KẾT CHO KHÁCH HÀNG</h2>
//           <div className="inline-block w-16 h-1 bg-green-500 mb-6"></div>
//         </div>

//         <div className="max-w-4xl mx-auto px-6">
//           <div className="grid grid-cols-2 md:grid-cols-2 gap-16">
//             {/* Feature 1 */}
//             <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-md">
//               <h3 className="text-xl text-[#252525] font-semibold mb-4 justify-center">Thông kê chính xác</h3>
//               <div className="flex">
//                 <Image
//                 src={require("../../../../public/assets/icons/report.png")}
//                 alt=""
//                 width={220}
//                 height={220}
//                 />
//               <ul className="flex-left list-disc space-y-2 pl-5 text-gray-600">
//                 <li>Tự động hóa quy trình tính chi phí cho doanh nghiệp</li>
//                 <li>Tính năng chốt chỗ theo từng tháng</li>
//                 <li>Ghi chép số liệu và lịch sử hoạt động cho đơn vị sử dụng</li>
//                 <li>Số liệu minh bạch cho từng chuyến</li>
//               </ul>
//               </div>
//             </div>

//             {/* Feature 2 */}
//             <div className="bg-[#FFFFFF] p-8 rounded-lg shadow-md">
//               <h3 className="text-xl text-[#252525] font-semibold mb-4">Quản lý thuận tiện</h3>
//               <ul className="list-disc space-y-2 pl-5 text-gray-600">
//                 <li>Tự động hóa quy trình tính chi phí cho doanh nghiệp</li>
//                 <li>Tự động hóa quy trình tính chi phí cho doanh nghiệp</li>
//                 <li>Tự động hóa quy trình tính chi phí cho doanh nghiệp</li>
//                 <li>Tự động hóa quy trình tính chi phí cho doanh nghiệp</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default FeaturesSection;
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className=" m-16">
      <div className="hidden md:block">
        <div className="grid grid-cols-4 space-x-5">
          <div className="col-span-1  mt-40">
            <div className="my-48 mx-4 border-2 rounded-lg outline-1 shadow-lg shadow-gray-400 outline-gray-200">
              <div className="text-2xl text-center justify-center items-center rounded-2xl bg-gradient-to-r from-[#21d6b9] to-[#65de76] text-white font-bold mx-4 my-4 py-2 ">
                VƯỢT TRỘI - TIN CẬY
              </div>
              <div className="block text-5xl mx-6 text-center leading-12 text-primary font-medium my-12">
                NHỮNG LỢI ÍCH CHÚNG TÔI CAM KẾT VỚI KHÁCH HÀNG
              </div>
            </div>
          </div>
          <div className="col-span-3 grid grid-rows-3 space-y-0">
            <div className="row-span-1 mt-40">
              <div className="mt-4 mx-4 border-2 rounded-lg bg-gray-200 shadow-lg shadow-gray-400">
                <div className="flex">
                  <div className="text-2xl text-left rounded-2xl bg-gradient-to-r from-[#21d6b9] to-[#65de76] border-2 text-white font-bold mx-4 my-4 py-2 px-4">
                    THỐNG KÊ CHÍNH XÁC
                  </div>
                </div>
                <div className="flex">
                  <ul>
                    <li className="list-disc mx-6 text-left leading-12 text-black font-medium mt-4">
                      Dữ Liệu Tuyệt Đối Chính Xác: Cam kết cung cấp dữ liệu
                      thống kê và hoạt động đội xe một cách chính xác tuyệt đối,
                      đảm bảo độ tin cậy cho quyết định kinh doanh.
                    </li>
                    <li className="list-disc mx-6 text-left leading-12 text-black font-medium my-4">
                      Bảng Thống Kê Thông Minh: Sử dụng công nghệ tiên tiến để
                      tạo ra bảng thống kê thông minh, giúp khách hàng dễ dàng
                      theo dõi hiệu suất và tình hình vận hành mọi lúc, mọi nơi.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row-span-1">
              <div className="border-2 rounded-lg bg-gray-200 shadow-lg shadow-gray-400 mt-14 mx-4">
                <div className="flex">
                  <div className="text-2xl text-left rounded-2xl bg-gradient-to-r from-[#21d6b9] to-[#65de76] border-2 text-white font-bold mx-4 my-4 py-2 px-4">
                    QUẢN LÝ THUẬN TIỆN
                  </div>
                </div>
                <div className="flex">
                  <ul>
                    <li className="list-disc mx-6 text-left leading-12 text-black font-medium mt-4">
                      Giao Diện Thân Thiện Người Dùng: Thiết kế giao diện đơn
                      giản và thân thiện giúp quản lý dễ dàng và linh hoạt, kể
                      cả đối với người dùng không chuyên nghiệp về công nghệ.
                    </li>
                    <li className="list-disc mx-6 text-left leading-12 text-black font-medium my-4">
                      Quản Lý Từ Xa: Cam kết cung cấp khả năng quản lý đội xe từ
                      xa thông qua ứng dụng di động, giúp doanh nghiệp kiểm soát
                      mọi hoạt động mọi lúc, mọi nơi.
                    </li>
                    <li className="list-disc mx-6 text-left leading-12 text-black font-medium my-4">
                      Tích Hợp Công Nghệ Mới Nhất: Liên tục cập nhật và tích hợp
                      công nghệ mới nhất để cung cấp trải nghiệm quản lý thuận
                      tiện và đáp ứng nhanh chóng với những thay đổi trong ngành
                      vận tải.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row-span-1">
              <div className=" mx-4 border-2 rounded-lg bg-gray-200 shadow-lg shadow-gray-400">
                <div className="flex">
                  <div className="text-2xl text-left rounded-2xl bg-gradient-to-r from-[#21d6b9] to-[#65de76] border-2 text-white font-bold mx-4 my-4 py-2 px-4">
                    HỖ TRỢ TẬN TÂM
                  </div>
                </div>
                <div className="flex">
                  <ul>
                    <li className="list-disc mx-6 text-left leading-12 text-black font-medium mt-4">
                      Đội Ngũ Hỗ Trợ Chuyên Nghiệp: Cam kết đưa ra đội ngũ hỗ
                      trợ chuyên nghiệp, sẵn sàng giải đáp mọi thắc mắc và hỗ
                      trợ khách hàng trong quá trình sử dụng.
                    </li>
                    <li className="list-disc mx-6 text-left leading-12 text-black font-medium my-4">
                      Hướng Dẫn Sử Dụng Chi Tiết: Cung cấp hướng dẫn sử dụng chi
                      tiết và tài nguyên học liệu để giúp người dùng nắm vững
                      chức năng và tận dụng đầy đủ tiềm năng của hệ thống.
                    </li>
                    <li className="list-disc mx-6 text-left leading-12 text-black font-medium my-4">
                      Liên Tục Cải Tiến: Tích cực lắng nghe phản hồi từ khách
                      hàng và liên tục cải tiến hệ thống để đảm bảo rằng nó luôn
                      đáp ứng được các nhu cầu và mong muốn mới nhất của người
                      dùng.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden  flex flex-col items-center justify-center">
        <div>
          <h1 className="text-center font-bold">
            NHỮNG LỢI ÍCH CHÚNG TÔI CAM KẾT VỚI KHÁCH HÀNG
          </h1>
        </div>
        <div className="flex">
          <ul>
            <li className="text-xs rounded-xl list-none mx-6 text-left leading-12 text-black bg-gray-100 font-medium mt-4">
              Đội Ngũ Hỗ Trợ Chuyên Nghiệp: Cam kết đưa ra đội ngũ hỗ trợ chuyên
              nghiệp, sẵn sàng giải đáp mọi thắc mắc và hỗ trợ khách hàng trong
              quá trình sử dụng.
            </li>

            <li className="text-xs list-none mx-6 text-left leading-12 text-black font-medium mt-4">
              Hướng Dẫn Sử Dụng Chi Tiết: Cung cấp hướng dẫn sử dụng chi tiết và
              tài nguyên học liệu để giúp người dùng nắm vững chức năng và tận
              dụng đầy đủ tiềm năng của hệ thống.
            </li>
            <li className="text-xs list-none mx-6 text-left leading-12 text-black font-medium mt-4">
              Liên Tục Cải Tiến: Tích cực lắng nghe phản hồi từ khách hàng và
              liên tục cải tiến hệ thống để đảm bảo rằng nó luôn đáp ứng được
              các nhu cầu và mong muốn mới nhất của người dùng.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FeaturesSection;
