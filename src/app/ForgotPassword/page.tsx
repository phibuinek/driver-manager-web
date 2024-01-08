import Image from "next/image";
const ForgotPasswordPage = () => {
    return (
        <div className="block h-screen bg-primary font-Poppins items-center justify-center text-center mt-20">
            <Image  src={require('/public/assets/Icon.svg')} width={36} height={48} alt="blockIcon"></Image>
            <h1 className="text-black text-3xl">Quên mật khẩu</h1>
            <h1 className="text-gray-400 mt-3">Gọi tới số tổng đài để nhận được</h1>
            <h1 className="text-gray-400">mật khẩu mới</h1>
            <button className="flex mt-8 p-5 text-black">
                <Image src={require('/public/assets/Icon (1).svg')} width={36} height={36} alt="callButton"></Image>
                <h1>1900 1187</h1>
            </button>
        </div>
    )
}
export default ForgotPasswordPage