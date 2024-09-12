import React from 'react';

type CardProps = {
  title: string;
  amount: string;
  percentage: string;
  percentageColor: string;
  icon: any;
  borderColor: string;
  description: string;
};

const DashCard: React.FC<CardProps> = ({
  title,
  amount,
  percentage,
  percentageColor,
  icon,
  borderColor,
  description,
}) => {
  return (
    <div
      className={`bg-white w-[270px] p-3 pb-5 rounded-md shadow-md border-l-4 ${borderColor} `}
    >
      <h3 className='text-[#6B7280] text-xs font-semibold'>
        {title}
      </h3>
      <p
        className={`text-2xl font-bold mt-1 ${percentageColor}`}
      >
        {amount}
      </p>
      <div
        className={`text-sm flex mt-6 items-center ${percentageColor}`}
      >
        <span className='mr-1'>{icon}</span>
        <p>
          {percentage}{' '}
          <span className='ml-1 text-gray-500'>
            {description}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DashCard;
