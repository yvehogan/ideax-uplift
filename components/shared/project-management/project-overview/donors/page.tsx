import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';
// import EmptyState from '../empty-state';
import { File } from '@/components/shared/svg/icons';
import DonorsCard from './donors-card';

const Donors = () => {
    return (
        <div className=''>
            <div className='bg-white shadow-xl rounded-xl p-6'>
                <div className='flex justify-between items-center'>
                    <p className='text-secondary font-bold'>Donors</p>
                    <button className='flex justify-center items-center gap-3 p-2 border border-secondary rounded-lg text-secondary font-medium'>
                        <File />
                        Export
                    </button>
                </div>

                {/* <EmptyState /> */}
                <DonorsCard />
                {/* Pagination */}
                <Pagination>
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
            </div>

        </div>
    );
}

export default Donors;
