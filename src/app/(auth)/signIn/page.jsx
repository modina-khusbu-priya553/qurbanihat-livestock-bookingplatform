"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignInPage = () => {


  // form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("Login successful!");
    }

    console.log(data);
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex justify-center items-center py-15 md:py-20 px-5 max-w-7xl mx-auto">
      <div className="bg-base-200 border-base-300 rounded-box w-sm shadow-sm border py-8 px-5">
        <h2 className="text-xl font-bold mb-2 text-center">
          Login with your account
        </h2>

        <form onSubmit={handleSubmit(handleSignIn)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Enter your Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button className="btn bg-[#4361EE] hover:bg-blue-700 text-white mt-4">
              Sign In
            </button>
          </fieldset>

          <div className="divider">or</div>
        </form>

        <button onClick={handleGoogleSignIn} className="btn w-full rounded-md">
          <FcGoogle />
          Sign in with Google
        </button>

        <p className="text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signUp" className="text-rose-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
