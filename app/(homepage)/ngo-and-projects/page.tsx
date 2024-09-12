"use client";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { List } from "@/app/types/listOfNgos";
import React, { useState } from "react";
import NGOs from "@/components/data/ngos";
import Image from "next/image";

const NgoAndProjects = () => {
  const typedList: List[] = NGOs;

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Health", "Education", "Environment"];

  const filteredNGOs =
    selectedCategory === "All"
      ? typedList
      : typedList.filter((ngo) => ngo?.category === selectedCategory);

  return (
    <div className="mt-12 px-16">
      <Header />
      <div className="px-16">
        <div className="bg-[url('/images/hero-ngo.png')] bg-cover bg-center h-[350px] rounded-2xl mt-24 flex flex-col justify-center items-center text-center">
          <h2 className="font-semibold text-white text-[48px]">
            Explore our <span className="text-primary">registered NGOs</span>
          </h2>
          <p className="text-white font-[500] text-lg">
            Learn about their missions and discover the projects they are
            working on.
          </p>
        </div>
        <ul className="flex gap-5 mt-12">
          {categories?.map((category) => (
            <li
              key={category}
              className={`rounded-full px-8 py-2 font-semibold cursor-pointer ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-lightBlue text-textGrey"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="flex justify-start flex-wrap gap-5 mt-16 pb-24">
          {filteredNGOs?.map((item) => (
            <a
              href="/ngo-details"
              key={item?.id}
              className="shadow-custom w-[400px] bg-white drop-shadow- px-5 py-6 rounded-xl"
            >
              <Image
                src="/images/ngo.png"
                alt=""
                height={200}
                width={200}
                className="w-full object-contain"
              />
              <div className="flex items-center py-2">
                <Image
                  src="/images/green-initiative.png"
                  alt=""
                  height={50}
                  width={50}
                  className=" object-contain"
                />
                <h3 className="font-bold text-sm">{item?.name}</h3>
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  src="/images/medal.png"
                  alt=""
                  height={25}
                  width={25}
                  className=" object-contain"
                />
                <h4 className="font-semibold">Mission</h4>
              </div>
              <p className="text-textGrey text-sm font-[500]">
                {item?.mission}
              </p>
              <div className="flex gap-3 items-center mt-3">
                <Image
                  src="/images/medal.png"
                  alt=""
                  height={25}
                  width={25}
                  className=" object-contain"
                />
                <h4 className="font-semibold">Ongoing Project</h4>
              </div>
              <p className="text-textGrey text-sm font-[500]">
                {item?.project}
              </p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NgoAndProjects;
