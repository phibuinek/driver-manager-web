'use client'
import  { useEffect, useState } from 'react'
import Image from 'next/image';

const options = ['Tự lái', 'Tài xế','Đi bộ']
const optionsTaiXe = ['Huy', 'Hùng', 'Vũ']
const optionsPhuXe = ['H', 'A', 'VA']
const optionsXe = ['Vario', 'SH', 'VA']
const Modal = ({isVisible, onClose}) => {
    const [isOpen,setIsOpen] = useState(false);
    const [isOpen1,setIsOpen1] = useState(false);
    const [isOpen2,setIsOpen2] = useState(false);
    const [isOpen3,setIsOpen3] = useState(false);
    const [selectedOption, isSelectedOption] = useState(null);
    const [selectedOption1, isSelectedOption1] = useState(null);
    const [selectedOption2, isSelectedOption2] = useState(null);
    const [selectedOption3, isSelectedOption3] = useState(null);


    if(!isVisible) {return null};


    const toggling = () => setIsOpen(!isOpen);
 
    const onOptionClicked = (value) => {
            isSelectedOption(value);
            setIsOpen(false);
    }
    const toggling1 = () => setIsOpen1(!isOpen1);
    const onOptionClicked1 = (value) => {
            isSelectedOption1(value);
            setIsOpen1(false);
    }
    const toggling2 = () => setIsOpen2(!isOpen2);
    const onOptionClicked2 = (value) => {
            isSelectedOption2(value);
            setIsOpen2(false);
    }
    const toggling3 = () => setIsOpen3(!isOpen3);
    const onOptionClicked3 = (value) => {
            isSelectedOption3(value);
            setIsOpen3(false);
    }
  return (
    <div className='fixed inset-0 bg-gray-400 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50'>
        <div className='snap-y w-[600px] flex flex-col h-[600px] overflow-y-scroll'>
            <div className='bg-white p-2 rounded-3xl'>
                <h1 className='text-2xl mt-6 ml-10'>Thông tin chuyến</h1>
                <div className='border-login border-t-2 mt-8'></div>
                <div className='grid grid-cols-2 gap-6 mx-10'>
                    <div className='col-span-1 mt-10'>
                        <div>
                            <div className='font-medium'>Tên tài xế</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                                type="text"

                                className="focus:outline-none w-[150px] ml-6 text-sm"
                            />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Số điện thoại tài xế</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                                type="text"

                                className="focus:outline-none w-[150px] ml-6 text-sm"
                            />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Mã chuyến</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                                type="text"

                                className="focus:outline-none w-[150px] ml-6 text-sm"
                            />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Hình thức</div>
                            <div className='flex mt-2 text-black border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            {/* <input
                                type="text"

                                className="focus:outline-none w-[150px] ml-6 text-sm"
                            /> */}
                            <button type='button' onClick={toggling} className='w-[100%] rounded-l-md px-4'>
                                {selectedOption || null}
                            </button>
                            <button onClick={toggling}>
                                <Image src={require('../../../public/assets/Polygon 4.svg')} alt='scroll down' width={15} height={15}></Image>
                            </button>
                            </div>
                            {isOpen && (
                                <div className='z-10 min-w-[200px] bg-primary w-[200px] rounded-xl block px-4 py-2 text-sm no-underline' >
                                    {options.map((option) => (
                                        <button
                                            type="button"
                                            onClick={()=> onOptionClicked(option)}
                                            key={Math.random()}
                                            className='block rounded-lg px-4 py-2 text-sm no-underline hover:bg-gray-50'
                                            >
                                                {option}
                                        </button>
                                    ))} 
                                </div> 
                            )}
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Tài xế</div>
                            <div className='flex mt-2 text-black border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            {/* <input
                                type="text"

                                className="focus:outline-none w-[150px] ml-6 text-sm"
                            /> */}
                            <button type='button' onClick={toggling1} className='w-[100%] rounded-l-md px-4'>
                                {selectedOption1 || null}
                            </button>
                            <button onClick={toggling1}>
                                <Image src={require('../../../public/assets/Polygon 4.svg')} alt='scroll down' width={15} height={15}></Image>
                            </button>
                            </div>
                            {isOpen1 && (
                                <div className='z-10 min-w-[200px] bg-primary w-[200px] rounded-xl block px-4 py-2 text-sm no-underline' >
                                    {optionsTaiXe.map((option1) => (
                                        <button
                                            type="button"
                                            onClick={()=> onOptionClicked1(option1)}
                                            key={Math.random()}
                                            className='block rounded-lg px-4 py-2 text-sm no-underline hover:bg-gray-50'
                                            >
                                                {option1}
                                        </button>
                                    ))} 
                                </div> 
                            )}
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Phụ xe</div>
                            <div className='flex mt-2 text-black border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            {/* <input
                                type="text"

                                className="focus:outline-none w-[150px] ml-6 text-sm"
                            /> */}
                            <button type='button' onClick={toggling2} className='w-[100%] rounded-l-md px-4'>
                                {selectedOption2 || null}
                            </button>
                            <button onClick={toggling2}>
                                <Image src={require('../../../public/assets/Polygon 4.svg')} alt='scroll down' width={15} height={15}></Image>
                            </button>
                            </div>
                            {isOpen2 && (
                                <div className='z-10 min-w-[200px] bg-primary w-[200px] rounded-xl block px-4 py-2 text-sm no-underline' >
                                    {optionsPhuXe.map((option1) => (
                                        <button
                                            type="button"
                                            onClick={()=> onOptionClicked2(option1)}
                                            key={Math.random()}
                                            className='block rounded-lg px-4 py-2 text-sm no-underline hover:bg-gray-50'
                                            >
                                                {option1}
                                        </button>
                                    ))} 
                                </div> 
                            )}
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Tiền thu hộ</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                                type="text"

                                className="focus:outline-none w-[150px] ml-6 text-sm"
                            />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Lương tài xế</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                                type="text"

                                className="focus:outline-none w-[150px] ml-6 text-sm"
                            />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Lương phụ xe</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                                type="text"

                                className="focus:outline-none w-[150px] ml-6 text-sm"
                            />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Ghi chú</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                                type="text"

                                className="focus:outline-none w-[150px] ml-6 text-sm"
                            />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 mt-10'>
                        <div>
                            <div className='font-medium'>Khách hàng</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                            type="text"

                            className="focus:outline-none w-[150px] ml-6 text-sm"
                            />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Số chỗ</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[100px] h-9 p-1'>
                            <input
                            type="text"

                            className="focus:outline-none w-[50px] ml-6 text-sm"
                        />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Thời gian</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                            type="text"

                            className="focus:outline-none w-[150px] ml-6 text-sm"
                        />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>SĐT khách hàng</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                            type="text"

                            className="focus:outline-none w-[150px] ml-6 text-sm"
                        />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Báo giá chuyến</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                            type="text"

                            className="focus:outline-none w-[150px] ml-6 text-sm"
                        />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Lộ trình</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                            type="text"

                            className="focus:outline-none w-[150px] ml-6 text-sm"
                        />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Thời gian khởi hành</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                            type="text"

                            className="focus:outline-none w-[150px] ml-6 text-sm"
                        />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Điểm đón khách</div>
                            <div className='mt-2 text-gray-300 border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            <input
                            type="text"

                            className="focus:outline-none w-[150px] ml-6 text-sm"
                        />
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className='font-medium'>Thông tin xe</div>
                            <div className='flex mt-2 text-black border-2 border-gray-300 bg-white rounded-full text-base w-[200px] h-9 p-1'>
                            {/* <input
                                type="text"

                                className="focus:outline-none w-[150px] ml-6 text-sm"
                            /> */}
                            <button type='button' onClick={toggling3} className='w-[100%] rounded-l-md px-4'>
                                {selectedOption3 || null}
                            </button>
                            <button onClick={toggling3}>
                                <Image src={require('../../../public/assets/Polygon 4.svg')} alt='scroll down' width={15} height={15}></Image>
                            </button>
                            </div>
                            {isOpen3 && (
                                <div className='z-10 min-w-[200px] bg-primary w-[200px] rounded-xl block px-4 py-2 text-sm no-underline' >
                                    {optionsXe.map((option1) => (
                                        <button
                                            type="button"
                                            onClick={()=> onOptionClicked3(option1)}
                                            key={Math.random()}
                                            className='block rounded-lg px-4 py-2 text-sm no-underline hover:bg-gray-50'
                                            >
                                                {option1}
                                        </button>
                                    ))} 
                                </div> 
                            )}
                        </div>
                    </div>
                    
                </div>
                <div className='flex  mt-20 mb-10 place-content-end'>
                    <button onClick={() => onClose()} type="button" className='flex ml-4 mr-4 outline-green-600 bg-white outline outline-2 hover:bg-button text-green-600 font-bold py-2 px-6 rounded-full hover:text-white'>
                        Huỷ
                    </button>
                    <button type="button" className='flex ml-2 mr-10 outline-green-600 bg-green-600 outline outline-2 hover:bg-button text-white font-bold py-2 px-6 rounded-full hover:text-white'>
                        Tạo chuyến
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal