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
    <div className="py-12 bg-[#D9D9D9] m-16">
      <div className="text-center">
        <h2 className="text-3xl text-[#252525] font-bold mb-2">LỢI ÍCH CHÍNH CỦA CHÚNG TÔI CAM KẾT CHO KHÁCH HÀNG</h2>
        <div className="inline-block w-16 h-1 bg-green-500 mb-6"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Replace grid with flex and optionally flex-wrap */}
        <div className="flex flex-wrap justify-between -mx-4">
          {/* Feature 1 */}
          <div className="bg-[#FFFFFF] p-8 rounded-3xl shadow-md mb-4 flex-1 mx-4">
          <h3 className="text-xl text-[#252525] font-semibold mb-4 text-center">Thông kê chính xác</h3>
            <div className="flex items-start items-center">
              {/* Assume your icon is an SVG or has fixed dimensions */}
              
              <div className="p-2 items-center justify-center">
                <Image
                  src="/assets/icons/report.png"
                  alt="Report Icon"
                  width={300}
                  height={300}
                />
              </div>
              <div className="ml-4 p-5">
                <ul className="list-disc space-y-2 pl-5 text-gray-600">
                  <li>Các chỉ số đưa ra được thiết kế nhằm phục vụ các đối tượng cụ thể, giúp doanh nghiệp xác định đúng định hướng và thực hiện chính xác.</li>
                  <li>Đo lường hiệu quả của từng chương trình cũng như các chỉ số kinh doanh, quản lý thông qua các báo cáo chi tiết và trực quan.</li>
                  <li>Ghi chép số liệu và lịch sử  hoạt động cho  đơn vị sử dụng</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          {/* Repeat the structure for Feature 2 */}
          <div className="bg-[#FFFFFF] p-8  rounded-3xl shadow-md mb-4 flex-1 mx-4">
          <h3 className="text-xl text-[#252525] font-semibold mb-4 text-center">Quản lý thuận tiện</h3>
            <div className="flex items-start items-center">
              {/* Assume your icon is an SVG or has fixed dimensions */}
              
              <div className="p-2 items-center justify-center">
                <Image
                  src="/assets/icons/think.png"
                  alt="Report Icon"
                  width={300}
                  height={300}
                />
              </div>
              <div className="ml-4 p-5">
                <ul className="list-disc space-y-2 pl-5 text-gray-600">
                  <li>Chủ động thực hiện chiến lược quản lý, khả năng chủ động ứng phó với những thay đổi của thị trường và nguồn nhân lực,</li>
                  <li>Dễ dàng thiết lập và kiểm soát khu vực khách hàng, nhân viên.</li>
                  <li>Dữ liệu thực sự sẽ giúp doanh nghiệp đưa ra quyết định tốt hơn, chính xác hơn và đưa ra các chiến lược hiệu quả hơn</li>

                </ul>
              </div>
            </div>
          </div>

          {/* Add more features if needed */}
        </div>
      </div>
    </div>
      );
    };
export default FeaturesSection;