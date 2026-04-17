import React, { useState } from "react";
import PhoneInputField from "../../components/Common/PhoneInputField";

const ProfilePage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="bg-gray-100 min-h-screen p-6">

            {/* PROFILE CARD */}
            <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">User Profile</h2>

                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-blue-600 font-medium cursor-pointer"
                    >
                        {showPassword ? "HIDE PASSWORD" : "CHANGE PASSWORD"}
                    </button>
                </div>

                {/* Avatar */}
                <div className="mb-6">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt="avatar"
                        className="w-28 h-28 rounded-full"
                    />
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="border rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none border-gray-300"
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        className="border rounded-md p-3 w-full border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                {/* Phone */}

                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PhoneInputField />

                    <input
                        type="email"
                        placeholder="Email"
                        className="border rounded-md p-3 w-full border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                {/* Button */}
                <button className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                    UPDATE PROFILE
                </button>
            </div>
            
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${showPassword
                        ? "max-h-125 opacity-100 mt-6"
                        : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl">

                    <h2 className="text-xl font-semibold mb-4">
                        Change Password
                    </h2>

                    <div className="border-b border-gray-200 mb-6"></div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                        <input
                            type="password"
                            placeholder="Old Password"
                            className="border rounded-md border-gray-300 p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="password"
                            placeholder="New Password"
                            className="border rounded-md border-gray-300 p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Button */}
                    <button className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                        CHANGE PASSWORD
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;