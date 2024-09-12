import Image from 'next/image';
import React from 'react';

interface NotificationItemProps {
  type: 'Donation' | 'Message';
  description: string;
  time: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  type,
  description,
  time,
}) => {
  return (
    <div className='border border-[#C8CBD9] rounded-md p-4 flex items-center space-x-4 mb-4'>
      {/* Icon */}
      <Image
        src='/svgs/thunder.svg'
        alt=''
        width={50}
        height={50}
      />

      {/* Content */}
      <div className='flex-1 gap-1'>
        <h3 className='font-bold text-[#2D5587]'>{type}</h3>
        <p className='text-xs text-[#2D5587] mt-1'>
          {description}
        </p>
        <span className='text-xs py-[3px] rounded-[6px] px-3 bg-[#E1EFFE] mt-1'>
          {time}
        </span>
      </div>
    </div>
  );
};

export default NotificationItem;
