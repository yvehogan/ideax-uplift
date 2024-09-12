import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';

interface BasicFormValues {
  ngoName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  password: string;
}

interface StepProps {
  onNext: (values: BasicFormValues) => void;
  initialValues: BasicFormValues;
}

const BasicInformation: React.FC<StepProps> = ({ onNext, initialValues }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      ngoName: Yup.string().required('NGO Name is required'),
      contactPerson: Yup.string().required('Contact Person is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
        .required('Phone Number is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <form className="flex flex-col h-[400px] overflow-y-auto px-4" onSubmit={formik.handleSubmit}>
      <div className='mb-4'>
        <label htmlFor="ngoName" className="block text-md font-medium text-[#3B3B3B]">NGO Name</label>
        <input
          type="text"
          id="ngoName"
          name="ngoName"
          placeholder="Enter NGO name"
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ngoName}
        />
        {formik.touched.ngoName && formik.errors.ngoName ? (
          <div className="text-red-500 text-sm">{formik.errors.ngoName}</div>
        ) : null}
      </div>
      <div className='mb-4'>
        <label htmlFor="contactPerson" className="block text-md font-medium text-[#3B3B3B]">Contact Person</label>
        <input
          type="text"
          id="contactPerson"
          name="contactPerson"
          placeholder="Contact person's name"
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contactPerson}
        />
        {formik.touched.contactPerson && formik.errors.contactPerson ? (
          <div className="text-red-500 text-sm">{formik.errors.contactPerson}</div>
        ) : null}
      </div>
      <div className='mb-4'>
        <label htmlFor="email" className="block text-md font-medium text-[#3B3B3B]">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email address"
          className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className='mb-4'>
        <label htmlFor="phoneNumber" className="block text-md font-medium text-[#3B3B3B]">Phone Number</label>
        <div className="flex mt-1">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
            +234
          </span>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter phone number"
            className="flex-1 block w-full px-3 py-3 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
        </div>
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
        ) : null}
      </div>
      <div className='mb-4'>
        <label htmlFor="password" className="block text-md font-medium text-[#3B3B3B]">Password</label>
        <div className='relative mb-2'>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder='Enter your password'
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <button
            type="button"
            className='absolute right-4 top-3'
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>
      <Button asChild className='bg-secondary w-full hover:bg-secondary hover:opacity-70 py-4'>
        <button type="submit">
          Proceed
        </button>
      </Button>
    </form>
  );
};

export default BasicInformation;