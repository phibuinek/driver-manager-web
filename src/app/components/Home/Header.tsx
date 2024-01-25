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


const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="block items-center space-x-4">
          {/* Sử dụng Image component của Next.js nếu bạn có một file ảnh, hoặc thẻ img thông thường */}
          <Image className="items-center ml-10" src={require("../../../../public/assets/logo/logo-app.png")} alt="" width={70} height={70} />
          <h1 className="font-bold text-xl text-[#2FA060]">Driver Manager</h1>
          
        </div>
        <div className="flex items-center space-x-20 font-semibold">   
          <button className="active:text-primary hover:text-primary focus:text-primary"><a href="#">Trang chủ</a></button>
          {/* <button className="active:text-primary hover:text-primary focus:text-primary"><a href="#product">Sản phẩm</a></button> */}
          <button className="active:text-primary hover:text-primary focus:text-primary">
          
          <a href="/Privacy">Điều khoản</a>
          </button>
          <button className="active:text-primary hover:text-primary focus:text-primary"><a href="#footer">Liên hệ</a></button>
        </div>  
        <Link href="/login" className="mr-10 bg-inherit text-primary font-semibold px-6 py-2 rounded-lg outline text-base hover:bg-green-400 transition-colors hover:text-white">
            Đăng nhập
        </Link>
      </div>
    </header>
  );
};

export default Header;
