import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import VerifyIcon from "../../assets/verify-icon.png"

const ForgotPassword = () => {
    const [step, setStep] = useState("otp"); // otp | reset
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    // Handle OTP input
    const handleOtpChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto focus next
        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">

            <form
                autoComplete="off" className="bg-white w-full max-w-md p-8 rounded-xl shadow-md text-center">

                {/* ===== OTP SCREEN ===== */}
                {step === "otp" && (
                    <>
                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 flex items-center justify-center">
                              <img src={VerifyIcon} alt="verify-icon"/>
                            </div>
                        </div>

                        <h2 className="text-xl font-bold mb-2">Verify OTP</h2>

                        <p className="text-gray-500 text-sm mb-6">
                            OTP sent to{" "}
                            <span className="text-red-500 font-medium">
                                snehabramhe5@gmail.com
                            </span>
                        </p>

                        {/* OTP BOXES */}
                        <div className="flex justify-center gap-2 mb-6">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-${index}`}
                                    type="text"
                                    inputMode="numeric"
                                    autoComplete="one-time-code" // ✅ important
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(e.target.value, index)}
                                    className="w-12 h-12 border rounded-md text-center text-lg outline-none focus:ring-2 focus:ring-red-400"
                                />
                            ))}
                        </div>

                        {/* BUTTON */}
                        <button
                            onClick={() => setStep("reset")}
                            type="button"
                            className="w-full bg-red-400 hover:bg-red-500 text-white py-3 rounded-md font-semibold transition"
                        >
                            VERIFY OTP
                        </button>
                    </>
                )}

                {/* ===== RESET PASSWORD SCREEN ===== */}
                {step === "reset" && (
                    <>
                        <h2 className="text-xl font-bold mb-6">
                            Forgot Password
                        </h2>

                        {/* New Password */}
                        <div className="relative mb-4">
                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="Confirm Password"
                                autoComplete="new-password" // ✅ same here
                                className="w-full px-4 py-4 border rounded-lg outline-none focus:ring-1"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4 cursor-pointer text-gray-500"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative mb-6">
                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="w-full px-4 py-4 border rounded-lg outline-none focus:ring-1"
                            />
                            <span
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-4 top-4 cursor-pointer text-gray-500"
                            >
                                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>

                        {/* BUTTON */}
                        <button className="w-full bg-red-400 hover:bg-red-500 text-white py-3 rounded-md font-semibold transition">
                            CHANGE PASSWORD
                        </button>
                    </>
                )}
            </form>
        </div>
    );
};

export default ForgotPassword;