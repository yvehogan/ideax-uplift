import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="bg-lightBlue h-screen flex items-center justify-center">
      <div className="bg-white flex flex-col max-w-4xl w-full rounded-xl my-8">
        <div className="text- w-full font-[500] flex justify-between items-center mb-3 drop-shadow-xl bg-white py-4 px-8">
          <a href="/find-matches" className="flex items-center">
            <ChevronLeft className="h-4 w-5" />
            Back
          </a>
          <Image
            src="/images/logo2.png"
            className="mx-auto"
            alt=""
            width={80}
            height={80}
          />
        </div>

        <div className="flex mt-5 gap-10 px-14 pb-10">
          <div className="shadow-custom w-[400px] bg-white px-8 py-6 rounded-xl">
            <Image
              src="/images/edu2.png"
              alt=""
              height={200}
              width={200}
              className="w-full object-contain rounded-lg"
            />
            <h3 className="font-bold text-[20px] py-3">
              Building and equipping primary schools in rural ekiti
            </h3>
            <p className="text-textGrey text-sm font-[500] pb-3">
              To promote environmental sustainability through conservation
              efforts and community education
            </p>
            <div className="bg-secondary rounded-2xl px-4 py-4 pt-4">
              <p className="text-white font-semibold mb-2">N 250,000 Raised</p>
              <Progress value={33} />
              <p className="text-white font-semibold mt-2 mb-2">
                Target N5,000,000
              </p>
            </div>
          </div>
          <div className="bg-white">
            <h4 className="text-[18px] font-bold text-[#3B3B3B] mb-8">Fill the form below to donate to the project</h4>
            <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email Address</Label>
      <Input type="email" id="email" placeholder="Enter your email address" />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5 mt-8 mb-10">
      <Label htmlFor="number">Amount</Label>
      <Input type="" id="number" placeholder="N" />
    </div>
    <Button size="lg" className="bg-secondary text-white text-[16px] font-semibold hover:opacity-70 w-full py-6">
        Proceed to payment
        </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
