import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { List } from "@/app/types/listOfNgos";
import React from "react";
import NGOs from "@/components/data/ngos";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const MatchResults = () => {
  const typedList: List[] = NGOs;

  return (
    <div className="mt-12 px-16">
      <Header />
      <div className="px-12">
        <div className="flex items-center my-20">
            <p className="text-[#667085] font-[500]">Find Matches</p>
            <ChevronRight className="text-[#667085] font-[500] h-4 w-5"/>
            <p className="text-secondary font-semibold">Match result</p>
        </div>
      <div className="bg-[url('/images/find-match.png')] bg-cover bg-center h-[450px] rounded-xl flex">
          <div className="px-12 flex flex-col justify-center">
            <h5 className="text-primary font-bold text-[20px]">For Donors</h5>
            <h2 className="text-[40px] font-semibold text-white py-2">
              Find a Matching NGO
            </h2>
            <p className="font-[500] text-white max-w-[483px]">
              Use our comprehensive matching tool to discover NGOs that resonate
              with your personal values and passions. Our platform connects you
              with organizations where your contributions can make a significant
              difference.
            </p>
            <Button
              size="lg"
              asChild
            //   onClick={() => setIsOpen(true)}
              className="bg-primary text-textBlack text-[16px] w-44 mt-10 font-semibold hover:bg-primary hover:opacity-70"
            >
              <Link href="/find-matches">
              Find Matches
              </Link>
            </Button>
          </div>
        </div>
        <ul className="flex gap-5 mt-12">
          <li className="bg-secondary text-white rounded-full px-6 py-2 font-semibold">
            Matching NGOs
          </li>
        </ul>
        <div className="flex justify-between flex-wrap gap-5 mt-16 pb-24">
          {NGOs?.map((item) => (
            <a href="/match-details" key={item?.id} className="shadow-custom w-[30%] bg-white drop-shadow- px-5 py-6 rounded-xl">
                <Image src="/images/ngo.png" alt="" height={200} width={200} className="w-full object-contain" />
                <div className="flex items-center py-2">
                <Image src="/images/green-initiative.png" alt="" height={50} width={50} className=" object-contain" />
              <h3 className="font-bold text-sm">{item?.name}</h3>
                </div>
                <div className="flex gap-3 items-center">
                <Image src="/images/medal.png" alt="" height={25} width={25} className=" object-contain" />
                <h4 className="font-semibold">Mission</h4>
                </div>
              <p className="text-textGrey text-sm font-[500]">{item?.mission}</p>
              <div className="flex gap-3 items-center mt-3">
                <Image src="/images/medal.png" alt="" height={25} width={25} className=" object-contain" />
                <h4 className="font-semibold">Ongoing Project</h4>
                </div>
              <p className="text-textGrey text-sm font-[500]">{item?.project}</p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MatchResults;
