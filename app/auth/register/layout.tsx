'use client'
import React from "react";
import Image from 'next/image'
import Link from "next/link";
import routes from "@/lib/routes";



const Layout=({ children }: { children: React.ReactNode })=>{
  return (
    <div className='flex flex-col mt-10 relative min-h-screen'>
      <Link href={routes.home.path}>
      <Image src="/images/logo2.png" height={41} width={100} alt='logo' className='ml-12' />
      </Link>
      <div className='flex flex-col justify-center md:px-10 xl:px-28 px-12 relative min-h-screen'>
        <div className="flex flex-col mt-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-textGrey text-start my-4">Create an account</h2>
          <div className='flex flex-col justify-center mt-4 mb-'>
            <div className="flex text-sm gap-x-3 text-textGrey">
              <div>
                <div className="w-30 h-1 bg-blue-900 rounded-full" />
                <p>Basic Information</p>
              </div>
              <div>
                <div className="w-30 h-1 bg-gray-300 rounded-full ml-1" />
                <p>Documentation</p>
              </div>
              <div>
                <div className="w-30 h-1 bg-gray-300 rounded-full ml-1" />
                <p>Account Creation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">{children}</div>
      </div>
    </div>
  );
}

export default Layout;