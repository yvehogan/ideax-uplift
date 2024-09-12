import React from 'react';
import Image from 'next/image';
import avi from '@/public/images/avi.png';

const donorDetail = {
  name: 'Atinuke Gold',
  project: 'Operation feed the Ayegedu Community',
  amount: 'N10,000',
  status: 'Fulfilled'
};

const donors = Array(6).fill(donorDetail);

const DonorsCard = () => {
  return (
    <div className="mt-10">
      <table className="min-w-full table-auto">
        <tbody>
          {donors.map((donor, index) => (
            <tr key={index} className="border-t text-xs text-secondary">
              <td className="px-4 py-2">
                <div className="flex gap-3">
                  <Image src={avi} alt="avi" className="w-8 h-8" />
                  <div>
                    <p className="font-medium">{donor.name}</p>
                    <p className="text-sm">{donor.project}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="justify-end items-center text-center px-4 py-2">
                  <strong>{donor.amount}</strong>
                  <p className={`border rounded-md p-0.5 text-center mt-2 ${
                    donor.status === 'Fulfilled' ? 'border-green-100 bg-green-100' : 'border-red-100 bg-red-100'
                  }`}>
                    {donor.status}
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonorsCard;
