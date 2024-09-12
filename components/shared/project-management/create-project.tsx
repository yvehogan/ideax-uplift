'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button'
import { Plus } from '../svg/icons'
import ModalContent from '@/components/shared/project-management/create-project-modal';
import { Link } from 'lucide-react';

const CreateProject = () => {
    const [open, setOpen] = useState(false)
    const closeModal = () => setOpen(false);
  return (
    <div>
         {open && (
        <div
        className="fixed inset-0 bg-gray-400 bg-opacity-50 overflow-y-auto w-full py-10 z-50"
        onClick={closeModal}
      >
        <div
          className="relative mx-auto py-4 border w-2/5 h-screen md:h-auto shadow-lg rounded-t-xl bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <ModalContent onClose={closeModal} />
        </div>
      </div>
      
      )}
      <Button className='py-8 flex gap-2' onClick={ () => setOpen(true)}>
                    <div className='bg-[#C1E0FC] rounded w-10 h-10 flex justify-center items-center  '>
                   <Plus />
                    </div>
                    <div className='flex flex-col items-start '>
                        <p className='font-semibold' >Create Project</p>
                        <p className='text-sm'>Create new project</p>
                    </div>
                </Button>
    </div>
  );
}

export default CreateProject