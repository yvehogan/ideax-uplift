import React from 'react'
import Card from './project-management-card'

const cardData = [
    {
        title: 'TOTAL PROJECTS',
        value: 0,
        borderColor: 'border-[#219EBC]',
        textColor: 'text-[#219EBC]'
    },
    {
        title: 'COMPLETED',
        value: 0,
        borderColor: 'border-[#006D77]',
        textColor: 'text-[#006D77]'
    },
    {
        title: 'ONGOING',
        value: 0,
        borderColor: 'border-[#00A980]',
        textColor: 'text-[#00A980]'
    },
    {
        title: 'DELAYED',
        value: 0,
        borderColor: 'border-[#A53860]',
        textColor: 'text-[#A53860]'
    },

]

const CardList: React.FC = () => {
    return (
        <div className="grid grid-cols-4 gap-4 mt-7">
            {cardData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    )
}

export default CardList