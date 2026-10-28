import React, { useState } from "react";
import { FiAlignCenter } from "react-icons/fi";
import { resolvePath, useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (password.length < 6) {
            setError("Password do not match.");
            return;
        }

        try {
            setLoading(true);

            const response = await API.post(
                `/auth/reset-password/${token}`,
                {
                    password,
                    confirmPassword,
                }
            );

            setSuccess(
                response.data.message || "Password reset successfully."
            );

            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Unable to reset password. The link may have expired."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                {/* Logo / Heading */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-4">
                        <FiLock
                            size={26}
                            className="text-cyan-400"
                        />
                    </div>

                    <h1 className="text-3xl font-bold text-white">
                        Reset Password
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Create a new password for your account.
                    </p>
                </div>

                {/* Card */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">

                    {error && (
                        <div className="mb-5 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mb-5 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-center gap-2">
                            <FiCheckCircle />
                            {success}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {/* New Password */}
                        <div>
                            <label className="block text-sm text-slate-300 mb-2">
                                New Password
                            </label>

                            <div className="relative">
                                <FiLock
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                                    size={18}
                                />

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter new password"
                                    className="w-full bg-[#020617] border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none focus:border-cyan-500 transition"
                                    required
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm text-slate-300 mb-2">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <FiLock
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                                    size={18}
                                />

                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Confirm new password"
                                    className="w-full bg-[#020617] border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 outline-none focus:border-cyan-500 transition"
                                    required
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-semibold py-3 rounded-lg transition"
                        >
                            {loading
                                ? "Resetting Password..."
                                : "Reset Password"}
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        <Link
                            to="/login"
                            className="text-sm text-cyan-400 hover:text-cyan-300 transition"
                        >
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;