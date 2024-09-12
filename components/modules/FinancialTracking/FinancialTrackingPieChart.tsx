"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";

interface DataItem {
  name: string;
  value: number;
  category: string;
}

const data: DataItem[] = [
  { name: "Project Cost", value: 400, category: "expenses" },
  { name: "Administrative Fees", value: 300, category: "expenses" },
  { name: "Salary", value: 300, category: "expenses" },
  { name: "Food", value: 200, category: "expenses" },
  { name: "Donation", value: 400, category: "income" },
  { name: "Grants", value: 300, category: "income" },
  { name: "Donation", value: 300, category: "income" },
  { name: "Grants", value: 200, category: "income" },
];

const COLORS: string[] = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.8;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#6B7280"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const FinancialTrackingPieChart: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"income" | "expenses">(
    "income"
  );

  const activeData = data.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="flex justify-between mb-8">
        <h3 className="font-semibold text-secondary text-2xl">Analytics</h3>
        <button className="border border-secondary text-secondary py-2 px-4 rounded-lg font-semibold">
          Export
        </button>
      </div>
        <div
          className="bg-white drop-shadow px-6 py-8 rounded-lg"
          style={{ width: "100%", height: "500px" }}
        >
      <div className="flex gap-3 border-b-[3px] border-[#E5E7EB]">
        <button
          className={`${
            activeCategory === "income" ? "border-b-[3px] border-secondary text-secondary font-semibold" : "text-[#6B7280] font-semibold"
          }`}
          onClick={() => setActiveCategory("income")}
        >
          Incomes
        </button>
        <button
          className={`${
            activeCategory === "expenses" ? "border-b-[3px] border-secondary text-secondary font-semibold" : "text-[#6B7280] font-semibold"
          }`}
          onClick={() => setActiveCategory("expenses")}
        >
          Expenses
        </button>
      </div>
        <ResponsiveContainer width="100%" height="80%">
          <PieChart width={400} height={400}>
            <Pie
              data={activeData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              // outerRadius={120}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
            >
              {activeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-8">
          <ul className="list-disc flex justify-center gap-2">
            {activeData.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FinancialTrackingPieChart;
