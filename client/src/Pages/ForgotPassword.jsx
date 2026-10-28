import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
import API from "../services/api";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (!email) {
            setError("Please enter your email address.");
            return;
        }

        try {
            setLoading(true);

            const response = await API.post(
                "/auth/forgot-password",
                { email, }
            );

            setSuccess(response.data.message);
        } catch (error) {
            console.error("Forgot password error:", error);

            setError(
                error.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center px-4 py-35">
            <div className="w-full max-w-md">

                {/* Logo*/}
                <div className="flex justify-center">
                    <Link
                        to="/"
                        className="flex justify-center items-center mb-2 sm:mb-4"
                    >
                        <img
                            src={logo}
                            alt="CodeSentinel AI"
                            className="w-14 h-14 object-contain"
                        />
                        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                            Code<span className="text-cyan-400">Sentinel</span>
                            <span className="text-black"> - AI</span>
                        </h1>
                    </Link>
                </div>

                {/* Card */}
                <div className="bg-gray-50 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold">
                            Forgot Password?
                        </h1>

                        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400">
                            {error}
                        </div>
                    )}

                    {/* Success */}
                    {success && (
                        <div className="mb-5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-400">
                            {success}
                        </div>
                    )}

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-400 mb-2"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-lg bg-cyan-300 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-semibold transition"
                        >
                            {loading
                                ? "Sending..."
                                : "Send Reset Link"
                            }
                        </button>
                    </form>

                    {/* Back to Login */}
                    <div className="text-center mt-6">
                        <Link
                            to="/login"
                            className="text-sm text-slate-400 hover:text-cyan-400 transition"
                        >
                            ← Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;