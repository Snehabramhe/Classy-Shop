import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="min-h-185 flex">
        {/* LEFT - FORM */}
        <div className="w-[65%] flex items-center justify-center bg-white">
          <div className="bg-white shadow-[0_0_20px_10px_rgba(0,0,0,0.1)] p-8 rounded-xl w-full max-w-md">

            <div className="flex justify-center mb-6">
              <img src={logo} alt="img-notfound" />
            </div>

            <h2 className="text-2xl font-bold text-center mb-6">
              Login to your account
            </h2>

            {/* Email */}
            <input
              type="email"
              placeholder="Email Id"
              className="w-full mb-4 px-4 py-4 border rounded-lg outline-none focus:ring-1 "
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

            <p onClick={() => navigate("/forgot-password")} className="font-medium mb-4 cursor-pointer hover:text-primary">
              Forgot Password?
            </p>

            {/* Button */}
            <button className="w-full mb-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-red-500 cursor-pointer">
              LOGIN
            </button>

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
              Login With Google
            </button>

          </div>
        </div>


        {/* RIGHT - IMAGE */}
        <div className="w-[35%] hidden md:flex items-center bg-[#ffede0] min-h-screen relative">
          <img
            src="https://res.cloudinary.com/djodhdoyk/image/upload/v1775402613/shopping-cart_czrkwx.png"
            alt="login visual"
            className="max-w-md absolute -left-30 w-200 h-175 animate-basket"
          />
        </div>

      </div>
    </>
  );
};

export default LoginPage;