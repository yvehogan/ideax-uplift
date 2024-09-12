import React from 'react';
import { Eye } from '../../svg/icons';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

type Project = {
  name: string;
  category: string;
  target: string;
  received: string;
  startDate: string;
  endDate: string;
  status: string;
};

interface ProjectOverviewCardProps {
  filteredProjects: Project[];
}

const ProjectOverviewCard: React.FC<ProjectOverviewCardProps> = ({ filteredProjects }) => {
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'Delayed':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="mt-10">
      <table className="min-w-full table-auto">
        <thead>
          <tr className='uppercase text-textGrey bg-gray-50 font-semibold text-xs'>
            <th></th>
            <th className="px-4 py-2 text-left">Project</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Target</th>
            <th className="px-4 py-2 text-left">Received Amount</th>
            <th className="px-4 py-2 text-left">Start Date</th>
            <th className="px-4 py-2 text-left">End Date</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => (
            <tr key={index} className="border-t text-xs">
              <td>
                <Checkbox className='my-6'/>
              </td>
              <td className="px-4 py-2">{project.name}</td>
              <td className="px-4 py-2">{project.category}</td>
              <td className="px-4 py-2 font-semibold">{project.target}</td>
              <td className="px-4 py-2 font-medium">{project.received}</td>
              <td className="px-4 py-2">{project.startDate}</td>
              <td className="px-4 py-2">{project.endDate}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </td>
              <td className="">
                <Link href={'./project-management/project-overview'}>
                  <button className="flex justify-center items-center text-white border border-secondary bg-secondary rounded-lg px-2 py-1 gap-2">
                    <Eye />
                    View
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectOverviewCard;
