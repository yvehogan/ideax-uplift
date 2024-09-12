import Image from "next/image";
import React from "react";
import block from '../../public/images/block.png'

const Layout=({ children }: { children: React.ReactNode })=>{
return <div className="w-full md:flex-row flex-col flex min-h-screen">
    <div className="w-full">{children}</div>

    <div className='bg-secondary w-full hidden md:block'>
        <div className='flex flex-col justify-center items-center'>
        <Image src={block} alt='block' className='mt-12' ></Image>
        <p className='text-white text-2xl lg:text-4xl font-bold mt-28 text-center'>Experience Uplift</p>
        <p className='text-white text-md lg:text-2xl font-medium text-center' >Everything you need to scale your NGO efficiently</p>
        </div>
      </div>
</div>
}

export default Layout;