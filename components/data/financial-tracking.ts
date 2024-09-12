import { MoveUp, MoveDown,  LucideIcon } from 'lucide-react';

type FinancialTrackingItem = {
  id: number;
  title: string;
  amount: string;
  percentage: string;
  borderColor: string;
  icon: LucideIcon;
  iconColor: string;
};

type FinancialTrackingArray = FinancialTrackingItem[];

const FinancialTrackingDetails: FinancialTrackingArray = [
  {
    id: 1,
    title: "TOTAL DONATION RECEIVED",
    amount: "N15,000,000",
    percentage: "12.5%",
    borderColor: "#2A9D8F",
    icon: MoveUp,
    iconColor: "#2A9D8F"
  },
  {
    id: 2,
    title: "TOTAL EXPENSES",
    amount: "N10,000,000",
    percentage: "12.5%",
    borderColor: "#E63946",
    icon: MoveDown,
    iconColor: "#E63946"
  },
  {
    id: 3,
    title: "TOTAL BALANCE",
    amount: "N5,000,000",
    percentage: "12.5%",
    borderColor: "#219EBC",
    icon: MoveUp,
    iconColor: "#2A9D8F"
  },
  {
    id: 4,
    title: "TOTAL PLEDGES MADE",
    amount: "N25,000,000",
    percentage: "12.5%",
    borderColor: "#FB8500",
    icon: MoveUp,
    iconColor: "#2A9D8F"
  },
  {
    id: 5,
    title: "TOTAL PLEDGES RECEIVED",
    amount: "N50,000,000",
    percentage: "12.5%",
    borderColor: "#BC4749",
    icon: MoveUp,
    iconColor: "#2A9D8F"
  },
];

export default FinancialTrackingDetails;