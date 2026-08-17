"use client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = async (data) => {
    const { data: res , error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.url,
    });

    if(res){
        toast.success("Sign Up successful!");
    }
    if(error){
        toast.error(error.message);
    }
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
          Create Your QurbaniHat Account
        </h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="name"
              className="input w-full"
              placeholder="Enter your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
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

            {/* image */}
            <label className="label">Image Url</label>
            <input
              type="url"
              className="input w-full"
              placeholder="Enter image url"
              {...register("url", { required: "url is required" })}
            />
            {errors.url && <p className="text-red-500">{errors.url.message}</p>}

            {/* password */}
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

            <button className="btn bg-[#4CC9F0] hover:bg-blue-400 text-white mt-4">
              Sign Up
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
          <Link href="/signIn" className="text-rose-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
