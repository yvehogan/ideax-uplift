'use client'
import React, { Fragment, useState } from 'react';
import { Download, Toogle } from '../../svg/icons';
import { Button } from '@/components/ui/button';

const  ProjectOverviewDetails = () => {
    const [ toggle, setToggle ] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle);
    };
  return (
    <Fragment>
      <div className=' bg-white shadow-xl rounded-xl px-6 pt-6 pb-16 m-'>
      {/* w-full lg:w-3/4 */}
      <div>
        <div className='flex gap-4 items-center '>
            {/* <div className=' items-center'> */}
                <p className='text-secondary text-lg font-bold'>Operation feed the children of Ayegedu</p>
                <p className='bg-secondary border border-secondary rounded-full text-white p-2'>Education</p>
            {/* </div> */}
            <p className='bg-green-100 border border-green-100 rounded-md text-green-700 font-medium p-2'>Completed</p>
        </div>

        <div className='mt-4 text-textGrey text-lg'>
            <p className='font-medium mb-2'>Description</p>
            <p className='border-2 border-[#E4E4E4] rounded-lg px-5 py-3 text-md'>Lorem ipsum dolor sit amet consectetur. Sem dolor viverra at mi nunc amet non habitant. Nisi lectus varius mattis auctor velit fusce eleifend. Felis consectetur tortor viverra lectus libero pellentesque varius. Nam egestas lorem placerat eu.
            Lorem ipsum dolor sit amet consectetur. Sem dolor viverra at mi nunc amet non habitant. Nisi lectus varius mattis auctor velit fusce eleifend. Felis consectetur tortor viverra lectus libero pellentesque varius. Nam egestas lorem placerat eu.Lorem ipsum dolor sit amet consectetur. Sem dolor viverra at mi nunc amet non habitant. Nisi lectus varius mattis auctor velit fusce eleifend. Felis consectetur tortor viverra lectus libero pellentesque varius. Nam egestas lorem placerat eu.Lorem ipsum dolor sit amet consectetur. Sem dolor viverra at mi nunc amet non habitant. Nisi lectus varius mattis auctor velit fusce eleifend. Felis consectetur tortor viverra lectus libero pellentesque varius. Nam egestas lorem placerat eu.</p>
        </div>
        </div>
        <div className='flex gap-4 text-textBlack font-medium text-lg mt-7'>
            <p>Start Date: <span className='text-textGrey'>01/09/2024</span></p>
            <p>End Date: <span className='text-textGrey'>01/09/2024</span></p>
            </div>

            <div className='font-bold mt-5'>
                <p>10,000,000</p>
                <hr  className='bg-green-500 h-2.5 rounded-full w-full'/>
                <p>Target: 10,000,000</p>
            </div>

            <div className="mt-5">
      <h2 className="text-md font-semibold text-textBlack">Uploaded Documents</h2>
      <div className='flex items-center gap-2 text-secondary my-3'>
        <p className='underline font-medium'>Field event at Ayegedu</p>
        <Download/>
      </div>
      <div className='flex items-center gap-2 text-secondary my-3'>
        <p className='underline font-medium'>Field event at Ayegedu</p>
        <Download/>
      </div>
      <div className='flex items-center gap-2 text-secondary my-3'>
        <p className='underline font-medium'>Field event at Ayegedu</p>
        <Download/>
      </div>   
    </div>

    <div className='mt-5 text-textGrey text-lg'>
            <p className='font-medium mb-2'>Objectives</p>
            <p className='border-2 border-[#E4E4E4] rounded-lg px-5 py-3 text-md'>Lorem ipsum dolor sit amet consectetur. Sem dolor viverra at mi nunc amet non habitant. Nisi lectus varius mattis auctor velit fusce eleifend. Felis consectetur tortor viverra lectus libero pellentesque varius. Nam egestas lorem placerat eu.
            Lorem ipsum dolor sit amet consectetur. Sem dolor viverra at mi nunc amet non habitant. Nisi lectus varius mattis auctor velit fusce eleifend. Felis consectetur tortor viverra lectus libero pellentesque varius. Nam egestas lorem placerat eu.Lorem ipsum dolor sit amet consectetur. Sem dolor viverra at mi nunc amet non habitant. Nisi lectus varius mattis auctor velit fusce eleifend. Felis consectetur tortor viverra lectus libero pellentesque varius. Nam egestas lorem placerat eu.Lorem ipsum dolor sit amet consectetur. Sem dolor viverra at mi nunc amet non habitant. Nisi lectus varius mattis auctor velit fusce eleifend. Felis consectetur tortor viverra lectus libero pellentesque varius. Nam egestas lorem placerat eu.</p>
        </div>
            <div className='flex justify-end items-center mt-4'>
                <button onClick={handleToggle}>
                <Toogle fill={toggle ? '#002D54' : '#E5E7EB'} x={toggle ? '22' : '2.5'}  />
                </button>
                <p className='font-medium text-textGrey pl-3'>{toggle ? 'Project On' : 'Project Off'}</p>
            </div>

            <Button className='w-full bg-white hover:text-white text-secondary text-lg border border-secondary rounded-lg mt-20'>
                Delete Project
            </Button>
      </div>
    </Fragment>
  );
}

export default ProjectOverviewDetails;
