import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
    return (
        <div>
          <div className="fixed flex bg-green-600 top-0 left-0 right-0 z-40 w-[100%]">
              <Link href="/">
              <Image className='max-w-none mx-4 my-4' src={require("/public/assets/logo.png")} width={64} height={48} alt='Logo'>
              </Image>
              </Link>
              <div className="block mr-52">
              <h1 className='text-white text-lg mx-0 mt-4 font-bold'>Driver </h1>
              <h1 className='text-white text-lg mx-0 mb-4 font-bold'>Management</h1>
              </div>
              {/* <div className="border-solid border-2 border-primary bg-primary w-[10px] overflow-hidden"></div> */}
              {/* <div className=" my-5 mx-4 text-gray-300 border-2 border-gray-300 bg-white px-4 rounded-full text-base w-96 h-9 relative pt-1">
                <input
                 type="text"
                 placeholder="Tìm kiếm..."
                 className="focus:outline-none w-80 ml-6 text-sm"
                />
                <button type="submit" className="top-1 left-2 absolute">
                <Image className='max-w-none' src={require("/public/assets/Vector.svg")} width={25} height={25} alt='Search'></Image>
                </button>
                </div> */}
                <div className="ml-96 w-[10px] overflow-hidden"></div>
                <button type="submit" className=" my-5 ml-96 pb-2">
                    <Image className="max-w-none max-h-none" src={require("/public/assets/bell-02.svg")} width={36} height={36} alt="Notification"></Image>
                </button>
                {/* <div className="border-solid border-2 border-primary bg-primary w-[10px] overflow-hidden"></div> */}
                <li className="group">
                <button type="submit" className=" my-1 mx-5 pb-2 flex">
                    <Image className="ml-3 max-w-none max-h-none" src={require("/public/assets/user.png")} width={36} height={36} alt="User"></Image>
                    <div className="text-white mx-4 mt-1">username</div>
                    <Image className="ml-0 max-w-none max-h-none my-1" src={require("../../../public/assets/arrow.png")} width={24} height={12} alt="Scrolldown"></Image>
                </button>
                <ul className="bg-white mt-4 p-5 absolute top-30 border-solid border-2 border-primary opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0">
                    <li className="text-black my-3"><Link href='/'>Thông tin cá nhân</Link></li>
                    <li className="text-black my-3"><Link href='/'>Đổi mật khẩu</Link></li>
                    <li className="text-black my-3"><Link href='/'>Tài sản bị khoá</Link></li>
                    <li className="border-login border-t-2 text-black my-5 pt-5"><Link href='/'>Đăng xuất</Link></li>
                </ul>
                </li>
          </div>
        </div>
    )
}
export default Navbar