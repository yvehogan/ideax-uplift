import React from 'react'

interface IProps {
  title: string
  value: number | string
  borderColor: string;
  textColor: string;
}

const Card: React.FC<IProps> = (props: IProps) => {
  return (
        <div className={`flex flex-col bg-white p-2 md:p-4 lg:p-6 rounded-md shadow-md mb-5 border-l-4 ${props.borderColor}`}>
                <p className="text-sm text-textGrey font-medium">{props.title}</p>
                <div className={`text-2xl font-bold ${props.textColor}`}>{props.value}</div>
        </div>
  )
}

export default Card
