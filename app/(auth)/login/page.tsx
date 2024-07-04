"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/graphql/mutation/login";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FormGroup } from "@/components/ui/form";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import authValidate from "../_formik";
import { scrollToFirstErrorMessage } from "@/lib/utils";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  password: "",
};
type ILogin = typeof initialValues;
function page() {
  const { loginValidate } = authValidate();
  const setUser = useUserStore(state => state.setUser)
  const router = useRouter()
  const formik = useFormik({
    initialValues,
    validationSchema: loginValidate,
    onSubmit: values => {
      setTimeout(() => {
        scrollToFirstErrorMessage();
      });
      handleLogin();
    },
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    variables: {
      email: formik.values.email,
      password: formik.values.password
    }
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleLogin = async () => {
    try {
      const res = await loginUser();
      setUser(res.data.login.user)
      router.push('/')
    } catch (error) {
    }
  };
  const { values, setFieldValue } = formik;

  return (
    <>
      <div className="text-center text-[28px] mb-4 font-bold">Login</div>
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
          <Link href={"/forgot-password"} className="text-blue-500">
            Forgot password?
          </Link>
        </FormGroup>
        <FormGroup top={6}>
          <Button
            loading={loading}
            type="submit"
            className="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
          >
            Login
          </Button>
        </FormGroup>
      </form>
      <div className="absolute flex items-center justify-center py-5 left-0 bottom-0 border-t w-full">
        <span className="mr-2">Don't have an account?</span>
        <Link href={"/register"} className="text-blue-500">
          <span>Sign up</span>
        </Link>
      </div>
    </>
  );
}

export default page;
