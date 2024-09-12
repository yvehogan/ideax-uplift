import React from 'react';
import FinancialTrackingDetails from '../../data/financial-tracking';

const FinancialTrackingCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-16">
    {FinancialTrackingDetails?.map((item) => (
      <div key={item?.id} className="relative overflow-hidden rounded-lg bg-white shadow-md">
        <div 
          className="absolute left-0 top-0 bottom-0 w-1.5" 
          style={{ backgroundColor: item?.borderColor }}
        ></div>
        
        <div className="p-4">
          <h3 className="text-xs font-medium mb-2 text-[#6B7280]">{item?.title}</h3>
          <p className="text-2xl font-bold" style={{ color: item?.borderColor }}>
            {item?.amount}
          </p>
          <div className="flex gap-2 items-center mb-2 mt-5">
            <p className="font-bold" style={{ color: item?.iconColor }}>
              {item?.percentage}
            </p>
            {item.icon && React.createElement(item.icon, { 
              className: "h-4 w-4",
              style: { color: item?.iconColor }
            })}
          </div>
        </div>
      </div>
    ))}
  </div>
);
};

export default FinancialTrackingCard;