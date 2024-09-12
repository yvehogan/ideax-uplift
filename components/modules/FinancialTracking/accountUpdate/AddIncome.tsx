'use client';

import React, { useState } from 'react';

interface ModalProps {
  setShowSuccess: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  setActionType: React.Dispatch<
    React.SetStateAction<string>
  >;
}

const AddIncome: React.FC<ModalProps> = ({
  setShowSuccess,
  setClose,
  setActionType,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Grant');
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] =
    useState<string>('');
  const [categories, setCategories] = useState<string[]>([
    'Donation',
    'Grant',
    'Gift',
  ]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleAddCategory = () => {
    const newCategory = prompt('Enter new category');
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  const handleSubmit = () => {
    setActionType('add');
    setClose(false);
    setShowSuccess(true);
  };

  return (
    <div className=''>
      <div className='flex flex-col gap-3'>
        {/* <div className='flex flex-col gap-2'>
          <h2 className='text-[#626262] font-semibold'>
            Account Details
          </h2>
          <p className='text-[#002D54] font-semibold'>
            0432456345
          </p>
          <p className='text-[#696969] font-medium'>
            Dear to Heart Foundation
          </p>
          <p className='mb-4 text-[#696969] font-medium'>
            Wema Bank
          </p>
        </div> */}
        <div className='flex flex-col gap-2'>
          {' '}
          <h3 className='font-medium mb-2 text-[#626262]'>
            Category
          </h3>
          <div className='flex flex-wrap gap-2 mb-4'>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() =>
                  handleCategoryChange(category)
                }
                className={`px-4 py-2 font-medium text-sm rounded-[20px] ${
                  selectedCategory === category
                    ? 'bg-[#002D54] text-white'
                    : 'bg-[#EEF4FA] text-[#696969]'
                }`}
              >
                {category}
              </button>
            ))}
            <button
              onClick={handleAddCategory}
              className='flex text-sm font-medium items-center px-4 py-2 bg-white border border-[#002D54] rounded-full text-[#002D54]'
            >
              <span className='text-xl flex justify-center items-center text-[#002D54] font-bold h-5 w-5 rounded-[50%] border-2 border-[#002D54] mr-2'>
                +
              </span>{' '}
              Add new Category
            </button>
          </div>
        </div>

        <div className='mb-4'>
          <label className='block font-medium text-[#696969] mb-1'>
            Add Amount
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Type in amount'
            className='w-full p-4 border border-[#E4E4E4] rounded-[10px] placeholder:text-sm'
          />
        </div>

        <div className='mb-6'>
          <label className='block font-medium text-[#696969] mb-1'>
            Add Description
          </label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Type in description'
            className='w-full p-4 border border-[#E4E4E4] rounded-[10px] placeholder:text-sm'
          />
        </div>

        <button
          onClick={handleSubmit}
          className='w-full text-lg font-bold py-3 bg-[#002D54] text-white rounded-[10px]'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddIncome;
