'use client';

import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { CiFilter } from 'react-icons/ci';
import { IoIosSearch } from 'react-icons/io';

interface Transaction {
  id: string;
  transaction: string;
  category: string;
  amount: string;
  date: string;
  status: string;
}

const categories = [
  'Donation',
  'Pledge',
  'Grant',
  'Project Cost',
  'Administrative',
];
const statuses = ['Completed', 'In progress', 'Cancelled'];

const dummyData: Transaction[] = [
  {
    id: 'TTR-63715',
    transaction: 'Donation from Atinuke Gold',
    category: 'Donation',
    amount: '+ ₦50,000',
    date: '2024-09-23',
    status: 'Completed',
  },
  {
    id: 'TTR-63716',
    transaction: 'Donation from Atinuke Gold',
    category: 'Pledge',
    amount: '+ ₦50,000',
    date: '2024-09-23',
    status: 'Completed',
  },
  {
    id: 'TTR-63717',
    transaction: 'Donation from Atinuke Gold',
    category: 'Donation',
    amount: '+ ₦50,000',
    date: '2024-09-23',
    status: 'Cancelled',
  },
  {
    id: 'TTR-63718',
    transaction: 'Donation from Atinuke Gold',
    category: 'Grant',
    amount: '+ ₦50,000',
    date: '2024-09-23',
    status: 'In progress',
  },
  {
    id: 'TTR-63719',
    transaction: 'Donation from Atinuke Gold',
    category: 'Project Cost',
    amount: '- ₦1,000,000',
    date: '2024-09-23',
    status: 'Completed',
  },
  {
    id: 'TTR-63720',
    transaction: 'Donation from Atinuke Gold',
    category: 'Administrative',
    amount: '- ₦1,000,000',
    date: '2024-09-23',
    status: 'Completed',
  },
];

const TransactionTable: React.FC = () => {
  const [transactions] = useState<Transaction[]>(dummyData); // Dummy data
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(6);
  const [dateRange, setDateRange] = useState<any>([
    {
      startDate: new Date('2024-09-01'), // Adjust start date to include your dummy data
      endDate: new Date('2024-09-30'), // Or extend end date to cover dummy data
      key: 'selection',
    },
  ]);

  const [selectedCategory, setSelectedCategory] =
    useState<string>('');
  const [selectedStatus, setSelectedStatus] =
    useState<string>('');
  const [showDatePicker, setShowDatePicker] =
    useState(false);

  // Handle date range change
  const handleDateChange = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  // Filter logic
  const filteredTransactions = transactions.filter(
    (transaction) => {
      const transactionDate = new Date(transaction.date);
      const startDate = dateRange[0].startDate;
      const endDate = dateRange[0].endDate;

      // Allow future dates by relaxing the comparison, if needed
      return (
        (!searchTerm ||
          transaction.transaction
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          transaction.category
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          transaction.status
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          transaction.amount
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
        (selectedCategory === '' ||
          transaction.category === selectedCategory) &&
        (selectedStatus === '' ||
          transaction.status === selectedStatus) &&
        transactionDate >= startDate &&
        transactionDate <= endDate // Ensure future transactions are allowed
      );
    }
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(
    filteredTransactions.length / itemsPerPage
  );

  const paginate = (pageNumber: number) =>
    setCurrentPage(pageNumber);

  return (
    <div className='mb-4'>
      <h1 className='text-2xl font-bold my-4 text-[#002D54]'>
        Transaction History
      </h1>

      <div className='py-5 rounded-[8px] shadow-graphShadow'>
        {/* Search Bar */}
        <div className='w-full flex justify-between items-center mb-4 px-4'>
          <div>
            <div className='flex space-x-2'>
              <p className='p-2 flex items-center text-[#6B7280] rounded-[8px] text-sm border border-[#E5E7EB]'>
                Filter by
                <CiFilter />
              </p>
              {/* Date Range Picker Button */}
              <button
                className='p-2 text-[#6B7280] rounded-[8px] text-sm border border-[#E5E7EB]'
                // onClick={() =>
                //   setShowDatePicker(!showDatePicker)
                // }
              >
                Date
              </button>

              {/* Category Dropdown */}
              <select
                className='p-2  text-[#6B7280] cursor-pointer outline-none rounded-[8px] text-sm border border-[#E5E7EB]'
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value)
                }
              >
                <option value=''>All Categories</option>
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                ))}
              </select>

              {/* Status Dropdown */}
              <select
                className='p-2  text-[#6B7280] cursor-pointer outline-none rounded-[8px] text-sm border border-[#E5E7EB]'
                value={selectedStatus}
                onChange={(e) =>
                  setSelectedStatus(e.target.value)
                }
              >
                <option value=''>All Statuses</option>
                {statuses.map((status) => (
                  <option
                    key={status}
                    value={status}
                  >
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {showDatePicker && (
              <div className='mb-4'>
                <DateRangePicker
                  ranges={dateRange}
                  onChange={handleDateChange}
                  rangeColors={['#3b82f6']}
                />
              </div>
            )}
          </div>
          <div className='flex border gap-x-1 items-center  p-2 w-1/3 rounded-[8px] border-[#D1D5DB] bg-[#F9FAFB] '>
            <IoIosSearch />
            <input
              type='text'
              name='searchTerm'
              placeholder='Search by category, amount or status'
              className='w-full bg-transparent  placeholder:text-sm outline-none'
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />
          </div>
        </div>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white border'>
            <thead className='bg-[#F9FAFB] text-[#6B7280] text-sm'>
              <tr>
                <th className='py-3 px-4 border'>
                  Transaction ID
                </th>
                <th className='py-3 px-4 border'>
                  Transaction
                </th>
                <th className='py-3 px-4 border'>
                  Category
                </th>
                <th className='py-3 px-4 border'>Amount</th>
                <th className='py-3 px-4 border'>Date</th>
                <th className='py-3 px-4 border'>Status</th>
              </tr>
            </thead>
            <tbody className='text-sm text-[#6B7280]'>
              {currentItems.length > 0 ? (
                currentItems.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className='py-3 px-4 border font-semibold text-[#1D0218]'>
                      {transaction.id}
                    </td>
                    <td className='py-3 px-4 border'>
                      {transaction.transaction}
                    </td>
                    <td className='py-3 px-4 border'>
                      {transaction.category}
                    </td>
                    <td
                      className={`py-3 px-4 border font-semibold ${
                        transaction.amount.startsWith('-')
                          ? 'text-red-500'
                          : 'text-green-500'
                      }`}
                    >
                      {transaction.amount}
                    </td>
                    <td className='py-3 px-4 border'>
                      {transaction.date}
                    </td>
                    <td className='py-3 px-4 border'>
                      <span
                        className={`inline-block py-1 px-3 rounded-full font-medium ${
                          transaction.status === 'Completed'
                            ? 'text-[#03543F] bg-[#DEF7EC]'
                            : transaction.status ===
                              'In progress'
                            ? 'text-[#5521B5] bg-[#EDEBFE]'
                            : 'text-[#9B1C1C] bg-[#FDE8E8]'
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className='py-3 px-4 text-center'>
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className='flex justify-between items-center mt-4 px-4 text-sm'>
          <p className='text-[#6B7280]'>
            Showing{' '}
            <span className='font-semibold text-black'>
              {indexOfFirstItem + 1}
            </span>{' '}
            to{' '}
            <span className='font-semibold text-black'>
              {' '}
              {indexOfLastItem > filteredTransactions.length
                ? filteredTransactions.length
                : indexOfLastItem}{' '}
            </span>
            of{' '}
            <span className='font-semibold text-black'>
              {filteredTransactions.length}
            </span>
          </p>
          <div className=''>
            {Array.from(
              { length: totalPages },
              (_, index) => (
                <button
                  key={index}
                  className={`mx-1 px-3 py-1 font-medium rounded border border-[#D1D5DB] ${
                    currentPage === index + 1
                      ? 'bg-[#C4E4FF] text-[#002D54]'
                      : 'bg-white text-[#6B7280]'
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
