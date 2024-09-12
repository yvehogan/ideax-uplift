"use client"
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import { ChevronRight } from "lucide-react";
import { Details } from "@/app/types/detailsOfNgos";
import MatchListDetails from "@/components/data/match-details";
import Link from "next/link";

const NgoDetails = () => {
  const typedList: Details[] = MatchListDetails;

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "past projects", "ongoing project"];

  const filteredList =
    selectedCategory === "All"
      ? typedList
      : typedList.filter((list) => list?.category === selectedCategory);


  return (
    <div className="mt-12 px-16">
      <Header />
      <div className="px-16">
        <div className="flex items-center my-20">
          <p className="text-[#667085] font-[500]">Find Matches</p>
          <ChevronRight className="text-[#667085] font-[500] h-4 w-5" />
          <p className="text-[#667085] font-[500]">Match Result</p>
          <ChevronRight className="text-[#667085] font-[500] h-4 w-5" />
          <p className="text-secondary font-semibold">Education for All</p>
        </div>
        <div className="bg-[url('/images/edu1.png')] bg-cover bg-center h-[250px] mt-4 rounded-xl relative mb-36">
          <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 px-12 flex items-center max-w-5xl bg-white h-[120px] w-full rounded-xl shadow-lg">
            <Image src="/images/edu-logo.png" alt="" height={140} width={140} />
            <div>
              <h5 className="font-bold text-[20px]">Education for All</h5>
              <div className="flex gap-3 items-center">
                <Image
                  src="/images/medal.png"
                  alt=""
                  height={25}
                  width={25}
                  className=" object-contain"
                />
                <h4 className="font-semibold text-[14px] py-2">Mission</h4>
              </div>
              <p>
                To provide equitable access to quality education for underserved
                communities around the world.
              </p>
            </div>
          </div>
        </div>
        <ul className="flex gap-5 mt-12">
          {categories?.map((category) => (
            <li
              key={category}
              className={`rounded-full px-6 py-2 font-semibold cursor-pointer ${
                selectedCategory === category
                  ? "bg-secondary text-white"
                  : "bg-lightBlue text-textGrey"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="flex justify-between flex-wrap gap-5 mt-16 pb-24">
          {filteredList?.map((item) => (
            <div
              key={item?.id}
              className="shadow-custom w-[400px] bg-white drop-shadow- px-5 py-6 rounded-xl"
            >
              <Image
                src={item?.image}
                alt=""
                height={200}
                width={200}
                className="w-full object-contain rounded-lg"
              />
              <h3 className="font-bold text-[20px] py-3">{item?.name}</h3>
              <p className="text-textGrey text-sm font-[500] pb-3">
                {item?.mission}
              </p>
              <div className="bg-secondary rounded-xl px-4 py-6 pt-4">
                <p className="text-white font-semibold mb-2">
                  N 250,000 Raised
                </p>
                <Progress value={33} />
                <p className="text-white font-semibold mt-2 mb-4">
                  Target N5,000,000
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-textBlack text-[16px] font-semibold hover:bg-primary hover:opacity-70"
                >
                  <Link href="/donate">Donate</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NgoDetails;
