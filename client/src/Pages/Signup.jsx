import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
import { FiEye, FiEyeOff, FiGithub } from "react-icons/fi";

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8">

            {/* Signup Container */}
            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="flex justify-center items-center mb-8">
                    <img
                        src={logo}
                        alt="CodeSentinel Logo"
                        className="w-14 h-14 object-contain"
                    />

                    <h1 className="text-xl sm:text-2xl font-bold">
                        Code<span className="text-cyan-400">Sentinel</span>
                        <span> - AI</span>
                    </h1>
                </div>

                {/* Signup Card */}
                <div className="border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">

                    {/* Heading */}
                    <div className="text-center mb-7">
                        <h2 className="text-2xl sm:text-3xl font-bold">
                            Create your account
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                            Start securing your code with AI
                        </p>
                    </div>

                    {/* GitHub Signup */}
                    <button
                        className="w-full flex items-center justify-center gap-3 py-2.5 rounded-lg border border-slate-700 text-sm font-medium text-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition"
                    >
                        <FiGithub size={19} />
                        Continue with GitHub
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="h-px flex-1 bg-slate-800"></div>

                        <span className="text-xs text-slate-500">
                            OR
                        </span>

                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="block text-sm text-slate-500 mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 rounded-lg border border-slayte-700 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400 transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm text-slate-500 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-slate-700 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400 transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-sm text-slate-500 mb-2">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a password"
                                className="w-full px-4 py-3 pr-12 rounded-lg border border-slate-700 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400 transition"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400 transition"
                            >
                                {showPassword ? (
                                    <FiEyeOff size={18} />
                                ) : (
                                    <FiEye size={18} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label className="block text-sm text-slate-500 mb-2">
                            Confirm Password
                        </label>

                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your password"
                                className="w-full px-4 py-3 pr-12 rounded-lg border border-slate-700 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400 transition"
                            />

                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400 transition"
                            >
                                {showConfirmPassword ? (
                                    <FiEyeOff size={18} />
                                ) : (
                                    <FiEye size={18} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2 mb-6">
                        <input
                            type="checkbox"
                            className="mt-1 accent-cyan-400 cursor-pointer"
                        />

                        <p className="text-xs text-slate-500 leading-5">
                            I agree to the{" "}
                            <button className="text-cyan-400 hover:text-cyan-300">
                                Terms of Service
                            </button>{" "}
                            and{" "}
                            <button className="text-cyan-400 hover:text-cyan-300">
                                Privacy Policy
                            </button>
                            .
                        </p>
                    </div>

                    {/* Create Account */}
                    <button className="w-full py-3 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition">
                        Create Account
                    </button>

                    {/* Login */}
                    <p className="text-center text-sm text-slate-500 mt-6">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-cyan-400 hover:text-cyan-300 transition"
                        >
                            Login
                        </Link>
                    </p>
                </div>

                {/* Bottom text */}
                <p className="text-center text-xs text-slate-600 mt-6">
                    © 2026 CodeSentinel AI. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Signup;