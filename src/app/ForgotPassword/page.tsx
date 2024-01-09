"use client";
import Image from "next/image";
import Memo from "../../icon/background"
const ForgotPasswordPage = () => {
    return (
        <div className="h-screen bg-primary font-Poppins items-center text-center mt-20">
            <div className="flex w-full z-50 items-center justify-center pt-14 mb-4">
                <div className="px-8 py-6 border-4 bg-button rounded-full border-login">
                <Image  src={require('/public/assets/Icon (2).svg')} width={36} height={48} alt="ForgotIcon"></Image>
                </div>
            </div>
            <h1 className="text-black text-3xl font-medium">Quên mật khẩu</h1>
            <h1 className="text-gray-400 mt-3">Gọi tới số tổng đài để nhận được</h1>
            <h1 className="text-gray-400">mật khẩu mới</h1>
            <div className="flex items-center justify-center">
            <button className="flex mt-8 p-5 text-black rounded-full border-login bg-button py-4 px-28">
                <Image src={require('/public/assets/Icon (1).svg')} width={36} height={36} alt="callButton"></Image>
                <h1 className="text-white text-4xl ml-4">1900 1187</h1>
            </button>
            </div>
            <div className="mt-10">
            <h1 className="text-gray-500">Lưu ý</h1>
            <h1 className="text-gray-400">Khi đã đổi mật khẩu thành công, khi đăng nhập vui lòng</h1>
            <h1 className="text-gray-400">vào phần thông tin để đổi mật khẩu mới.</h1>
            </div>
        </div>
    )
}

export default ForgotPasswordPage