import React from 'react';
import { Flash } from '../../svg/icons';

const DonationsCard = () => {
  return (
    <div className=" border rounded-lg border-[#C8CBD9] my-4 p-5">
  <div className="flex items-center space-x-4">
    <div className="bg-[#FEF6E8] text-white rounded-full p-2">
     <Flash />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-secondary">Donation</h3>
      <p className="text-secondary">N1500 has been successfully deposited into your account by Eniola Ademola.</p>
    <span className="text-sm bg-[#E1EFFE] px-3 py-1 rounded-md mt-3">Sept 18 at 12:55pm</span>
    </div>
  </div>
</div>
  );
}

export default DonationsCard