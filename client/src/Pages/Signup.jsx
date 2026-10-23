import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo3.png";
import { FiEye, FiEyeOff, FiGithub } from "react-icons/fi";
import API from "../services/api";

function Signup() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle signup
    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        // Frontend validation
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            const response = await API.post(
                "/auth/signup",
                formData
            );

            console.log("Signup response:", response.data);

            setSuccess("Account created successfully!");

            // Go to login after successful signup
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            console.log("Signup error:", error);

            setError(
                error.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">

            {/* Signup Container */}
            <div className="w-full max-w-md sm:max-w-lg">

                {/* Logo */}
                <div className="flex justify-center items-center mb-6 sm:mb-8">
                    <img
                        src={logo}
                        alt="CodeSentinel Logo"
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                    />

                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                        Code<span className="text-cyan-400">Sentinel</span>
                        <span> - AI</span>
                    </h1>
                </div>

                {/* Signup Card */}
                <div className="border border-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-7 md:p-8 shadow-2xl">

                    {/* Heading */}
                    <div className="text-center mb-6 sm:mb-7">
                        <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                            Create your account
                        </h2>

                        <p className="mt-2 text-xs sm:text-sm text-slate-400">
                            Start securing your code with AI
                        </p>
                    </div>

                    {/* GitHub Signup */}
                    <button
                        className="w-full flex items-center justify-center gap-2 sm:gap-3 py-2.5 sm:py-3 rounded-lg border border-slate-700 text-xs sm:text-sm font-medium text-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition"
                    >
                        <FiGithub size={18} className="sm:w-5 sm:h-5" />
                        Continue with GitHub
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-2 sm:gap-3 my-5 sm:my-6">
                        <div className="h-px flex-1 bg-slate-800"></div>

                        <span className="text-[10px] sm:text-xs text-slate-500">
                            OR
                        </span>

                        <div className="h-px flex-1 bg-slate-800"></div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block text-xs sm:text-sm text-slate-500 mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-slate-700 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-400 transition"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-xs sm:text-sm text-slate-500 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-slate-700 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-400 transition"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block text-xs sm:text-sm text-slate-500 mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a password"
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-11 sm:pr-12 rounded-lg border border-slate-700 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-400 transition"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400 transition"
                                >
                                    {showPassword ? (
                                        <FiEyeOff size={17} />
                                    ) : (
                                        <FiEye size={17} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4">
                            <label className="block text-xs sm:text-sm text-slate-500 mb-2">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-11 sm:pr-12 rounded-lg border border-slate-700 text-sm outline-none placeholder:text-slate-400 focus:border-cyan-400 transition"
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

                        {/* Error */}
                        {error && (
                            <p className="text-red-500 text-xs sm:text-sm mb-4">
                                {error}
                            </p>
                        )}

                        {/* Success */}
                        {success && (
                            <p className="text-green-500 text-xs sm;text-sm mb-4">
                                {success}
                            </p>
                        )}

                        {/* Terms */}
                        <div className="flex items-start gap-2 mb-5 sm:mb-6">
                            <input
                                type="checkbox"
                                className="mt-1 accent-cyan-400 cursor-pointer shrink-0"
                            />

                            <p className="text-[11px] sm:text-xs text-slate-500 leading-5">
                                I agree to the{" "}
                                <button
                                    type="button"
                                    className="text-cyan-400 hover:text-cyan-300"
                                >
                                    Terms of Service
                                </button>{" "}
                                and{" "}
                                <button
                                    type="button"
                                    className="text-cyan-400 hover:text-cyan-300"
                                >
                                    Privacy Policy
                                </button>
                                .
                            </p>
                        </div>

                        {/* Create Account */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2.5 sm:py-3 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition"
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </button>
                    </form>

                    {/* Login */}
                    <p className="text-center text-xs sm:text-sm text-slate-500 mt-5 sm:mt-6">
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
                <p className="text-center text-[10px] sm:text-xs text-slate-600 mt-5 sm:mt-6">
                    © 2026 CodeSentinel AI. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Signup;