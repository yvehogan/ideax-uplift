import React from 'react';
import DonationsCard from './donations-card';
// import EmptyState from '../empty-state';

const Donations = () => {
    return (
        <div className='w-[40%] my-10'>
            <p className='text-secondary font-semibold text-2xl mb-4'>Donations</p>
            <div className='bg-white shadow-xl rounded-xl p-6'>
                <p className='text-secondary font-bold'>Donations</p>
            {/* <EmptyState /> */}
                <DonationsCard />
                <DonationsCard />
                <DonationsCard />
                <DonationsCard />
                <DonationsCard />

            </div>
        </div>
    );
}

export default Donations;
