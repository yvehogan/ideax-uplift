'use client';
import { projects } from '@/components/data/dashboard';
import React, { useState } from 'react';
import ProjectCard from './projectCard';

type ProjectStatus = 'Completed' | 'Ongoing' | 'Delayed';

const Projects = () => {
  const [filter, setFilter] = useState<
    'All' | ProjectStatus
  >('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(
          (project) => project.status === filter
        );

  return (
    <div className='w-full'>
      <div className='flex w-full  gap-4'>
        {' '}
        <h1 className='text-xl font-bold text-[#002D54]'>
          Projects
        </h1>
        {/* Filter Buttons */}
        <div className='flex w-full overflow-auto text-xs'>
          <button
            className={`px-4 py-1 rounded-tl rounded-bl ${
              filter === 'All'
                ? 'bg-[#002D54] text-white'
                : 'bg-white border border-gray-300'
            }`}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button
            className={`px-4 py-1 rounded ${
              filter === 'Ongoing'
                ? 'bg-[#002D54] text-white'
                : 'bg-white border border-gray-300'
            }`}
            onClick={() => setFilter('Ongoing')}
          >
            Ongoing
          </button>
          <button
            className={`px-4 py-1 rounded ${
              filter === 'Delayed'
                ? 'bg-[#002D54] text-white'
                : 'bg-white border border-gray-300'
            }`}
            onClick={() => setFilter('Delayed')}
          >
            Delayed
          </button>
          <button
            className={`px-4 py-1 rounded-tr rounded-br ${
              filter === 'Completed'
                ? 'bg-[#002D54] text-white'
                : 'bg-white border border-gray-300'
            }`}
            onClick={() => setFilter('Completed')}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className='grid gap-4 mt-6'>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
