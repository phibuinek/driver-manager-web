"use client";


import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <div><Navbar/></div>
        <div className='flex'>
            <div className='mt-10'><Sidebar/></div>
            <div className='mt-40 ml-20'>{children}</div>
        </div>
    </div>
  )
}