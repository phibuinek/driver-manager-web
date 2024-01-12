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
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Image
            src={require("../../../../public/assets/logo/logo-app.png")}
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="font-bold text-lg sm:text-xl text-[#2FA060]">
            Driver Management
          </span>
        </div>
        <div className="flex flex-wrap justify-between items-center space-x-2">
          <div className="flex items-center mb-4 md:mb-0 space-x-2">
            <FaPhone className="text-[#000000]" />
            <span className="text-[#6C6C6C]">0975 1187 362</span>
          </div>
          <div className="flex items-center mb-4 md:mb-0 space-x-2">
            <FaEnvelope className="text-[#000000]" />
            <span className="text-[#6C6C6C]">company@vn.com</span>
          </div>
          <Link
            href="/login"
            className="bg-[#2FA060] text-white px-4 sm:px-6 py-2 rounded-lg shadow-lg hover:bg-green-400 transition-colors flex items-center justify-center"
          >
            Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
