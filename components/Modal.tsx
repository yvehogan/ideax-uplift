import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  title?: string;
  subTitle?: string;
  showHeader?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  title,
  subTitle,
  showHeader,
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed overflow-y-auto inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 py-20'>
      <div
        className={`${className} w-[500px]  bg-white rounded-[20px] shadow-lg`}
      >
        <div className='flex justify-between gap-4 px-6 py-6 shadow-graphShadow'>
          <div>
            {!showHeader && (
              <>
                {' '}
                <p className='font-bold text-2xl text-[#3B3B3B]'>
                  {title}
                </p>
                <p className='font-medium text-[#696969]'>
                  {subTitle}
                </p>
              </>
            )}
          </div>

          <button
            className='text-black hover:text-gray-700'
            onClick={onClose}
          >
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.9998 29.3334C23.3636 29.3334 29.3332 23.3638 29.3332 16C29.3332 8.63622 23.3636 2.66669 15.9998 2.66669C8.63604 2.66669 2.6665 8.63622 2.6665 16C2.6665 23.3638 8.63604 29.3334 15.9998 29.3334Z'
                fill='#CCD5DD'
              />
              <path
                d='M17.4133 16L20.48 12.9333C20.8666 12.5466 20.8666 11.9066 20.48 11.52C20.0933 11.1333 19.4533 11.1333 19.0666 11.52L16 14.5866L12.9333 11.52C12.5466 11.1333 11.9066 11.1333 11.52 11.52C11.1333 11.9066 11.1333 12.5466 11.52 12.9333L14.5866 16L11.52 19.0666C11.1333 19.4533 11.1333 20.0933 11.52 20.48C11.72 20.68 11.9733 20.7733 12.2266 20.7733C12.48 20.7733 12.7333 20.68 12.9333 20.48L16 17.4133L19.0666 20.48C19.2666 20.68 19.52 20.7733 19.7733 20.7733C20.0266 20.7733 20.28 20.68 20.48 20.48C20.8666 20.0933 20.8666 19.4533 20.48 19.0666L17.4133 16Z'
                fill='#002D54'
              />
            </svg>
          </button>
        </div>
        <div className='p-6'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
