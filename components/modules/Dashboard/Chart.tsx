'use client';
import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface DataPoint {
  name: string;
  amount: number;
}

const weeklyDataLast7Days = [
  { name: '1st Sept', amount: 500000 },
  { name: '2nd Sept', amount: 650000 },
  { name: '3rd Sept', amount: 800000 },
  { name: '4th Sept', amount: 750000 },
  { name: '5th Sept', amount: 500000 },
  { name: '6th Sept', amount: 850000 },
  { name: '7th Sept', amount: 900000 },
];

const weeklyDataLastWeek = [
  { name: '25th Aug', amount: 450000 },
  { name: '26th Aug', amount: 600000 },
  { name: '27th Aug', amount: 700000 },
  { name: '28th Aug', amount: 800000 },
  { name: '29th Aug', amount: 550000 },
  { name: '30th Aug', amount: 650000 },
  { name: '31st Aug', amount: 720000 },
];

const monthlyData = [
  { name: 'January', amount: 3500000 },
  { name: 'February', amount: 4500000 },
  { name: 'March', amount: 4200000 },
  { name: 'April', amount: 5000000 },
  { name: 'May', amount: 6000000 },
  { name: 'June', amount: 4700000 },
];

const yearlyData = [
  { name: '2021', amount: 42000000 },
  { name: '2022', amount: 50000000 },
  { name: '2023', amount: 53000000 },
  { name: '2024', amount: 60000000 },
];

const ChartWithToggle: React.FC = () => {
  const [selectedParent, setSelectedParent] = useState<
    'donation' | 'expenses'
  >('donation');
  const [selectedTime, setSelectedTime] = useState<
    'weekly' | 'monthly' | 'yearly'
  >('weekly');
  const [weekToggle, setWeekToggle] = useState<
    'last7Days' | 'lastWeek'
  >('last7Days');

  // Determine the correct data to display based on the current selections
  const getCurrentData = () => {
    if (selectedTime === 'weekly') {
      return weekToggle === 'last7Days'
        ? weeklyDataLast7Days
        : weeklyDataLastWeek;
    } else if (selectedTime === 'monthly') {
      return monthlyData;
    } else if (selectedTime === 'yearly') {
      return yearlyData;
    }
  };

  const getTotalAmount = () => {
    const currentData = getCurrentData();
    return currentData?.reduce(
      (acc, item) => acc + item.amount,
      0
    );
  };

  return (
    <div className='w-full '>
      <div className='flex mb-8'>
        <button
          className={`py-[8px] px-3 text-xs rounded-tl-[6px] rounded-bl-[6px] font-medium ${
            selectedParent === 'donation'
              ? 'bg-[#00254F] text-white'
              : 'bg-[#FFFFFF] border shadow-customBtn text-[#111928]'
          }`}
          onClick={() => setSelectedParent('donation')}
        >
          Donation
        </button>
        <button
          className={`py-[8px] px-3 text-xs font-medium rounded-tr-[6px] rounded-br-[6px] ${
            selectedParent === 'expenses'
              ? 'bg-[#00254F] text-white'
              : 'bg-[#FFFFFF] text-[#111928]  border shadow-customBtn'
          }`}
          onClick={() => setSelectedParent('expenses')}
        >
          Expenses
        </button>
      </div>
      <div className='shadow-graphShadow !drop-shadow-xl rounded-lg border p-6 w-full h-[600px]'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex flex-col gap-1 mb-6'>
            <h1 className='text-[#002D54] font-semibold text-xl capitalize'>
              {selectedParent}
            </h1>
            <p className='font-medium text-lg flex items-center'>
              {' '}
              N {getTotalAmount()?.toLocaleString()}{' '}
              <span className='ml-2 text-[#149D52] text-xs'>
                ↑ 2.1% vs last week
              </span>
            </p>
            <p className='text-[#737B8B] text-xs'>
              01 - 07 Sept, 2024
            </p>
          </div>
          <div className='flex gap-x-4  pb-3 border-b text-[#002D54] font-medium text-sm'>
            <button
              className={`pb-3 -mb-3 ${
                selectedTime === 'weekly'
                  ? 'border-b border-b-[#002D54]'
                  : ''
              }`}
              onClick={() => setSelectedTime('weekly')}
            >
              Weekly
            </button>
            <button
              className={`pb-3 -mb-3 ${
                selectedTime === 'monthly'
                  ? 'border-b border-b-[#002D54]'
                  : ''
              }`}
              onClick={() => setSelectedTime('monthly')}
            >
              Monthly
            </button>
            <button
              className={`pb-3 -mb-3 ${
                selectedTime === 'yearly'
                  ? 'border-b border-b-[#002D54]'
                  : ''
              }`}
              onClick={() => setSelectedTime('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Display the chart */}
        <ResponsiveContainer
          width='100%'
          height='70%'
        >
          <BarChart
            data={getCurrentData()}
            margin={{
              top: 20,
              // right: 30,
              // left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />

            {/* <YAxis
          tick={false}
          axisLine={false}
        /> */}

            {/* Custom Tooltip to remove background */}
            <Tooltip
              formatter={(value: number) =>
                `₦${value.toLocaleString()}`
              }
              // Remove background color and borders
              cursor={{ fill: 'transparent' }} // Removes hover effect background
            />

            <Legend
              verticalAlign='bottom'
              iconType='circle'
            />

            {/* Bar without hover background */}
            <Bar
              dataKey='amount'
              fill={
                selectedParent === 'donation'
                  ? '#00254F'
                  : '#D8D9DB'
              }
              radius={[10, 10, 0, 0]}
              fillOpacity={1} // Keep fill opacity solid
            />
          </BarChart>
        </ResponsiveContainer>

        {selectedTime === 'weekly' && (
          <div className='flex justify-around my-5 border-t-2 border-t-[#E6E8EC] py-5'>
            <button
              className={`tab-button flex text-sm items-center font-medium gap-x-1 ${
                weekToggle === 'last7Days'
                  ? 'text-[#002D54]'
                  : 'text-[#121212]'
              }`}
              onClick={() => setWeekToggle('last7Days')}
            >
              <span
                className={`h-4 w-4 rounded-[50%] border ${
                  weekToggle === 'last7Days'
                    ? 'bg-[#002D54]'
                    : 'bg-[#D8D9DB]'
                }`}
              ></span>
              Last 7 Days
            </button>
            <button
              className={`tab-button flex text-sm items-center font-medium gap-x-1 ${
                weekToggle === 'lastWeek'
                  ? 'text-[#002D54]'
                  : 'text-[#121212]'
              }`}
              onClick={() => setWeekToggle('lastWeek')}
            >
              <span
                className={`h-4 w-4 rounded-[50%] border ${
                  weekToggle === 'lastWeek'
                    ? 'bg-[#002D54]'
                    : 'bg-[#D8D9DB]'
                }`}
              ></span>
              Last Week
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChartWithToggle;
