'use client';
import React, { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { saveAs } from 'file-saver';
import Image from 'next/image';

// Define donor data type
type Donor = {
  name: string;
  project: string;
  amount: string;
  status: string;
};

const DonorList: React.FC = () => {
  // Create a single donor object
  const singleDonor: Donor = {
    name: 'Atinuke Gold',
    project: 'Operation feed the Ayegedu Community',
    amount: '₦10,000',
    status: 'Fulfilled',
  };

  // Duplicate the donor object 10 times
  const [donors, setDonors] = useState<Donor[]>(
    Array(7).fill(singleDonor)
  );

  // Pagination state
  const [currentPage, setCurrentPage] = useState(2); // Default to page 2, adjust as necessary
  const totalPages = 100;

  // Handle export to CSV
  const handleExport = () => {
    const csvContent = donors
      .map(
        (donor) =>
          `${donor.name},${donor.project},${donor.amount},${donor.status}`
      )
      .join('\n');
    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;',
    });
    saveAs(blob, 'donor_list.csv');
  };

  return (
    <div className='max-w-4xl border rounded-[8px] shadow-graphShadow px-4 pt-3 pb-5'>
      <div className=''>
        <div className='flex justify-between items-center my-4'>
          <h2 className='text-2xl font-semibold text-[#002D54]'>
            Donors
          </h2>
          <button
            onClick={handleExport}
            className='flex gap-x-1 items-center border border-[#002D54] text-[#111928] px-4 py-2 font-medium rounded-[8px] hover:bg-blue-100'
          >
            <FaFileDownload />
            Export
          </button>
        </div>
        <div className=''>
          {donors.map((donor, index) => (
            <div
              key={index}
              className='flex justify-between items-center py-4 border-b border-t'
            >
              <div className='flex items-center space-x-4'>
                <Image
                  src='/svgs/avatar.svg' // Replace with actual image URL
                  alt={donor.name}
                  width={20}
                  height={20}
                  className='w-10 h-10 rounded-full'
                />
                <div>
                  <h3 className='font-medium'>
                    {donor.name}
                  </h3>
                  <p className='text-xs text-[#6B7280]'>
                    {donor.project}
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-[5px]'>
                <p className='font-semibold'>
                  {donor.amount}
                </p>
                <span className='bg-[#DEF7EC] font-medium text-xs text-[#03543F] px-3 py-[2px] rounded-md'>
                  {donor.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className='flex justify-end space-x-2 mt-4'>
          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((prev) => prev - 1)
            }
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? 'bg-gray-300'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            &lt;
          </button>
          {[...Array(3)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md border border-[#D1D5DB] font-medium ${
                currentPage === i + 1
                  ? 'bg-[#C4E4FF] text-[#002D54]'
                  : 'text-[#6B7280]'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <span className='px-3 py-1'>...</span>
          <button
            onClick={() => setCurrentPage(totalPages)}
            className='px-3 py-1  rounded-md border border-[#D1D5DB] font-medium'
          >
            {totalPages}
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => prev + 1)
            }
            className={`px-3 py-1 rounded-md ${
              currentPage === totalPages
                ? 'bg-gray-300'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonorList;
