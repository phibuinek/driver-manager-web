import Image from "next/image"
import Link from "next/link"
const Sidebar = () => {
    return (
        <div className="h-[100%] bg-white w-[343px] fixed">
            <div>
            <li className="group">
            <button type="submit" className="flex ml-3">
                <div className="text xl flex items-center top-0 text-black font-semibold text-xl mt-10 justify-between ml-1 cursor-pointer truncate px-6 py-4 outline-none transition duration-300 ease-linear hover:bg-button hover: rounded-full hover:text-white">
                    <Image src={require("/public/assets/home-03.svg")} width={36} height={36} alt='homeButton'></Image>
                    <h1 className="ml-2 mt-3">Trang chủ</h1>
                    <Image className="ml-16 mt-3" src={require("/public/assets/Polygon 2.svg")} width={17} height={10} alt="arrowDown"></Image>
                </div>
            </button>
            <ul className="absolute mt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <li className="bg-button ml-10 mx-8 flex px-3 rounded-full py-2 text-xl mb-4">
                <Image className="mx-2" src={require("/public/assets/Group 289458.svg")} width={24} height={29} alt='groupButton'></Image>
                    <Link className="" href='/'>Danh sách chuyến</Link>
                </li>
                <div>
                <li className="mb-4">
                    <Link className="text-black ml-24 text-xl mb-4" href=''>Tất cả</Link>
                </li>
                <li className="mb-4">
                    <Link className="text-black ml-24 text-xl mb-4" href=''>Đã nhận</Link>
                </li>
                <li className="mb-4">
                    <Link className="text-black ml-24 text-xl mb-4" href=''>Chưa nhận</Link>
                </li>
                </div>
            </ul>
            </li>
            </div>
            <div>
                <li className="bg-black">hello</li>
            </div>
        </div>
    )
}
export default Sidebar