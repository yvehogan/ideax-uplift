import React from 'react';
import { 
    Pagination, 
    PaginationContent, 
    PaginationEllipsis, 
    PaginationItem, 
    PaginationLink, 
    PaginationNext, 
    PaginationPrevious } from '@/components/ui/pagination';
// import EmptyState from '../empty-state';
import PledgeCard from './pledge-card';
import { File } from '../../svg/icons';

const Pledges = () => {
    return (
        <div className='w-[60%] my-10'>
            <p className='text-secondary font-semibold text-2xl mb-4'>Pledge</p>
            <div className='bg-white shadow-xl rounded-xl p-6'>
                <div className='flex justify-between items-center'>
                    <p className='text-secondary font-bold'>Pledges</p>
                    <button className='flex justify-center items-center gap-3 p-2 border border-secondary rounded-lg text-secondary font-medium'>
                        <File />
                        Export
                    </button>
                </div>

            {/* <EmptyState /> */}
                <PledgeCard />
                {/* Pagination */}
                <Pagination className='mt-5'>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">100</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
                {/* <div className="flex justify-end items-center mt-6">
                    <div className="flex justify-center items-center border-2 border-solid border-gray-300 first:rounded-r-md last:rounded-l-md first:rounded-l-md last:rounded-r-md">
                        <button className="px-2 py-2 text-gray-500 hover:bg-gray-100">&lt;</button>
                        <button className="px-2 py-2 text-gray-500 border hover:bg-gray-100">1</button>
                        <button className="px-2 py-2 text-white bg-[#C4E4FF] border-[#C4E4FF] border">2</button>
                        <button className="px-2 py-2 text-gray-500 border hover:bg-gray-100">3</button>
                        <span className="px-2 py-2 text-gray-500 border ">...</span>
                        <button className="px-2 py-2 text-gray-500 border hover:bg-gray-100">100</button>
                        <button className="px-2 py-2 text-gray-500 hover:bg-gray-100">&gt;</button>
                    </div>
                </div> */}
            </div>
            
        </div>
    );
}

export default Pledges;
