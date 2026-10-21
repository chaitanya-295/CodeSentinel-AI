import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
import { FiEye, FiEyeOff, FiGithub } from "react-icons/fi";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="flex justify-center items-center mb-8">
                    <img
                        src={logo}
                        alt="CodeSentinel Logo"
                        className="w-14 h-14 object-contain"
                    />

                    <h1 className="text-xl sm:text-2xl font-bold text-black">
                        Code<span className="text-cyan-400">Sentinel</span>
                        <span className="text-black"> - AI</span>
                    </h1>
                </div>

                {/* Card */}
                <div className="bg-gray border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">

                    {/* Heading */}
                    <div className="text-center mb-7">
                        <h2 className="text-2xl sm:text-3xl font-bold">
                            Welcome back
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                            Sign in to continue to CodeSentinel AI
                        </p>
                    </div>

                    {/* GitHub Login */}
                    <button
                        className="w-full flex items-center justify-center gap-3 py-2.5 rounded-lg border border-slate-700 text-sm font-medium text-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition"
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

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm text-slate-800 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-slate-700 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-400 transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label className="block text-sm text-slate-800 mb-2">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
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

                    {/* Login Button */}
                    <button
                        className="w-full py-3 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition"
                    >
                        Login
                    </button>

                    {/* Signup */}
                    <p className="text-center text-sm text-slate-500 mt-6">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-cyan-400 hover:text-cyan-300 transition"
                        >
                            Create account
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

export default Login;