"use client";
import React, { useState } from "react";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModalContent from "@/components/forms/ModalContent";

const FindMatches = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="mt-12 px-16">
      <Header />
      <div className="px-8">
        <div className="bg-[url('/images/find-match.png')] bg-cover bg-center h-[450px] mt-24 rounded-xl flex">
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
              onClick={() => setIsOpen(true)}
              className="bg-primary text-textBlack text-[16px] w-44 mt-10 font-semibold hover:bg-primary hover:opacity-70"
            >
              Find Matches
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
        className="fixed inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto w-full pb-16"
        onClick={closeModal}
      >
        <div
          className="relative mx-auto py-4 border w-2/5 h-screen shadow-lg rounded-t-xl bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <ModalContent onClose={closeModal} />
        </div>
        <div className="h-28 bg-secondary w-2/5 mx-auto rounded-b-xl">
          <div className="pl-8">
            <Button
              size="lg"
              asChild
              className="bg-primary text-textBlack text-[16px] w-44 mt-10 font-semibold hover:bg-primary hover:opacity-70"
            >
              <Link href="/match-results">
              Find Matches
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      )}

      <Footer />
    </div>
  );
};

export default FindMatches;
