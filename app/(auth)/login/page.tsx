'use client'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useFormik } from 'formik'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { ApolloError, useMutation } from '@apollo/client'
import { LOGIN_USER } from '@/graphql/mutation/login'
const initialValues = {
    email: '',
    password: ''
}
type ILogin = typeof initialValues
function page() {
    const router = useRouter()
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            handleLogin(values)
        }
    })
    const [loginUser, { loading, data, error }] = useMutation(LOGIN_USER)
    const handleLogin = async (values: ILogin) => {
        try {
            await loginUser({
                variables: {
                    email: values.email,
                    password: values.password
                }
            })
        } catch (error) {
            if (error instanceof ApolloError) {
                // Apollo specific error handling
                if (error.networkError) {
                    console.error('Network error:', error.networkError);
                }
                if (error.graphQLErrors.length > 0) {
                    console.error('GraphQL errors:', error.graphQLErrors);
                }
            } else {
                // General error handling
                console.error('An error occurred:', error);
            }
        }
    }
    const { values, setFieldValue } = formik
    return (
        <>
            <div className="text-center text-[28px] mb-4 font-bold">Login</div>
            <div className="px-6 pb-1.5 text-[15px]">Email address</div>
            <form onSubmit={formik.handleSubmit}>
                <div className="px-6 pb-2">
                    <Input placeholder='email' type="email" value={values.email} onChange={(e) => setFieldValue('email', e.target.value)}></Input>
                </div>
                <div className="px-6 pb-2">
                    <Input placeholder='password' type="password" value={values.password} onChange={(e) => setFieldValue('password', e.target.value)}></Input>
                </div>
                <div className="px-6 text-[12px] text-gray-600">Forgot password?</div>
                <div className="px-6 mt-6">
                    <Button
                        type='submit'
                        className="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
                    >
                        Login
                    </Button>
                </div>
            </form>
            <div className="absolute flex items-center justify-center py-5 left-0 bottom-0 border-t w-full">
                <span className="text-[14px] text-gray-600">
                    Don't have an account?
                </span>
                <Button
                    onClick={() => router.push('/register')}
                    className="text-[14px] text-[#F02C56] font-semibold pl-1"
                >
                    <span>Sign up</span>
                </Button>
            </div>
        </>
    )
}

export default page