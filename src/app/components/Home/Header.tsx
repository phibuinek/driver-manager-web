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
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="block items-center space-x-4 ">
          {/* Sử dụng Image component của Next.js nếu bạn có một file ảnh, hoặc thẻ img thông thường */}
          <Image
            className="items-center w-20 h-20"
            src={require("../../../../public/assets/logo/logo-app.png")}
            alt=""
            width={70}
            height={70}
          />
          <h1 className="font-bold text-xl text-[#2FA060] hidden md:block">
            Driver Manager
          </h1>
        </div>
        <div className="flex items-center space-x-20 font-semibold">
          <button className="active:text-primary hover:text-primary focus:text-primary hidden md:block">
            <a href="#">Trang chủ</a>
          </button>
          {/* <button className="active:text-primary hover:text-primary focus:text-primary"><a href="#product">Sản phẩm</a></button> */}
          <button className="active:text-primary hover:text-primary focus:text-primary hidden md:block">
            <a href="/Privacy">Điều khoản</a>
          </button>
          <button className="active:text-primary hover:text-primary focus:text-primary hidden md:block">
            <a href="#footer">Liên hệ</a>
          </button>
        </div>
        <Link
          href="/login"
          className="mr-10 bg-inherit text-primary font-semibold px-6 py-2 rounded-lg outline text-base hover:bg-green-400 transition-colors hover:text-white hidden md:block"
        >
          Đăng nhập
        </Link>
        {/* Nút để mở sidebar */}
        <button className="p-2 text-white md:hidden" onClick={toggleSidebar}>
          <Image
            className="max-w-none"
            src={require("/public/assets/logo/menu.svg")}
            width={25}
            height={25}
            alt="Search"
          ></Image>
        </button>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 bg-green-500 z-50 transition duration-300 ease-in-out`}
        >
          {/* Nút đóng sidebar */}
          <button
            className="flex items-center justify-end p-2 text-white w-full"
            onClick={toggleSidebar}
          >
            <Image
              className="max-w-none"
              src={require("/public/assets/cancel.svg")}
              width={25}
              height={25}
              alt="cancel"
            />
          </button>
          <ul>
            <li className="border-b border-gray-200">
              <a
                href="#"
                className="block py-2 px-4 text-lg hover:bg-gray-100 text-white"
              >
                Trang chủ
              </a>
            </li>
            <li className="border-b border-gray-200">
              <a
                href="/#Privacy"
                className="block py-2 px-4 text-lg hover:bg-gray-100 text-white"
              >
                Điều khoản
              </a>
            </li>
            <li className="border-b border-gray-200">
              <a
                href="/#footer"
                className="block py-2 px-4 text-lg hover:bg-gray-100 text-white"
              >
                Liên hệ
              </a>
            </li>
            <li className="border-b border-gray-200">
              <a
                href="/login"
                className="block py-2 px-4 text-lg hover:bg-gray-100 text-white"
              >
                Đăng nhập
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
