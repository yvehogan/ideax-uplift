import React from 'react';

const Scheduler = () => {
  const tasks = [
    {
      name: 'Allocate Budget',
      start: '8:00 AM',
      end: '8:30 AM',
      time: '8:00',
      color: 'bg-[#002D54]',
    },
    {
      name: 'Call Andrew',
      start: '9:00 AM',
      end: '9:30 AM',
      time: '9:00',
      color: 'bg-[#03543F]',
    },
  ];

  // Generates time slots with half-hour intervals from 8:00 AM to 12:30 PM
  const timeSlots = [
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
  ];

  return (
    <div className='border rounded-[8px] shadow-graphShadow w-full p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-semibold'>
          Daily Task
        </h2>
        <div className='text-gray-600 text-sm'>
          28 Nov 2022
        </div>
      </div>

      {/* Timeline */}
      <div className='relative'>
        {timeSlots.map((slot, idx) => (
          <div
            key={idx}
            className='h-12 flex items-center justify-start'
          >
            <span className='text-sm text-gray-500 w-12'>
              {slot}
            </span>
            <div className='w-full border-t border-gray-200'></div>
          </div>
        ))}

        {/* Tasks */}
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className={`${task.color} absolute flex flex-col items-center left-12 w-[60%] rounded-lg px-2 py-1 text-white`}
            // Calculate the top offset based on time
            style={{
              top: `${timeSlots.indexOf(task.time) * 48}px`,
            }}
          >
            <div className='font-medium'>{task.name}</div>
            <div className='text-xs'>
              {task.start} - {task.end}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scheduler;
