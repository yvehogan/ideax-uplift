import React from 'react';
import { Button } from '@/components/ui/button';

interface StepProps {
  onPrev: () => void;
  onSubmit: () => void;
}

const AccountCreation: React.FC<StepProps> = ({ onPrev, onSubmit }) => {
  return (
    <div>
      <h2>Account Creation</h2>
      <Button asChild className='bg-secondary w-full hover:bg-secondary hover:opacity-70'>
        <button type="button" onClick={onPrev}>
          Back
        </button>
      </Button>
    </div>
  );
};

export default AccountCreation;
