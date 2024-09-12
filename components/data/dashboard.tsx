import {
  FaArrowTrendUp,
  FaArrowTrendDown,
} from 'react-icons/fa6';

export const cardData = [
  {
    title: 'Total Donation Received',
    amount: '₦15,000,000',
    percentage: '8.5%',
    percentageColor: 'text-[#2A9D8F]',
    icon: <FaArrowTrendUp color={'#00B69B'} />,
    borderColor: 'border-[#2A9D8F]',
    description: 'Up from yesterday',
  },
  {
    title: 'Total Expenses',
    amount: '₦10,000,000',
    percentage: '4.3%',
    percentageColor: 'text-[#E63946]',
    icon: <FaArrowTrendDown color={'#F93C65'} />,
    borderColor: 'border-[#E63946]',
    description: 'Down from yesterday',
  },
  {
    title: 'Total Balance',
    amount: '₦5,000,000',
    percentage: '8.5%',
    percentageColor: 'text-[#219EBC]',
    icon: <FaArrowTrendUp color={'#00B69B'} />,
    borderColor: 'border-[#219EBC]',
    description: 'Up from yesterday',
  },
];

type ProjectStatus = 'Completed' | 'Ongoing' | 'Delayed';

interface Project {
  title: string;
  description: string;
  amountRaised: number;
  targetAmount: number;
  dueDate: string;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    title: 'Give Back to the Society',
    description:
      'This is a project focused on raising 10M for Akingbale Community in Ondo State',
    amountRaised: 10000000,
    targetAmount: 10000000,
    dueDate: 'Sept 15th, 2024',
    status: 'Completed',
  },
  {
    title: 'Give Back to the Society',
    description:
      'This is a project focused on raising 10M for Akingbale Community in Ondo State',
    amountRaised: 9000000,
    targetAmount: 10000000,
    dueDate: 'Sept 15th, 2024',
    status: 'Ongoing',
  },
  {
    title: 'Give Back to the Society',
    description:
      'This is a project focused on raising 10M for Akingbale Community in Ondo State',
    amountRaised: 7000000,
    targetAmount: 10000000,
    dueDate: 'Sept 15th, 2024',
    status: 'Delayed',
  },
];
