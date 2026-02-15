import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  console.log("in register page ", location);
  //React hook from work step-1
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  //handle reach-hook-from
  const handleRegistration = (data) => {
    console.log(data.photo[0]);
    const profileImg = data.photo[0];
    //firebase signUp work
    registerUser(data.email, data.password)
      .then((result) => {
        toast.success("SinUp Successful");
        console.log(result);
        //1.store the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);
        //2. send the photo to store and get ther url
        //imagebbb example call
        const imageAPI_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
        //send image image bbb and store and convert
        axios.post(imageAPI_URL, formData).then((result) => {
          console.log("after image upload", result.data.data);
          // ====update user profile to firebase======
          const userProfile = {
            displayName: data.name,
            display_url: result.data.data.display_url,
          };

          //update profile
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated complete");
              toast.success("Profile updated done");
              Navigate(location.state || "/");
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          toast("email-already-in-use");
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-base-100 border border-base-300">
        {/* ==The handleSubmit comes react-hook-from */}
        <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome to Zap Shift!</h2>
          <h1 className="text-2xl text-center -mt-3">Please Register</h1>
          {/* Name Flied */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="input input-bordered focus:input-primary transition-all"
            />
            {errors.email?.type === "required" && <p className="text-red-500">Name is required.</p>}
          </div>
          {/* DaisyUi File Input photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input type="file" {...register("photo", { required: true })} className="file-input" />

            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo is required.</p>
            )}
          </div>

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
              type="text"
              placeholder="••••••••"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
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
                Password must have at least one uppercase, at least one lowercase, at least one
                number, and at least one special characters
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

          <p className="text-center text-sm mt-4">
            Already have an account
            <Link
              state={location.state}
              to="/login"
              className="link link-primary ml-1 font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
        {/*  Login button*/}
        <div className="flex justify-center pb-8">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
