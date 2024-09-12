import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { File, Filter, Search } from '@/components/shared/svg/icons';
// import EmptyState from '../empty-state';
import BudgetAllocationCard from './budget-allocation';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';
import { SelectGroup } from '@radix-ui/react-select';

const BudgetAllocation = () => {
    return (
        <div className=' mb-10'>
            <div className='flex justify-end pr-6'>
                <button className='flex justify-center items-center text-end gap-2 px-2 py-1 border border-secondary rounded-lg text-secondary font-medium'>
                    <File />
                    Export
                </button>
            </div>
            <div className='flex justify-between items-center p-6'>
                <p className='text-secondary text-2xl font-semibold'>
                    Budget Allocation
                </p>
                <p className='font-medium text-secondary'>TOTAL AMOUNT: <strong>10,000,000</strong></p>

            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4">
                        <div className='flex items-center gap-2 border border-gray-200 rounded-lg p-2'>
                            <p>Filter</p>
                            <Filter />
                        </div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Date" />
                            </SelectTrigger>
                            <SelectContent>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Essentials">Essentials</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Completed">Completed</SelectItem>
                                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                                    <SelectItem value="Delayed">Delayed</SelectItem>
                                    <SelectItem value="Ongoing">Ongoing</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <div className='absolute top-3 left-3'>
                            <Search />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by, category, amount or status"
                            className="truncate placeholder:text-ellipsis bg-gray-50 border border-textGrey rounded-md pl-9 py-2 w-full"
                        />
                    </div>
                </div>

                {/* <EmptyState /> */}
                <BudgetAllocationCard />

                {/* Pagination */}
                <div className='flex items-center justify-between mt-6'>
                    <p className="text-gray-600 text-sm">Showing <strong>1-10</strong> of <strong>1000</strong></p>

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

                {/* <div className="flex justify-between items-center mt-6">
                    <p className="text-gray-600 text-sm">Showing <strong>1-10</strong> of <strong>1000</strong></p>
                    <div className="flex justify-center items-center border-2 border-solid border-gray-300 first:rounded-r-md last:rounded-l-md first:rounded-l-md last:rounded-r-md">
                        <button className="px-4 py-2 text-gray-500 hover:bg-gray-100">&lt;</button>
                        <button className="px-4 py-2 text-gray-500 border hover:bg-gray-100">1</button>
                        <button className="px-4 py-2 text-white bg-[#C4E4FF] border-[#C4E4FF] border">2</button>
                        <button className="px-4 py-2 text-gray-500 border hover:bg-gray-100">3</button>
                        <span className="px-4 py-2 text-gray-500 border ">...</span>
                        <button className="px-4 py-2 text-gray-500 border hover:bg-gray-100">100</button>
                        <button className="px-4 py-2 text-gray-500 hover:bg-gray-100">&gt;</button>
                    </div>
                </div> */}
            </div>

        </div>
    );
}

export default BudgetAllocation;
