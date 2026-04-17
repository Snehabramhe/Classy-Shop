import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpg";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="min-h-185 flex">

        {/* LEFT - IMAGE */}
        <div className="w-[45%] hidden md:flex items-center justify-center bg-[#ffede0] relative">
          <img
            src="https://res.cloudinary.com/djodhdoyk/image/upload/v1775402848/56468664-image__cvwjxm.png"
            alt="register visual"
            className="absolute -right-30 w-180 h-150 animate-basket"
          />
        </div>


        <div className="w-[55%] flex items-center justify-center bg-white">
          <div className="bg-white shadow-[0_0_20px_10px_rgba(0,0,0,0.1)] p-8 rounded-xl w-full max-w-md">

            <div className="flex justify-center mb-6">
              <img src={logo} alt="img-notfound" />
            </div>

            <h2 className="text-2xl font-bold text-center mb-6">
              Register with a new account
            </h2>

            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-4 px-4 py-4 border rounded-lg outline-none focus:ring-1"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Id"
              className="w-full mb-4 px-4 py-4 border rounded-lg outline-none focus:ring-1"
            />

            {/* Password */}
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-4 border rounded-lg outline-none focus:ring-1"
              />
              <span
                className="absolute right-3 top-5 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            {/* Button */}
            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-red-500 cursor-pointer">
              REGISTER
            </button>

            <p className="text-center mt-4 text-gray-700">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")} className="text-primary cursor-pointer font-medium">
                Login
              </span>
            </p>

            <p className="text-center mt-2 text-gray-700">
              Or continue with social account
            </p>

            {/* Google Button */}
            <button className="w-full mt-4 flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-lg cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Sign Up With Google
            </button>

          </div>
        </div>

      </div>

    </>
  );
};

export default RegisterPage;