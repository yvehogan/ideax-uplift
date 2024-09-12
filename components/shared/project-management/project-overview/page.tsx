'use client'
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Filter, Search } from '../../svg/icons';
import ProjectOverviewCard from './project-overview-card';
import Link from 'next/link';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from '@/components/ui/pagination';

const projects = [
    {
        name: 'Operation feed the children of Ayegbade',
        category: 'Health',
        target: '10,000,000',
        received: '3,000,000',
        startDate: 'Sept 22, 2024',
        endDate: 'Sept 30, 2024',
        status: 'Completed',
    },
    {
        name: 'Operation feed the children of Ayegbade',
        category: 'Social Services',
        target: '10,000,000',
        received: '6,000,000',
        startDate: 'Sept 22, 2024',
        endDate: 'Sept 30, 2024',
        status: 'Ongoing',
    },
    {
        name: 'Operation feed the children of Ayegbade',
        category: 'Education',
        target: '10,000,000',
        received: '1,000,000',
        startDate: 'Sept 22, 2024',
        endDate: 'Sept 30, 2024',
        status: 'Delayed',
    },
    {
        name: 'Operation feed the children of Ayegbade',
        category: 'Disaster Relief',
        target: '10,000,000',
        received: '3,000,000',
        startDate: 'Sept 22, 2024',
        endDate: 'Sept 30, 2024',
        status: 'Completed',
    },
    {
        name: 'Operation feed the children of Ayegbade',
        category: 'Environment',
        target: '10,000,000',
        received: '6,000,000',
        startDate: 'Sept 22, 2024',
        endDate: 'Sept 30, 2024',
        status: 'Ongoing',
    },
    {
        name: 'Operation feed the children of Ayegbade',
        category: 'Education',
        target: '10,000,000',
        received: '1,000,000',
        startDate: 'Sept 22, 2024',
        endDate: 'Sept 30, 2024',
        status: 'Delayed',
    },
    {
        name: 'Operation feed the children of Ayegbade',
        category: 'Human Right',
        target: '10,000,000',
        received: '3,000,000',
        startDate: 'Sept 22, 2024',
        endDate: 'Sept 30, 2024',
        status: 'Completed',
    },
    {
        name: 'Operation feed the children of Ayegbade',
        category: 'Social Services',
        target: '10,000,000',
        received: '6,000,000',
        startDate: 'Sept 22, 2024',
        endDate: 'Sept 30, 2024',
        status: 'Ongoing',
    },
    {
        name: 'Operation feed the children of Ayegbade',
        category: 'Education',
        target: '10,000,000',
        received: '1,000,000',
        startDate: 'Sept 22, 2024',
        endDate: 'Sept 30, 2024',
        status: 'Delayed',
    },
];


const ProjectOverview = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredProjects = projects.filter((project) => {
        const categoryMatch = selectedCategory ? project.category === selectedCategory : true;
        const statusMatch = selectedStatus ? project.status === selectedStatus : true;
        const searchMatch = searchTerm === '' || project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.target.toString().includes(searchTerm) ||
            project.received.toString().includes(searchTerm);
        return categoryMatch && statusMatch && searchMatch;
    });

    return (
        <div className='my-10'>
            <Link href={'/project-management/project-overview'} className='text-secondary text-2xl font-semibold'>
                Project Overview
            </Link>

            <div className="bg-white shadow-xl rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4">
                        <div className='flex items-center gap-2 border border-gray-200 rounded p-2'>
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
                        <Select onValueChange={(value) => setSelectedCategory(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="Health">Health</SelectItem>
                                    <SelectItem value="Social Services">Social Services</SelectItem>
                                    <SelectItem value="Education">Education</SelectItem>
                                    <SelectItem value="Environment">Environment</SelectItem>
                                    <SelectItem value="Human Right">Human Right</SelectItem>
                                    <SelectItem value="Disaster Relief">Disaster Relief</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select onValueChange={(value) => setSelectedStatus(value)}>
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
                            placeholder="Search by name, category, amount..."
                            className="bg-gray-50 border border-textGrey rounded-md pl-9 py-2 w-full truncate placeholder:text-ellipsis"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <ProjectOverviewCard filteredProjects={filteredProjects} />
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
            </div>
        </div>
    );
};

export default ProjectOverview;
