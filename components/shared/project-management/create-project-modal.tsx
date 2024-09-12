import React, { useState } from "react";
import { X } from "lucide-react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CreateProjectValues {
    projectName: string;
    description: string;
    startDate: string;
    endDate: string;
    target: string;
    objectives: string;
    category: string;
    uploadDocument: File | null;
}

interface ModalContentProps {
    onClose: () => void;
}

const validationSchema = Yup.object().shape({
    projectName: Yup.string().required('Project Name is required'),
    description: Yup.string().required('Description is required'),
    startDate: Yup.date().required('Start Date is required'),
    endDate: Yup.date().required('End Date is required'),
    target: Yup.string().required('Target is required'),
    objectives: Yup.string().required('Objectives are required'),
    category: Yup.string().required('Category is required'),
});

const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
    const [fileNames, setFileNames] = useState<{ uploadDocument?: string }>({});
    const formik = useFormik<CreateProjectValues>({
        initialValues: {
            projectName: '',
            description: '',
            startDate: '',
            endDate: '',
            target: '',
            objectives: '',
            category: '',
            uploadDocument: null,
        },
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            onClose()
        },
    });

    return (
        <div className="">
            <div className="flex justify-between drop-shadow-xl px-10 bg-white">
                <div className="mb-6">
                    <h3 className="font-bold text-[#3B3B3B] text-[24px] ">
                        Create New Project
                    </h3>
                    <p className="text-textGrey font-[500]">
                        Create a new project
                    </p>
                </div>
                <X
                    onClick={onClose}
                    className="text-[#002D54] bg-[#CCD5DD] mt-2 p-1 rounded-full font-semibold cursor-pointer"
                />
            </div>

            <form onSubmit={formik.handleSubmit} className="px-10 py-6 text-textGrey font-medium">
                <div className="my-4">
                    <label htmlFor="projectName">
                        Project Name
                    </label>
                    <Input
                        id="projectName"
                        name="projectName"
                        type="text"
                        placeholder="Type in project name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.projectName}
                        className="mt-2"
                    />
                    {formik.touched.projectName && formik.errors.projectName ? (
                        <div className="text-red-500 text-sm">{formik.errors.projectName}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="description">
                        Description
                    </label>
                    <Textarea
                        id="description"
                        name="description"
                        placeholder="Type in the full details of the project"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        className="mt-2"
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="text-red-500 text-sm">{formik.errors.description}</div>
                    ) : null}
                </div>

                <div className="w-full flex justify-between">

                    <div className="mb-4">
                        <label htmlFor="startDate">
                            Start Date
                        </label>
                        <input
                            id="startDate"
                            name="startDate"
                            type="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.startDate}
                            className="w-full border px-4 py-3 text-sm mt-2 rounded-lg"
                        />
                        {formik.touched.startDate && formik.errors.startDate ? (
                            <div className="text-red-500 text-sm">{formik.errors.startDate}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="endDate" className="block font-semibold">
                            End Date
                        </label>
                        <input
                            id="endDate"
                            name="endDate"
                            type="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.endDate}
                            className="w-full border px-4 py-3 text-sm mt-2 rounded-lg"
                        />
                        {formik.touched.endDate && formik.errors.endDate ? (
                            <div className="text-red-500 text-sm">{formik.errors.endDate}</div>
                        ) : null}
                    </div>

                </div>

                <div className="mb-4">
                    <label htmlFor="target">
                        Target Amount
                    </label>
                    <Input
                        id="target"
                        name="target"
                        type="text"
                        placeholder="Type in how much you would like to raise"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.target}
                        className="mt-2"
                    />
                    {formik.touched.target && formik.errors.target ? (
                        <div className="text-red-500 text-sm">{formik.errors.target}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="objectives" className="block font-semibold">
                        Objectives
                    </label>
                    <Textarea
                        id="objectives"
                        name="objectives"
                        placeholder="Type in the objectivies of the project..."
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.objectives}
                    // className="w-full border px-4 py-3 text-sm mt-2 rounded-lg h-40"
                    />
                    {formik.touched.objectives && formik.errors.objectives ? (
                        <div className="text-red-500 text-sm">{formik.errors.objectives}</div>
                    ) : null}
                </div>

                <div className="mb-10">
                    <p>Category</p>
                    <ul className="flex flex-wrap gap-5 mt-4">
                        {['Health', 'Education', 'Environment', 'Human Right', 'Social Services', 'Disaster Relief'].map((category) => (
                            <li key={category}>
                                <button
                                    type="button"
                                    onClick={() => formik.setFieldValue('category', category)}
                                    className={`rounded-full px-6 py-2 font-semibold ${formik.values.category === category
                                            ? 'bg-secondary text-white'
                                            : 'bg-lightBlue text-textGrey'
                                        }`}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {formik.touched.category && formik.errors.category ? (
                        <div className="text-red-500 text-sm">{formik.errors.category}</div>
                    ) : null}
                </div>


                <div className='mb-10'>
                    <p className='text-lg font-medium mb-2'>Upload Document</p>
                    <div className='flex items-center '>
                        <label className='rounded-l-lg rounded-r-none text-white text-nowrap p-3 bg-secondary cursor-pointer'>
                            Choose file
                            <input
                                id="uploadDocument"
                                name="uploadDocument"
                                type="file"
                                className="hidden"
                                onChange={(event) => {
                                    const file = event.currentTarget.files?.[0] || null;
                                    formik.setFieldValue("uploadDocument", file);
                                    setFileNames({
                                        uploadDocument: file?.name || 'No file chosen',
                                    });
                                }}
                            />
                        </label>
                        <span className='rounded-r-lg rounded-l-none border border-gray-200 p-3 w-full overflow-hidden text-ellipsis whitespace-nowrap'>
                            {fileNames.uploadDocument || 'No file chosen'}
                        </span>
                    </div>
                    {formik.touched.uploadDocument && formik.errors.uploadDocument ? (
                        <div className="text-red-500 text-sm">{formik.errors.uploadDocument as string}</div>
                    ) : null}
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="text-white bg-secondary w-full px-4 py-2 rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ModalContent;
