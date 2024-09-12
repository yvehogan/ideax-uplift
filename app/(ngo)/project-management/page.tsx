import CardList from '@/components/shared/project-management/card-list'
import Donations from '@/components/shared/project-management/donations/page'
import Pledges from '@/components/shared/project-management/pledges/page'
import { ProjectManagementHeader } from '@/components/shared/project-management/project-management-header'
import ProjectOverview from '@/components/shared/project-management/project-overview/page'
import React from 'react'

const ProjectManagement = () => {
  return (
    <div>
      <ProjectManagementHeader />
      <CardList/>
      <ProjectOverview />
      <div className='border-2 border-gray-200 mt-20 mb-5'></div>
      <div className='flex gap-6'>
        <Pledges />
        <Donations />
      </div>
    </div>
  )
}

export default ProjectManagement