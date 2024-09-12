"use client";
import React, { useState } from "react";
import Link from "next/link";
import routes from "@/lib/routes";
import BasicInformation from "./sign-up1";
import Documentation from "./sign-up2";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface FormData {
  ngoName: string;
  contactPerson: string;
  email: string;
  phoneNumber: string;
  password: string;
  ngoLogo: File | null;
  scumlFile: File | null;
  humanitarianProof: File | null;
}

const RegisterPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    ngoName: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",
    password: "",
    ngoLogo: null,
    scumlFile: null,
    humanitarianProof: null,
  });

  const handleNextStep = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (documentationData: Partial<FormData>) => {
    try {
      const completeFormData = { ...formData, ...documentationData };
      
      // Convert File objects to base64 strings
      const ngoLogoBase64 = await fileToBase64(completeFormData.ngoLogo);
      const scumlFileBase64 = await fileToBase64(completeFormData.scumlFile);
      const humanitarianProofBase64 = await fileToBase64(completeFormData.humanitarianProof);

      const userDataToStore = {
        ...completeFormData,
        ngoLogo: ngoLogoBase64,
        scumlFile: scumlFileBase64,
        humanitarianProof: humanitarianProofBase64,
      };

      // Save to local storage
      localStorage.setItem('userData', JSON.stringify(userDataToStore));

      toast.success("User registered successfully");
      router.push('/auth/login');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error?.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const fileToBase64 = (file: File | null): Promise<string | null> => {
    return new Promise((resolve, reject) => {
      if (!file) {
        resolve(null);
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  return (
    <div className="flex flex-col w-full lg:mx-auto">
      {step === 1 && (
        <BasicInformation initialValues={formData} onNext={handleNextStep} />
      )}
      {step === 2 && (
        <Documentation
          initialValues={formData}
          onSubmit={handleSubmit}
          onPrev={handlePrevStep}
        />
      )}
{/* {step === 3 && <AccountCreation onPrev={handlePrevStep} onSubmit={handleSubmit} />} */}
      <div className="flex justify-between md:mt-10 my-5">
        <p className="text-secondary font-medium">Already have an account?</p>
        <Link
          href={routes.auth.login.path}
          className="text-secondary font-medium underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
