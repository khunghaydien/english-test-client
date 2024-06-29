"use client";
import { Button } from "@/components/ui/button";
import { FormGroup } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { REGISTER_USER } from "@/graphql/mutation/register";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import authValidate from "../_formik";
import { scrollToFirstErrorMessage } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
const initialValues = {
  email: "",
  fullname: "",
  password: "",
  confirmPassword: "",
};
type IRegister = typeof initialValues;
function page() {
  const [registerUser, { loading, error, data }] = useMutation(REGISTER_USER);
  const router = useRouter()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const { registerValidate } = authValidate();
  const formik = useFormik({
    initialValues,
    validationSchema: registerValidate,
    onSubmit: (values) => {
      setTimeout(() => {
        scrollToFirstErrorMessage();
      });
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values: IRegister) => {
    try {
      await registerUser({
        variables: {
          email: values.email,
          password: values.password,
          fullname: values.fullname,
        },
      });
      router.push('/login')
    } catch (error) {
    }
  };
  const { values, setFieldValue } = formik;
  
  return (
    <>
      <div className="text-center text-[28px] mb-4 font-bold">Sign up</div>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Input
            autoComplete="off"
            required
            label="Email"
            startIcon={<MdEmail />}
            placeholder="email"
            type="email"
            value={values.email}
            error={formik.touched.email && formik.touched.email}
            errorMessage={formik.errors.email}
            onChange={(e) => setFieldValue("email", e.target.value)}
          />
        </FormGroup>
        <FormGroup top={6}>
          <Input
            autoComplete="off"
            required
            label="fullname"
            startIcon={<RxAvatar />}
            placeholder="fullname"
            type="fullname"
            value={values.fullname}
            error={formik.touched.fullname && formik.touched.fullname}
            errorMessage={formik.errors.fullname}
            onChange={(e) => setFieldValue("fullname", e.target.value)}
          />
        </FormGroup>
        <FormGroup top={6}>
          <Input
            autoComplete="off"
            label="Password"
            startIcon={<RiLockPasswordLine />}
            endIcon={
              showPassword ? (
                <FaEyeSlash
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPassword(false);
                  }}
                />
              ) : (
                <FaEye
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPassword(true);
                  }}
                />
              )
            }
            placeholder="password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            error={formik.touched.password && formik.touched.password}
            errorMessage={formik.errors.password}
            onChange={(e) => setFieldValue("password", e.target.value)}
          />
        </FormGroup>
        <FormGroup top={6}>
          <Input
            autoComplete="off"
            label="Confirm password"
            startIcon={<RiLockPasswordLine />}
            endIcon={
              showConfirmPassword ? (
                <FaEyeSlash
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowConfirmPassword(false);
                  }}
                />
              ) : (
                <FaEye
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowConfirmPassword(true);
                  }}
                />
              )
            }
            placeholder="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={values.confirmPassword}
            error={
              formik.touched.confirmPassword && formik.touched.confirmPassword
            }
            errorMessage={formik.errors.confirmPassword}
            onChange={(e) => setFieldValue("confirmPassword", e.target.value)}
          />
        </FormGroup>
        <FormGroup top={6}>
          <Button
            loading={loading}
            type="submit"
            className={
              "w-full text-[17px] font-semibold text-white py-3 rounded-sm"
            }
          >
            Register
          </Button>
        </FormGroup>
      </form>
      <div className="absolute flex items-center justify-center py-5 left-0 bottom-0 border-t w-full">
        <span className="mr-2">Have an account?</span>
        <Link href={"/login"} className="text-blue-500">
          <span>Login</span>
        </Link>
      </div>
    </>
  );
}

export default page;
