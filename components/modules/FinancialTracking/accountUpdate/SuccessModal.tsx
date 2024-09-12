import Image from 'next/image';
import React from 'react';

interface ModalProp {
  title: string;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessModal: React.FC<ModalProp> = ({
  title,
  setClose,
}) => {
  return (
    <div className='flex flex-col justify-center gap-5 items-center'>
      <Image
        src='/svgs/success.svg'
        alt='success'
        width={100}
        height={100}
      />
      <p className='font-medium mt-6'>{title}</p>
      <button
        onClick={() => setClose(false)}
        className='w-full text-lg font-bold py-3 bg-[#002D54] text-white rounded-[10px]'
      >
        Proceed
      </button>
    </div>
  );
};

export default SuccessModal;
