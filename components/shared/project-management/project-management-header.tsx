'use client'
import React, { Fragment } from 'react'
import CreateProject from './create-project'

export function ProjectManagementHeader() {

    return (
        <Fragment>
            <div className='flex justify-between items-center'>
            <p className="text-lg font-semibold text-gray-700">
                    Project Management
                </p>
                <CreateProject />
                
            </div>
        </Fragment>
    )
}