import React from "react";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

interface ModalContentProps {
  onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
  return (
    <div className="mt-3">
      <div className="flex justify-between drop-shadow-xl py-6 px-10 bg-white">
        <div>
          <h3 className="font-bold text-[#3B3B3B] text-[24px] mb-2">
            Find a Matching NGO
          </h3>
          <p className="text-textGrey font-[500]">
            Complete this form to find a matching NGO
          </p>
        </div>
        <X
          onClick={onClose}
          className="text-[#002D54] bg-[#CCD5DD] p-1 rounded-full font-semibold cursor-pointer"
        />
      </div>
      <div className="mt-8 px-10 pb-24">
        <p className="text-textGrey font-[500]">What are you interested in?</p>
        <ul className="flex flex-wrap gap-5 mt-4">
          <li className="bg-secondary text-white rounded-full px-6 py-2 font-semibold">
            Health
          </li>
          <li className="bg-lightBlue text-textGrey rounded-full px-6 py-2 font-semibold">
            Education
          </li>
          <li className="bg-lightBlue text-textGrey rounded-full px-6 py-2 font-semibold">
            Environment
          </li>
          <li className="bg-lightBlue text-textGrey rounded-full px-6 py-2 font-semibold">
            Human Right
          </li>
          <li className="bg-lightBlue text-textGrey rounded-full px-6 py-2 font-semibold">
            Social Services
          </li>
          <li className="bg-lightBlue text-textGrey rounded-full px-6 py-2 font-semibold">
            Disaster Relief
          </li>
        </ul>
        <p className="text-textGrey font-[500] mt-8 mb-4">
          Geographic location
        </p>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="-Select-" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lagos">Lagos</SelectItem>
            <SelectItem value="rivers">Rivers</SelectItem>
            <SelectItem value="ogun">Ogun</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-textGrey font-[500] mt-8 mb-4">Funding capacity</p>
        <Slider defaultValue={[33]} max={100} step={2} />
        <div className="flex gap-3 mt-5 items-center">
          <Input type="number" placeholder="#" />
          <p className="w-4">-</p>
          <Input type="Number" placeholder="#" />
        </div>
        <p className="text-textGrey font-[500] mt-8">Tenure</p>
        <ul className="flex flex-wrap gap-5 mt-4">
          <li className="bg-secondary text-white rounded-full px-6 py-2 font-semibold">
            Long term
          </li>
          <li className="bg-lightBlue text-textGrey rounded-full px-6 py-2 font-semibold">
            Short term
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalContent;
