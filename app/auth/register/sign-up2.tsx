import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Camera, UploadCloud, SquareChevronLeft } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface DocumentationFormValues {
  ngoLogo: File | null;
  scumlFile: File | null;
  humanitarianProof: File | null;
}

interface StepProps {
  onSubmit: (values: DocumentationFormValues) => Promise<void>;
  onPrev: () => void;
  initialValues: DocumentationFormValues;
}

const Documentation: React.FC<StepProps> = ({ onSubmit, onPrev, initialValues }) => {
  const [fileNames, setFileNames] = useState({
    ngoLogo: initialValues.ngoLogo ? initialValues.ngoLogo.name : '',
    scumlFile: initialValues.scumlFile ? initialValues.scumlFile.name : '',
    humanitarianProof: initialValues.humanitarianProof ? initialValues.humanitarianProof.name : '',
  });
  const [ngoLogoPreview, setNgoLogoPreview] = useState<string | null>(
    initialValues.ngoLogo ? URL.createObjectURL(initialValues.ngoLogo) : null
  );

  const formik = useFormik<DocumentationFormValues>({
    initialValues: initialValues,
    validationSchema: Yup.object({
      ngoLogo: Yup.mixed().required('NGO Logo is required'),
      scumlFile: Yup.mixed().required('SCUML file is required'),
      humanitarianProof: Yup.mixed().required('Proof of humanitarian work is required'),
    }),
    onSubmit: async (values) => {
      await onSubmit(values);
    }
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof DocumentationFormValues) => {
    const file = event.currentTarget.files?.[0] || null;
    if (file) {
      formik.setFieldValue(field, file);
      setFileNames(prev => ({ ...prev, [field]: file.name }));
      toast.success(`${file.name} uploaded successfully!`);

      if (field === 'ngoLogo') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNgoLogoPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <form className="h-[300px] overflow-y-auto px-4" onSubmit={formik.handleSubmit}>
      <div className='mb-8'>
        <p className='text-lg font-medium mb-2'>NGO Logo</p>
        <div className='flex flex-col justify-center items-center'>
          <label className='bg-gray-200 rounded-full w-24 h-24 flex justify-center items-center cursor-pointer mb-2 overflow-hidden'>
            {ngoLogoPreview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={ngoLogoPreview} alt="NGO Logo" className="w-full h-full object-cover" />
            ) : (
              <Camera className='w-10 h-10 text-textGrey' />
            )}
            <input
              type="file"
              name="ngoLogo"
              accept="image/*"
              className="hidden"
              onChange={(event) => handleFileChange(event, 'ngoLogo')}
            />
          </label>
          <p className='text-sm text-textGrey'>{fileNames.ngoLogo || 'Tap to upload'}</p>
          {formik.touched.ngoLogo && formik.errors.ngoLogo ? (
            <div className="text-red-500 text-sm">{formik.errors.ngoLogo as string}</div>
          ) : null}
        </div>
      </div>

      <div className='mb-8'>
        <p className='text-lg font-medium mb-2'>Upload SCUML</p>
        <div className='flex items-center '>
          <label className='rounded-l-lg rounded-r-none text-white text-nowrap py-2 px-2 bg-secondary cursor-pointer'>
            Choose file
            <input
              type="file"
              name="scumlFile"
              className="hidden"
              onChange={(event) => handleFileChange(event, 'scumlFile')}
            />
          </label>
          <span className='rounded-r-lg rounded-l-none border border-gray-200 p-2 w-full overflow-hidden text-ellipsis whitespace-nowrap'>
            {fileNames.scumlFile || 'No file chosen'}
          </span>
        </div>
        {formik.touched.scumlFile && formik.errors.scumlFile ? (
          <div className="text-red-500 text-sm">{formik.errors.scumlFile as string}</div>
        ) : null}
      </div>

      <div className='mb-8'>
        <p className='text-lg font-medium mb-2'>Upload proof of humanitarian work</p>
        <label className='h-56 border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center cursor-pointer'>
          <UploadCloud className='w-10 h-10 text-gray-500 mb-2' />
          <input
            type="file"
            name="humanitarianProof"
            accept="image/*,video/*"
            className="hidden"
            onChange={(event) => handleFileChange(event, 'humanitarianProof')}
          />
          <p className='text-sm text-textGrey mb-1'>
            <span className='text-textBlack font-bold'>Click to upload</span> or drag and drop
          </p>
          <p className='text-xs text-textGrey'>Supported Filetype: JPEG, PNG, MP4</p>
          {fileNames.humanitarianProof && (
            <p className='text-sm text-textBlack mt-2'>{fileNames.humanitarianProof}</p>
          )}
        </label>
        {formik.touched.humanitarianProof && formik.errors.humanitarianProof ? (
          <div className="text-red-500 text-sm">{formik.errors.humanitarianProof as string}</div>
        ) : null}
      </div>

      <div className='flex justify-between'>
        <Button
          type="button"
          className='flex items-center bg-white text-gray-700 hover:bg-gray-100 w-auto px-4 py-2 rounded-md'
          onClick={onPrev}
        >
          <SquareChevronLeft className='mr-2' />
          Previous
        </Button>
        <Button type="submit" className='bg-secondary text-white ml-2 hover:opacity-70'>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Documentation;