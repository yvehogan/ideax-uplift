"use client";
import React, { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { MoveUp } from 'lucide-react';
import { BarChartData } from "@/components/data/chart-data";


const DonationChart = () => {
  const [category, setCategory] = useState('donation');
  const [selectedTime, setSelectedTime] = useState('weekly');

  const handleCategoryClick = (cat:any) => {
    setCategory(cat);
  };

  const filteredData = useMemo(() => {
    return BarChartData?.filter((item) => item.category === category && item.day === selectedTime);
  }, [category, selectedTime]);

  const getTotalAmount = () => {
    return filteredData.reduce((total, item) => total + item["lastSevenDays"], 0);
  };

  return (
    <>
      <div className="flex justify-between mb-8">
        <div className="flex">
          <button
            className={`${category === 'donation' ? 'bg-secondary text-white py-2 px-3 rounded-l-lg' : 'border border-[#E5E7EB] py-2 px-3 rounded-l-lg'}`}
            onClick={() => handleCategoryClick('donation')}
          >
            Donation
          </button>
          <button
            className={`border border-[#E5E7EB] py-2 px-3 rounded-r-lg ${category === 'expenses' ? 'bg-secondary text-white' : 'bg-white text-secondary'}`}
            onClick={() => handleCategoryClick('expenses')}
          >
            {category === 'donation' ? 'Expenses' : 'Expense'}
          </button>
        </div>
        <button className="border border-secondary text-secondary py-2 px-4 rounded-lg font-semibold">Export</button>
      </div>
      <div className="bg-white drop-shadow rounded-lg px-6 py-8" style={{ width: "100%", height: "500px" }}>
        <div className='w-full flex justify-between items-center'>
          <div className='flex flex-col gap-1 mb-6'>
            <h1 className='text-[#002D54] font-semibold text-xl capitalize'>
              {category}
            </h1>
            <p className='font-medium text-lg flex items-center'>
              {' '}
              N {getTotalAmount().toLocaleString()}{' '}
              <span className='ml-2 text-[#149D52] text-xs'>
                ↑ 2.1% vs last week
              </span>
            </p>
            <p className='text-[#737B8B] text-xs'>
              01 - 07 Sept, 2024
            </p>
          </div>
          <div className='flex gap-x-4 pb-3 border-b text-[#002D54] font-medium text-sm'>
            <button
              className={`pb-3 -mb-3 ${selectedTime === 'weekly' ? 'border-b border-b-[#002D54]' : ''}`}
              onClick={() => setSelectedTime('weekly')}
            >
              Weekly
            </button>
            <button
              className={`pb-3 -mb-3 ${selectedTime === 'monthly' ? 'border-b border-b-[#002D54]' : ''}`}
              onClick={() => setSelectedTime('monthly')}
            >
              Monthly
            </button>
            <button
              className={`pb-3 -mb-3 ${selectedTime === 'yearly' ? 'border-b border-b-[#002D54]' : ''}`}
              onClick={() => setSelectedTime('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={filteredData}
            margin={{
              top: 5,
              right: 30,
              left: -55,
              bottom: 75,
            }}
            barSize={50}
            barGap={-0.4}
          >
            <XAxis dataKey="name" />
            <YAxis tickLine={false} axisLine={false} tick={false} />
            <Tooltip
              cursor={{ fill: 'transparent' }}
            />
            <Legend />
            <Bar dataKey="lastSevenDays" fill="#002D54" radius={[4, 4, 0, 0]} />
            <Bar dataKey="lastWeek" fill="#D8D8D8" radius={[4, 4, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default DonationChart;