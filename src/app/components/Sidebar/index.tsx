"use client";

import Image from "next/image";
import Link from "next/link";
import { SideNavItem } from "./types";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SIDENAV_ITEMS } from "./contants";
const Sidebar = () => {
  return (
    // <div className="h-[100%] bg-white w-[343px] fixed">
    //     <div>
    //     <li className="group">
    //     <button type="submit" className="flex ml-3">
    //         <div className="text xl flex items-center top-0 text-black font-semibold text-xl mt-10 justify-between ml-1 cursor-pointer truncate px-6 py-4 outline-none transition duration-300 ease-linear hover:bg-button hover: rounded-full hover:text-white">
    //             <Image src={require("/public/assets/home-03.svg")} width={36} height={36} alt='homeButton'></Image>
    //             <h1 className="ml-2 mt-3">Trang chủ</h1>
    //             <Image className="ml-16 mt-3" src={require("/public/assets/Polygon 2.svg")} width={17} height={10} alt="arrowDown"></Image>
    //         </div>
    //     </button>
    //     <ul className="absolute mt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
    //         <li className="bg-button ml-10 mx-8 flex px-3 rounded-full py-2 text-xl mb-4">
    //         <Image className="mx-2" src={require("/public/assets/Group 289458.svg")} width={24} height={29} alt='groupButton'></Image>
    //             <Link className="" href='/'>Danh sách chuyến</Link>
    //         </li>
    //         <div>
    //         <li className="mb-4">
    //             <Link className="text-black ml-24 text-xl mb-4" href=''>Tất cả</Link>
    //         </li>
    //         <li className="mb-4">
    //             <Link className="text-black ml-24 text-xl mb-4" href=''>Đã nhận</Link>
    //         </li>
    //         <li className="mb-4">
    //             <Link className="text-black ml-24 text-xl mb-4" href=''>Chưa nhận</Link>
    //         </li>
    //         </div>
    //     </ul>
    //     </li>
    //     </div>
    //     <div>
    //         <li className="bg-black">hello</li>
    //     </div>
    // </div>
    <div className="flex flex-col space-y-2  px-6 ">
      {SIDENAV_ITEMS.map((item, idx) => {
        return <MenuItem key={idx} item={item} />;
      })}
    </div>
  );
};
export default Sidebar;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-active-sidebar w-full justify-between hover:bg-active-sidebar ${
              pathname.includes(item.path) ? "bg-active-sidebar" : ""
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-xl  flex">{item.title}</span>
            </div>

            <div
              className={` ${subMenuOpen ? "hidden" : "block"}  ${
                subMenuOpen ? "" : "-rotate-90"
              } flex ml-5`}
            >
              <Image
                src={require("../../../../public/assets/Polygon 2.svg")}
                alt="Home"
                width={10}
                height={10}
              />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-24 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-active-sidebar ${
            item.path === pathname ? "bg-red-900-100" : ""
          }`}
        >
          {item.icon}
          <span className="font-semibold text-xl flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
