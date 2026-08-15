"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';


const SignInPage = () => {

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm()

    const handleSignIn = async(data) =>{

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            alert(error.message);
        }

        if (res) {
            alert("Login successful!");
        }

        console.log(data);

    }

    

    return (
        <div className='flex justify-center items-center h-[85vh] container mx-auto mt-2'>
            <div className='bg-base-200 border-base-300 rounded-box w-xs border p-4'>
                <h2 className="text-xl font-bold mb-2 text-center">Login with your account</h2>

                <form onSubmit={handleSubmit(handleSignIn)}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input 
                            type="email" className="input" placeholder="Enter your Email"  
                            {...register("email",  { required:"Email is required"})}/>
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                        <label className="label">Password</label>
                        <input 
                            type="password" className="input" placeholder="Password"  
                            {...register("password",  { required:"Password is required"})}/>
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>

                <p className="text-center mt-4">
                    Don&apos;t have an account? <Link href="/signUp" className="text-rose-500 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default SignInPage;