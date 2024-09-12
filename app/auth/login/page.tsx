"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import routes from "@/lib/routes";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Loginpage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      toast.success('Login Successful');
      router.push("/dashboard");
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
            Login to your account
          </h2>
          <div className="flex flex-col gap-10px mt-10 mb-5">
            <label htmlFor="email" className="text-lg font-medium mb-2 ">
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
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium mb-2">
              Password
            </label>
            <div className="relative mb-2">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <button
                type="button"
                className="absolute right-4 top-3"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>
          <Link
            href={"/auth/forgot-password"}
            className="text-secondary font-medium underline w-full flex justify-end mb-6"
          >
            Forgot Password?
          </Link>
          <Button
            asChild
            className="bg-secondary w-full hover:bg-secondary hover:opacity-70 py-6 mt-10"
          >
            <button type="submit">Login</button>
          </Button>
          <div className="flex justify-between md:mt-5">
            <p className="text-secondary font-medium">
              Don&apos;t have an account?
            </p>
            <Link
              href={routes.auth.signUp.path}
              className="text-secondary font-medium underline"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;