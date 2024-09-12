import React from 'react'
import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const Hero = () => {
  return (
    <main className="bg-[url('/images/hero.png')] bg-cover bg-center h-screen">
      <div className="pt-10">
      <Header />
      </div>
      <div className="flex flex-col items-center justify-center text-center max-w-[750px] mt-14 mx-auto px-4">
        <h1 className="text-[60px] font-semibold text-white items-center text-center leading-tight">
          Transforming <span className="text-primary">NGO</span> Operations
        </h1>
        <p className="text-white font-[500] mt-8 text-[20px]">
          Empowering NGOs with innovative tools to enhance finance management,
          access funding, and maintain transparency.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary text-textBlack text-[16px] font-semibold px-12 mt-6 hover:bg-primary hover:opacity-70"
        >
          <Link href="/auth/register">Get Started</Link>
        </Button>
        <p className="text-white mt-4 font-[500] text-[12px]">Powered by Wema Bank</p>
        <div className="flex gap-2 mt-4">
          <Image
            src="/images/wema-logo.png"
            alt="wema logo"
            width={40}
            height={40}
          />
          <Image
            src="/images/alat-logo.png"
            alt="alat logo"
            width={40}
            height={40}
          />
        </div>
      </div>
      
    </main>
  )
}

export default Hero