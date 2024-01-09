import Image from "next/image";

export interface DriverItemProps {
    id: number,
    image: string,
    userName: string,
    fullName: string,
    phoneNumber: string,
    salary: number,
}
const DriverItem = (props: DriverItemProps) => {
    const {id, image, userName, fullName, phoneNumber, salary} = props;
    const textValueStyle = 'text-[16px] text-grey font-normal'
    return (
        <div className={'rounded-3xl px-[22px] py-[26px] flex flex-row w-full bg-white shadow-primary'}>
            <Image src={image} alt={'avatar image id: ' + id} width={60} height={60} className={'rounded-full object-cover w-[60px] h-[60px]'}/>
            <div className={'ml-[28px] w-full'}>
                <div className={'flex flex-row justify-between'}>
                    <div className={'flex flex-col'}>
                        <span className={textValueStyle}>{userName}</span>
                        <span className={`${textValueStyle} mt-[10px]`}>{fullName}</span>
                        <span className={`${textValueStyle} mt-[10px]`}>{phoneNumber}</span>
                        <span className={`${textValueStyle} mt-[10px]`}>Lương cố định: {salary}</span>
                    </div>
                    <button
                        className={'bg-orange shadow-orange_design px-10 h-[36px] text-white font-bold text-[16px] rounded-full'}>Khoá
                    </button>
                </div>

                <div className={'flex flex-row justify-between mt-[25px]'}>
                    <button
                        className={'bg-white rounded-full w-1/2 mr-[12px] border-green border-2 h-[36px] text-primary font-normal'}>Reset
                        mật khẩu
                    </button>
                    <button
                        className={'bg-white rounded-full w-1/2 ml-[12px] border-green border-2 h-[36px] text-primary font-normal'}>Điều chỉnh lương
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DriverItem;
