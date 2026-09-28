import React from "react";
import logo from "../assets/logo3.png";
import { PiShootingStarLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";


function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-sky-300">

            {/* Home Page Navbar */}
            <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3">
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
                                <span className="text-black-400"> - AI</span>
                            </h1>
                        </div>

                        {/* Right Button */}
                        <div className="flex items-center gap-4">
                            <button className="hidden sm:block w-27 sm:w-36 px-4 py-2 text-sm font-medium text-black-200 border border-slate-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition">
                                GitHub
                            </button>

                            <button className="px-4 py-2 w-27 sm:w-36 text-sm font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex-1 px-6 pt-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="text-gray-600 text:sm px-4 py-2 rounded-full flex items-center gap-2">
                            <PiShootingStarLight size={21} className="text-cyan-600" />
                            Your Code’s First Line of Defense.
                        </div>
                    </div>

                    <div className="text-center mb-28">
                        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
                            Secure Your Code with
                            <span className="relative inline-block">
                                <span className="text-cyan-400 px-5 py-1 rounded-full">
                                    AI Intelligence
                                </span>
                            </span>
                        </h1>

                        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
                            AI-powered code auditing that finds vulnerabilities, detects bugs, and helps you fix them before they reach production.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-10">
                            <button className="bg-black text-white px-10 py-3 rounded-full hover:opacity-90 transition shadow-md">
                                Analyze Your Code
                            </button>

                            <button className="border border-gray-800 px-10 py-3 rounded-full hover:bg-cyan-100 transition">
                                View Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex items-center justify-between gap-4 px-8">
                <div className="relative inline-block">
                    <div className="text-black px-5 py-1 rounded-full flex items-center gap-2 border border-cyan-800 bg-white-700">
                        <GoDotFill />Multi-Agent Analysis
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;