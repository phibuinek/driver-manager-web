// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className="bg-red py-4 shadow-md">
//       <div className="container mx-auto flex items-center justify-between">
//         <div>
//           <Link href="/">
//            Logo
//           </Link>
//         </div>
//         <nav>
//           <ul className="flex items-center space-x-4">
//             <li>
//             <Link href="/">
//               Features
//             </Link>
//             </li>
//             <li><Link href="/pricing">Pricing</Link></li>
//             <li><Link href="/about">About</Link></li>
//             <li><Link href="/login">Login</Link></li>
//           </ul>

//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          {/* Sử dụng Image component của Next.js nếu bạn có một file ảnh, hoặc thẻ img thông thường */}
          <Image src={require("../../../../public/assets/logo/logo-app.png")} alt="" width={50} height={50} />
          <span className="font-bold text-xl text-[#2FA060]">Driver Management</span>
        </div>
        <div className="flex items-center space-x-4">   
          <FaPhone className="text-blue-500" />
          <span className="text-[#000]">0975 1187 362</span>
          <FaEnvelope className="text-blue-500" />
          <span className="text-[#000]">company@vn.com</span>
        </div>  
        <Link href="/login" className="bg-[#2FA060] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-400 transition-colors">
            Đăng nhập
        </Link>
      </div>
    </header>
  );
};

export default Header;
