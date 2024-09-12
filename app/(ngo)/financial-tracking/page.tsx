"use client"
import { add, minus } from '@/public/svgs/export';
import Modal from '@/components/Modal';

import Image from "next/image";
import { copyToClipboard } from '@/lib/func';

import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import AddIncome from '@/components/modules/FinancialTracking/accountUpdate/AddIncome';
import WithdrawMoney from '@/components/modules/FinancialTracking/accountUpdate/WithdrawMoney';
import SuccessModal from '@/components/modules/FinancialTracking/accountUpdate/SuccessModal';
import FinancialTrackingCard from '@/components/modules/FinancialTracking/FinancialTrackingCard';
import DonationChart from '@/components/modules/FinancialTracking/DonationChart';
import FinancialTrackingPieChart from '@/components/modules/FinancialTracking/FinancialTrackingPieChart';
import TransactionTable from '@/components/modules/FinancialTracking/transaction';

const FinancialTracking = () => {
  const [openAddIncome, setOpenAddIncome] = useState(false);
  const [openWithdraw, setOpenWithdraw] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [actionType, setActionType] = useState('add');
  const accountNumber = '0434567865432';

  const handleCopy = async () => {
    await copyToClipboard(accountNumber);
  };
  return (
    <>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-y-3'>
          <p className='text-textAsh font-medium'>
            Financial Tracking and Reporting
          </p>
          <p className='font-bold text-[#404040] text-2xl'>
            Hello Dear to Heart Foundation,
          </p>
        </div>

        <div className='flex items-center gap-2 text-white bg-secondary py-4 px-4 rounded-md'>
          <p>
            Account Details <span className='mx-2'>|</span>
            <span className='text-sm'>
              Dear to Heart foundation{' '}
            </span>
            <span className='mx-2 text-sm'>
              {accountNumber}
            </span>
          </p>
          <FaCopy
            onClick={handleCopy}
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='flex justify-between gap-4 mt-20'>
            <button
              onClick={() => setOpenAddIncome(true)}
              className='bg-[#002D54] w-full py-3 px-3 flex items-center gap-x-3 rounded-[8px] border border-[#ECEFF2] shadow-customBtn text-white '
            >
              <Image
                src={add}
                alt='add'
              />
              <div className='flex flex-col'>
                <p className='font-semibold text-start'>
                  Add Money
                </p>
                <p className='text-sm'>
                  Add money to your account
                </p>
              </div>
            </button>
            <button
              onClick={() => setOpenWithdraw(true)}
              className='bg-white w-full py-3 px-3 flex items-center gap-x-2 rounded-[8px] border border-[#002D54] shadow-customBtn'
            >
              <Image
                src={minus}
                alt='add'
              />
              <div className='flex flex-col gap'>
                <p className='font-semibold text-start text-[#333E47]'>
                  Withdraw Money
                </p>
                <p className='text-sm text-start'>
                  Withdraw money from your account
                </p>
              </div>
            </button>
          </div>
      <FinancialTrackingCard />
      <div className="w-full flex gap-8 py-14">
      <div className="w-3/5">
        <DonationChart />
      </div>
      <div className="w-2/5">
        <FinancialTrackingPieChart />
      </div>
    </div>
      <TransactionTable />
      <Modal
        className='mt-[10rem]'
        isOpen={openAddIncome}
        onClose={() => setOpenAddIncome(false)}
        title='Add Income'
        subTitle='Create and add income manually'
      >
        <AddIncome
          setActionType={setActionType}
          setShowSuccess={setShowSuccess}
          setClose={setOpenAddIncome}
        />
      </Modal>
      <Modal
        className='mt-[10rem]'
        isOpen={openWithdraw}
        onClose={() => setOpenWithdraw(false)}
        title='Withdraw Money'
        subTitle='Make a transfer to the account below and your account will be credited instantly'
      >
        <WithdrawMoney
          setActionType={setActionType}
          setShowSuccess={setShowSuccess}
          setClose={setOpenWithdraw}
        />
      </Modal>
      <Modal
        showHeader
        className=' !w-[400px]'
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title='Withdraw Money'
        subTitle='Make a transfer to the account below and your account will be credited instantly'
      >
        <SuccessModal
          setClose={setShowSuccess}
          title={
            actionType === 'add'
              ? 'Money added successfully'
              : 'Withdrawal successful'
          }
        />
      </Modal>
    </>
  );
};

export default FinancialTracking;
