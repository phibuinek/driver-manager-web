'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import Modal from './modal'
const AllTrip = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div>
        {/* <Navbar/>
        <Sidebar/> */}
        <div className='flex'>
            <div className='text-4xl font-bold'>Danh sách đặt xe</div>
            <div className='absolute right-0 flex'>
                <button type="submit" className='rounded-full bg-green-100 px-4 py-2'>
                    <Image className='max-w-none' src={require("/public/assets/Vector.svg")} width={25} height={25} alt='Search'></Image>
                </button>
                <button onClick={() => setShowModal(true)} type="button" className='flex ml-4 mr-10 outline-green-600 bg-white outline outline-2 hover:bg-button text-green-600 font-bold py-4 px-6 rounded-full hover:text-white'>
                    <div className='text-3xl font-light mr-2'>+</div>
                    <div className='mt-2'>Thêm chuyến</div>
                </button>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-20 mt-16 ml-10'>
            <div className='col-span-2'>
                <div className='rounded-md border-1 outline-green-100 outline outline-2 bg-white shadow-xl shadow-green-100 mix-blend-darken'>
                <div className='flex mb-6 mx-6 pt-10'>
                    <div className='text-xl text-primary font-bold mt-2'>Thông tin chuyến</div>
                    <div className='text-xl ml-20 rounded-full bg-orange-400 text-white px-2 py-2 shadow-orange-300 shadow-md'>Chưa nhận</div>
                </div>
                    <div className='border-login border-t-2 pt-8'></div>
                    <div className='grid grid-cols-3 gap-5 mt-4 ml-4'>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Mã chuyến</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>86321</div>
                            <div className=' font-medium mt-6'>Thời gian</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Tài xế</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>SĐT tài xế</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Khách hàng</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>Số chỗ</div>
                            <div className='text-base text-gray-300 my-2 font-light mb-10'>86321</div>
                        </div>
                    </div>
                </div> 
                <div className='mt-16 rounded-md border-1 outline-green-100 outline outline-2 bg-white shadow-xl shadow-green-100 mix-blend-darken'>
                <div className='flex mb-6 mx-6 pt-10'>
                    <div className='text-xl text-primary font-bold mt-2'>Thông tin chuyến</div>
                    <div className='text-xl ml-20 rounded-full bg-orange-400 text-white px-2 py-2 shadow-orange-300 shadow-md'>Chưa nhận</div>
                </div>
                    <div className='border-login border-t-2 pt-8'></div>
                    <div className='grid grid-cols-3 gap-5 mt-4 ml-4'>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Mã chuyến</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>86321</div>
                            <div className=' font-medium mt-6'>Thời gian</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Tài xế</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>SĐT tài xế</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Khách hàng</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>Số chỗ</div>
                            <div className='text-base text-gray-300 my-2 font-light mb-10'>86321</div>
                        </div>
                    </div>
                </div> 
                <div className='mt-16 rounded-md border-1 outline-green-100 outline outline-2 bg-white shadow-xl shadow-green-100 mix-blend-darken'>
                <div className='flex mb-6 mx-6 pt-10'>
                    <div className='text-xl text-primary font-bold mt-2'>Thông tin chuyến</div>
                    <div className='text-xl ml-20 rounded-full bg-orange-400 text-white px-2 py-2 shadow-orange-300 shadow-md'>Chưa nhận</div>
                </div>
                    <div className='border-login border-t-2 pt-8'></div>
                    <div className='grid grid-cols-3 gap-5 mt-4 ml-4'>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Mã chuyến</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>86321</div>
                            <div className=' font-medium mt-6'>Thời gian</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Tài xế</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>SĐT tài xế</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Khách hàng</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>Số chỗ</div>
                            <div className='text-base text-gray-300 my-2 font-light mb-10'>86321</div>
                        </div>
                    </div>
                </div> 
                <div className='mt-16 rounded-md border-1 outline-green-100 outline outline-2 bg-white shadow-xl shadow-green-100 mix-blend-darken'>
                <div className='flex mb-6 mx-6 pt-10'>
                    <div className='text-xl text-primary font-bold mt-2'>Thông tin chuyến</div>
                    <div className='text-xl ml-20 rounded-full bg-orange-400 text-white px-2 py-2 shadow-orange-300 shadow-md'>Chưa nhận</div>
                </div>
                    <div className='border-login border-t-2 pt-8'></div>
                    <div className='grid grid-cols-3 gap-5 mt-4 ml-4'>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Mã chuyến</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>86321</div>
                            <div className=' font-medium mt-6'>Thời gian</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Tài xế</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>SĐT tài xế</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Khách hàng</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>Số chỗ</div>
                            <div className='text-base text-gray-300 my-2 font-light mb-10'>86321</div>
                        </div>
                    </div>
                </div> 
                <div className='mt-16 rounded-md border-1 outline-green-100 outline outline-2 bg-white shadow-xl shadow-green-100 mix-blend-darken'>
                <div className='flex mb-6 mx-6 pt-10'>
                    <div className='text-xl text-primary font-bold mt-2'>Thông tin chuyến</div>
                    <div className='text-xl ml-20 rounded-full bg-orange-400 text-white px-2 py-2 shadow-orange-300 shadow-md'>Chưa nhận</div>
                </div>
                    <div className='border-login border-t-2 pt-8'></div>
                    <div className='grid grid-cols-3 gap-5 mt-4 ml-4'>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Mã chuyến</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>86321</div>
                            <div className=' font-medium mt-6'>Thời gian</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Tài xế</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>SĐT tài xế</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Khách hàng</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>Số chỗ</div>
                            <div className='text-base text-gray-300 my-2 font-light mb-10'>86321</div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='col-span-2'>
                <div className='rounded-md border-1 outline-green-100 outline outline-2 bg-white shadow-xl shadow-green-100 mix-blend-darken'>
                <div className='flex mb-6 mx-6 pt-10'>
                    <div className='text-xl text-primary font-bold mt-2'>Thông tin chuyến</div>
                    <div className='text-xl ml-20 rounded-full bg-orange-400 text-white px-2 py-2 shadow-orange-300 shadow-md'>Chưa nhận</div>
                </div>
                    <div className='border-login border-t-2 pt-8'></div>
                    <div className='grid grid-cols-3 gap-5 mt-4 ml-4'>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Mã chuyến</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>86321</div>
                            <div className=' font-medium mt-6'>Thời gian</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Tài xế</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>SĐT tài xế</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Khách hàng</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>Số chỗ</div>
                            <div className='text-base text-gray-300 my-2 font-light mb-10'>86321</div>
                        </div>
                    </div>
                </div> 
                <div className='mt-16 rounded-md border-1 outline-green-100 outline outline-2 bg-white shadow-xl shadow-green-100 mix-blend-darken'>
                <div className='flex mb-6 mx-6 pt-10'>
                    <div className='text-xl text-primary font-bold mt-2'>Thông tin chuyến</div>
                    <div className='text-xl ml-20 rounded-full bg-orange-400 text-white px-2 py-2 shadow-orange-300 shadow-md'>Chưa nhận</div>
                </div>
                    <div className='border-login border-t-2 pt-8'></div>
                    <div className='grid grid-cols-3 gap-5 mt-4 ml-4'>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Mã chuyến</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>86321</div>
                            <div className=' font-medium mt-6'>Thời gian</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Tài xế</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>SĐT tài xế</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Khách hàng</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>Số chỗ</div>
                            <div className='text-base text-gray-300 my-2 font-light mb-10'>86321</div>
                        </div>
                    </div>
                </div> 
                <div className='mt-16 rounded-md border-1 outline-green-100 outline outline-2 bg-white shadow-xl shadow-green-100 mix-blend-darken'>
                <div className='flex mb-6 mx-6 pt-10'>
                    <div className='text-xl text-primary font-bold mt-2'>Thông tin chuyến</div>
                    <div className='text-xl ml-20 rounded-full bg-orange-400 text-white px-2 py-2 shadow-orange-300 shadow-md'>Chưa nhận</div>
                </div>
                    <div className='border-login border-t-2 pt-8'></div>
                    <div className='grid grid-cols-3 gap-5 mt-4 ml-4'>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Mã chuyến</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>86321</div>
                            <div className=' font-medium mt-6'>Thời gian</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Tài xế</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>SĐT tài xế</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Khách hàng</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>Số chỗ</div>
                            <div className='text-base text-gray-300 my-2 font-light mb-10'>86321</div>
                        </div>
                    </div>
                </div> 
                <div className='mt-16 rounded-md border-1 outline-green-100 outline outline-2 bg-white shadow-xl shadow-green-100 mix-blend-darken'>
                <div className='flex mb-6 mx-6 pt-10'>
                    <div className='text-xl text-primary font-bold mt-2'>Thông tin chuyến</div>
                    <div className='text-xl ml-20 rounded-full bg-orange-400 text-white px-2 py-2 shadow-orange-300 shadow-md'>Chưa nhận</div>
                </div>
                    <div className='border-login border-t-2 pt-8'></div>
                    <div className='grid grid-cols-3 gap-5 mt-4 ml-4'>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Mã chuyến</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>86321</div>
                            <div className=' font-medium mt-6'>Thời gian</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Tài xế</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>SĐT tài xế</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Khách hàng</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>Số chỗ</div>
                            <div className='text-base text-gray-300 my-2 font-light mb-10'>86321</div>
                        </div>
                    </div>
                </div> 
                <div className='mt-16 rounded-md border-1 outline-green-100 outline outline-2 bg-white shadow-xl shadow-green-100 mix-blend-darken'>
                <div className='flex mb-6 mx-6 pt-10'>
                    <div className='text-xl text-primary font-bold mt-2'>Thông tin chuyến</div>
                    <div className='text-xl ml-20 rounded-full bg-orange-400 text-white px-2 py-2 shadow-orange-300 shadow-md'>Chưa nhận</div>
                </div>
                    <div className='border-login border-t-2 pt-8'></div>
                    <div className='grid grid-cols-3 gap-5 mt-4 ml-4'>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Mã chuyến</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>86321</div>
                            <div className=' font-medium mt-6'>Thời gian</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Tài xế</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>SĐT tài xế</div>
                            <div className='text-base text-gray-300 my-2 font-light'>86321</div>
                        </div>
                        <div className='col-span-1'>
                            <div className=' font-medium'>Khách hàng</div>
                            <div className='text-base text-gray-300 mt-2 font-light'>user one</div>
                            <div className=' font-medium mt-6'>Số chỗ</div>
                            <div className='text-base text-gray-300 my-2 font-light mb-10'>86321</div>
                        </div>
                    </div>
                </div> 

            </div>
        </div>
        <nav aria-label="Page navigation example" className='mt-32 ml-64 mb-10'>
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white bg-green-400 border border-e-0 border-green-400 rounded-s-lg hover:bg-green-300 hover:text-white">Previous</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-green-400 border border-green-400 hover:bg-green-300 hover:text-white">1</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-green-400 border border-green-400 hover:bg-green-300 hover:text-white">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-green-400 border border-green-400 hover:bg-green-300 hover:text-white">3</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-green-400 border border-green-400 hover:bg-green-300 hover:text-white">4</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-green-400 border border-green-400 hover:bg-green-300 hover:text-white">5</a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-white bg-green-400 border border-green-400 rounded-e-lg hover:bg-green-300 hover:text-white">Next</a>
                </li>
            </ul>
        </nav>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default AllTrip