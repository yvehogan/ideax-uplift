import React from 'react';
import { Search, ChevronDown, MessageSquare, Bell } from 'lucide-react';
import { IoMdNotifications } from "react-icons/io";
import { RiMessage3Line } from "react-icons/ri";
import Image from 'next/image';

const NgoHeader = () => {
  return (
    <header className="bg-white drop-shadow-lg">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="relative flex-grow max-w-xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F6F6FB]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8">
                <Image src="/images/green-initiative.png" alt="User Avatar" width={40} height={40} />
              </div>
              <span className="text-[#1F384C]">Dear Heart to Heart foundation</span>
              <ChevronDown size={22} className="text-[#B7B7B7]" />
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="">
                <RiMessage3Line size={22} className="text-[#B7B7B7]" />
              </button>
              <button className="">
                <IoMdNotifications size={22} className="text-[#B7B7B7]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NgoHeader;