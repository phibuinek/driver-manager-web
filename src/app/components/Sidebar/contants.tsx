import { SideNavItem } from "./types";
import Image from "next/image";
export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Trang chủ",
    path: "/home",
    icon: (
      <Image
        src={require("../../../../public/assets/home-03.svg")}
        alt="Home"
        width={30}
        height={30}
      />
    ),
  },
  {
    title: "Danh sách chuyến",
    path: "/trips",
    icon: <span>icon</span>,
    submenu: true,
    subMenuItems: [
      { title: "Tất cả", path: "/trips" },
      { title: "Đã nhận", path: "/trips/recieved" },
      { title: "Chưa nhận", path: "/trips/not-recieved" },
    ],
  },
  {
    title: "Báo cáo",
    path: "/report",
    icon: <span>icon</span>,
  },

  {
    title: "Tài sản",
    path: "/asset",
    icon: <span>icon</span>,
  },
];
