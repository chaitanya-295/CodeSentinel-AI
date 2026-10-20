import React from "react";
import logo from "../assets/logo3.png";

function Login() {
    return (
        <div className="min-h-screen bg-[#020617 flex items-center justify-center px-4 py-8]">
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
                        <span className="text-black"> AI</span>
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
                </div>
            </div>
        </div>
    );
}

export default Login;