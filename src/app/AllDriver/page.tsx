'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const AllDriver = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
            <div className='flex'>
                <div className='text-4xl font-bold'>Danh sách đặt xe</div>
                <div className='absolute right-0 flex'>
                    <button type="submit" className='rounded-full bg-green-100 py-2 px-4'>
                        <Image className='max-w-none' src={require("/public/assets/Vector.svg")} width={25} height={25} alt='Search'></Image>
                    </button>
                    <button onClick={() => setShowModal(true)} type="button" className='flex ml-4 mr-10 outline-green-600 bg-white outline outline-2 hover:bg-button text-green-600 font-bold py-4 px-6 rounded-full hover:text-white'>
                        <div className='text-3xl font-light mr-2'>+</div>
                        <div className='mt-2'>Thêm chuyến</div>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-10 mt-16 ml-10'>
                <div className='col-span-2'>
                    <div className='rounded-md border-1 outline-green-100 outline outline-2 bg-white shadow-xl shadow-green-100 mix-blend-darken'></div>
                </div>
            </div>
        </div>
    )
}

export default AllDriver