'use client';
import { add, minus } from '@/public/svgs/export';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import DashCard from './DashCard';
import { cardData } from '@/components/data/dashboard';
import Projects from './projects';
import TransactionTable from './Transaction';
import DonorList from './donor';
import Notifications from './notification';
import PledgeList from './pledges';
import Scheduler from './schedular';
import { copyToClipboard } from '@/lib/func';
import Modal from '@/components/Modal';
import AddMoney from './accountUpdate/AddMoney';
import WithdrawMoney from './accountUpdate/WithdrawMoney';
import SuccessModal from './accountUpdate/SuccessModal';
import DonationChart from '../FinancialTracking/DonationChart';

const DashboardTemplate = () => {
  const [openAddMoney, setOpenAddMoney] = useState(false);
  const [openWithdraw, setOpenWithdraw] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [actionType, setActionType] = useState('add');
  const accountNumber = '0434567865432';

  const handleCopy = async () => {
    await copyToClipboard(accountNumber);
  };
  return (
    <div className='flex flex-col gap-y-12 pb-10'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-y-3'>
          <p className='text-textAsh font-medium'>
            Dashboard
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
      <div className='flex gap-1 w-full '>
        <div className='flex-grow flex flex-col'>
          <div className='flex justify-between gap-4 '>
            <button
              onClick={() => setOpenAddMoney(true)}
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
          <div className='flex justify-between items-center gap-4 gap-y-6 flex-wrap mt-12'>
            {cardData.map((card, index) => (
              <DashCard
                key={index}
                title={card.title}
                amount={card.amount}
                percentage={card.percentage}
                percentageColor={card.percentageColor}
                icon={card.icon}
                borderColor={card.borderColor}
                description={card.description}
              />
            ))}
          </div>
          <div className='mt-10 w-full overflow-auto '>
            <DonationChart />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='border-l-2 border-[#C8CBD9CC] h-full mx-2'></div>
        </div>
        <div className='flex-shrink-0 w-1/3 shadow-graphShadow !drop-shadow-xl rounded-lg px-2.5 h-full py-4 pb-10'>
          <Projects />
        </div>
      </div>
      <div className=''>
        <TransactionTable />
      </div>
      <div className='flex gap-6 w-full '>
        <div className='flex-grow flex flex-col'>
          <h2 className='text-2xl font-semibold text-[#002D54] mb-4'>
            Donors
          </h2>
          <DonorList />
        </div>

        <div className='flex-shrink-0 w-1/3'>
          <h2 className='text-2xl font-semibold text-[#002D54] mb-4'>
            Notifications
          </h2>
          <Notifications />
        </div>
      </div>
      <div className='w-full border-t border-t-[#C8CBD9] my-4' />
      {/* change */}
      <div className='flex gap-6 w-full '>
        <div className='flex-grow flex flex-col'>
          <h2 className='text-2xl font-semibold text-[#002D54] mb-4'>
            Pledges
          </h2>
          <PledgeList />
        </div>

        <div className='flex-shrink-0 w-1/3'>
          <div className='flex justify-end items-end w-full mb-5'>
            {' '}
            <h2 className='underline  font-semibold text-[#002D54] '>
              View All
            </h2>
          </div>

          <Scheduler />
        </div>
      </div>
      <Modal
        className='mt-[10rem]'
        isOpen={openAddMoney}
        onClose={() => setOpenAddMoney(false)}
        title='Add Money'
        subTitle='Make a transfer to the account below and your wallet will be credited instantly'
      >
        <AddMoney
          setActionType={setActionType}
          setShowSuccess={setShowSuccess}
          setClose={setOpenAddMoney}
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
    </div>
  );
};

export default DashboardTemplate;
