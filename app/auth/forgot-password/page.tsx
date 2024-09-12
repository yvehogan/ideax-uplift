"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import routes from "@/lib/routes";

const ForgotPassword = () => {
  const [resetSent, setResetSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        setResetSent(true);
        toast.success("Password reset email sent. Please check your inbox.");
      } catch (error) {
        toast.error("Error sending password reset email. Please try again.");
      }
    },
  });

  return (
    <div className="flex flex-col w-full lg:mx-auto">
      <div className="mt-10">
        <Link href={routes.home.path}>
          <Image src="/images/logo2.png" alt="logo" height={41} width={100} className="ml-14" />
        </Link>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center md:px-10 xl:px-28 px-12 mt-12"
        >
          <h2 className="text-textGrey text-2xl lg:text-4xl font-bold mt-10 text-start">
            Forgot Password
          </h2>
          {resetSent ? (
            <p className="mt-4 text-green-600">
              Password reset email sent. Please check your inbox and follow the instructions.
            </p>
          ) : (
            <>
              <div className="flex flex-col gap-10px mt-10 mb-5">
                <label htmlFor="email" className="text-lg font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
              </div>
              <Button
                type="submit"
                className="bg-secondary w-full hover:bg-secondary hover:opacity-70 py-6 mt-10"
              >
                Reset Password
              </Button>
            </>
          )}
          <div className="flex justify-center mt-5">
            <Link href={routes.auth.login.path} className="text-secondary font-medium underline">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;