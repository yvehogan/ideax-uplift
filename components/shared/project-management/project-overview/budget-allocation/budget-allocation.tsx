import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

const BudgetAllocationCard = () => {
  const budgets = [
    {
      name: 'Logistics',
      category: 'Essentials',
      amountAllocated: '200,000',
      amountSpent: '150,000',
      amountLeft: '50,000',
      startDate: 'Sept 23, 2024',
      endDate: 'Sept 23, 2024',
      status: 'Completed',
    },
    {
        name: 'Feeding',
        category: 'Essentials',
        amountAllocated: '10,000,000',
        amountSpent: '3,000,000',
        amountLeft: '7,000,000',
        startDate: 'Sept 23, 2024',
        endDate: 'Sept 23, 2024',
        status: 'Completed',
      },
      {
        name: 'Data',
        category: 'Essentials',
        amountAllocated: '10,000,000',
        amountSpent: '3,000,000',
        amountLeft: '7,000,000',
        startDate: 'Sept 23, 2024',
        endDate: 'Sept 23, 2024',
        status: 'Cancelled',
      },
      {
        name: 'Media',
        category: 'Essentials',
        amountAllocated: '10,000,000',
        amountSpent: '3,000,000',
        amountLeft: '7,000,000',
        startDate: 'Sept 23, 2024',
        endDate: 'Sept 23, 2024',
        status: 'Cancelled',
      },
      {
        name: 'Clothes',
        category: 'Essentials',
        amountAllocated: '10,000,000',
        amountSpent: '3,000,000',
        amountLeft: '7,000,000',
        startDate: 'Sept 23, 2024',
        endDate: 'Sept 23, 2024',
        status: 'Completed',
      },
      {
        name: 'SHoes',
        category: 'Essentials',
        amountAllocated: '10,000,000',
        amountSpent: '3,000,000',
        amountLeft: '7,000,000',
        startDate: 'Sept 23, 2024',
        endDate: 'Sept 23, 2024',
        status: 'Completed',
      },
      
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="mt-10">
      <table className="min-w-full table-auto">
        <thead>
          <tr className='uppercase text-textGrey bg-gray-50 font-semibold text-xs'>
            <th></th>
            <th className="px-4 py-2 text-left">Item</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Amount Allocated</th>
            <th className="px-4 py-2 text-left">Amount Spent</th>
            <th className="px-4 py-2 text-left">Amount Left</th>
            <th className="px-4 py-2 text-left">Start Date</th>
            <th className="px-4 py-2 text-left">End Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((project, index) => (
              <tr key={index} className="border-t text-xs">
                <td>
                <Checkbox className='my-6'/>
                </td>
              <td className="px-4 py-2">{project.name}</td>
              <td className="px-4 py-2">{project.category}</td>
              <td className="px-4 py-2 font-semibold">{project.amountAllocated}</td>
              <td className="px-4 py-2 font-medium">{project.amountSpent}</td>
              <td className="px-4 py-2 font-medium">{project.amountLeft}</td>
              <td className="px-4 py-2">{project.startDate}</td>
              <td className="px-4 py-2">{project.endDate}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetAllocationCard;
