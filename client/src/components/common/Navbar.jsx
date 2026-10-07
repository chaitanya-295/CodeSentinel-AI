import React from "react";
import logo from "../../assets/logo3.png";

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white backdrop-blur-md scroll-px-2 border-b border-slate-200" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-2">
                <div className="flex items-center justify-between gap-4">

                    {/* Logo + Brand */}
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="CodeSentinel Logo"
                            className="w-16 h-16 sm:w-16 sm:h-16 object-contain"
                        />

                        <h1 className="text-lg sm:text-xl font-bold text-black">
                            Code<span className="text-cyan-400">Sentinel</span>
                            <span className="text-black-500"> - AI</span>
                        </h1>
                    </div>

                    {/* Right Button */}
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:block w-28 sm:w-36 px-4 py-2 text-sm font-medium text-black-200 border border-slate-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition">
                            GitHub
                        </button>

                        <button className="px-4 py-2 w-28 sm:w-36 text-sm font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
