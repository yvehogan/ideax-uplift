import CreateProject from '@/components/shared/project-management/create-project';
import BudgetAllocation from '@/components/shared/project-management/project-overview/budget-allocation/page';
import Donors from '@/components/shared/project-management/project-overview/donors/page';
import ProjectOverViewPledges from '@/components/shared/project-management/project-overview/pledges/page';
import ProjectOverviewDetails from '@/components/shared/project-management/project-overview/project-overview-details';
import Link from 'next/link';
import React from 'react';

const ProjectReview = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex justify-start items-center gap-2'>
          <Link href={'/project-management'} className="text-lg font-semibold text-gray-700">
            Project Management
          </Link>
          <span>&gt;</span>
          <p className="text-lg font-semibold text-gray-700">
            Project Overview
          </p>
        </div>
        <CreateProject />

      </div>
      <div className='w-full flex gap-6 my-5'>
      <ProjectOverviewDetails />
      <div className='w-[] flex flex-col gap-5'>
      <Donors/>
      <ProjectOverViewPledges/>     
      </div>

      </div>
      <div className='border-2 border-gray-200 mt-20 mb-5'></div>
      <BudgetAllocation />
    </div>
  );
}

export default ProjectReview;
