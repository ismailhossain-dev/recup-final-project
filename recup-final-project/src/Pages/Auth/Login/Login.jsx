import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser } = useAuth();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const handleSignInUser = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        toast("SignIn Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(handleSignInUser)} className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome Back</h2>

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="email@example.com"
              className="input input-bordered focus:input-primary"
            />
          </div>

          {/* email errors */}
          {errors.email?.type === "required" && <p className="text-red-500">Email is required</p>}

          {/* Password Input */}
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="text"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="••••••••"
              className="input input-bordered focus:input-primary"
            />
            {/* password  error*/}
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {/* if user password less 6 then showing error */}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">Password must be at least 6 characters.</p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-primary">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Login Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>

          {/* Signup Link (Optional) */}
          <p className="text-center text-sm mt-4">
            Don't have an account?
            <a className="link link-primary ml-1 font-semibold">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
