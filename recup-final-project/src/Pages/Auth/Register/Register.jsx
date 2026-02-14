import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  //React hook from work step-1
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //handle reach-hook-from
  const handleRegistration = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-base-100 border border-base-300">
        {/* ==The handleSubmit comes react-hook-from */}
        <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome Back!</h2>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              //=====step-2; We are using registers in the namespace here.=====
              //=====step-3:if use required true  then don't submit without man in input flied ===
              {...register("email", { required: true })}
              placeholder="email@example.com"
              className="input input-bordered focus:input-primary transition-all"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required.</p>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              })}
              className="input input-bordered focus:input-primary transition-all  "
            />
            {/* if user not input filed complete then required error */}
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required.</p>
            )}
            {/* if the password is less than 6, an error will be displayed */}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">Password must be at least 6 characters.</p>
            )}
            {/* regular exp use for password validation  & error message*/}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must contain uppercase, lowercase, number and special character
              </p>
            )}

            <label className="label mt-1">
              <a href="#" className="label-text-alt link link-hover text-primary">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Login Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary hover:scale-[1.02] active:scale-[0.98] transition-transform w-full">
              Login
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-center text-sm mt-4">
            Don't have an account?
            <a className="link link-primary ml-1 font-medium ">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
