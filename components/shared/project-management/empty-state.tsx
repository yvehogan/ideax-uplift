import React from 'react';
import { Data} from '@/components/shared/svg/icons';

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center my-40">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Data />
        </div>
        <h2 className="text-gray-500 text-lg font-medium mb-2">No data yet</h2>
    </div>
        
    );
}

export default EmptyState;
