import React from 'react';

type ProjectStatus = 'Completed' | 'Ongoing' | 'Delayed';

interface ProjectCardProps {
  title: string;
  description: string;
  amountRaised: number;
  targetAmount: number;
  dueDate: string;
  status: ProjectStatus;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  amountRaised,
  targetAmount,
  dueDate,
  status,
}) => {
  const getStatusClass = () => {
    switch (status) {
      case 'Completed':
        return 'bg-[#DEF7EC] text-[#03543F]';
      case 'Ongoing':
        return 'bg-[#E1EFFE] text-[#1E429F]';
      case 'Delayed':
        return 'bg-[#FDF6B2] text-[#723B13]';
      default:
        return '';
    }
  };

  return (
    <div className='border rounded-lg p-4 shadow-md'>
      <h2 className='text-xl font-bold'>{title}</h2>
      <p className='text-sm font-bold'>{description}</p>
      <div className='mt-3 text-sm'>
        <p className='font-bold text-[#1B1B1B]'>
          ₦{amountRaised.toLocaleString()}
        </p>
        <div className='w-full bg-gray-200 h-2 rounded-full my-2'>
          <div
            className='h-1 bg-[#00AE32] rounded-full'
            style={{
              width: `${
                (amountRaised / targetAmount) * 100
              }%`,
            }}
          ></div>
        </div>
        <p className='text-[#000000] font-bold'>
          Target: ₦{targetAmount.toLocaleString()}
        </p>

        <div className='flex justify-between items-center text-sm'>
          {' '}
          <p className='text-[#909090] mt-2 font-medium'>
            Due:{' '}
            <span className='text-black'> {dueDate}</span>
          </p>
          <span
            className={`inline-block mt-3 px-3 py-1 rounded-[4px] text-sm font-semibold ${getStatusClass()}`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
