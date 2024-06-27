'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { REGISTER_USER } from '@/graphql/mutation/register'
import { ApolloError, useMutation } from '@apollo/client'
import { useFormik } from 'formik'
import React from 'react'
const initialValues = {
    email: '',
    fullname: '',
    password: '',
    confirmPassword: ''
}
type IRegister = typeof initialValues
function page() {
    const [registerUser, { loading, error, data }] = useMutation(REGISTER_USER)
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => { handleSubmit(values) }
    })
    const handleSubmit = async (values: IRegister) => {
        try {
            await registerUser({
                variables: {
                    email: values.email,
                    password: values.password,
                    fullname: values.fullname,
                },
            });
        } catch (error: any) {
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
            <div className="text-center text-[28px] mb-4 font-bold">Sign up</div>
            <form onSubmit={formik.handleSubmit}>
                <div className="px-6 pb-2">
                    <Input placeholder='email' value={values.email} onChange={(e) => setFieldValue('email', e.target.value)} />
                </div>
                <div className="px-6 pb-2">
                    <Input placeholder='fullname' value={values.fullname} onChange={(e) => setFieldValue('fullname', e.target.value)} />
                </div>
                <div className="px-6 pb-2">
                    <Input placeholder='password' value={values.password} onChange={(e) => setFieldValue('password', e.target.value)} />
                </div>
                <div className="px-6 pb-2">
                    <Input placeholder='confirm password' value={values.confirmPassword} onChange={(e) => setFieldValue('confirmPassword', e.target.value)} />
                </div>
                <div className="px-6 text-[12px] text-gray-600">Forgot password?</div>
                <div className="px-6 mt-6">
                    <Button
                        type='submit'
                        className={
                            "w-full text-[17px] font-semibold text-white py-3 rounded-sm"}
                    >
                        Register
                    </Button>
                </div>
            </form>

        </>
    )
}

export default page