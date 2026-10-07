import React from "react";
import { PiShootingStarLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-sky-300">
            <div className="flex-1 px-6 pt-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                            <PiShootingStarLight size={21} className="text-cyan-600" />
                            Your Code’s First Line of Defense.
                        </div>
                    </div>

                    <div className="text-center mb-20">
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
                            <button className="bg-[#020617] text-white px-10 py-3 rounded-full hover:opacity-90 transition shadow-md">
                                Analyze Your Code
                            </button>

                            <button className="border border-gray-800 px-10 py-3 rounded-full hover:bg-cyan-100 transition">
                                View Demo
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 px-2 sm:px-6 py-2 sm:py-6">
                    <div className="px-5 py-2 rounded-full flex items-center gap-2 border border-cyan-800 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
                        <GoDotFill className="text-cyan-500" />
                        Multi-Agent Analysis
                    </div>

                    <div className="px-5 py-2 rounded-full flex items-center gap-2 border border-cyan-800 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
                        <GoDotFill className="text-cyan-500" />
                        Security Scanning
                    </div>

                    <div className="px-5 py-2 rounded-full flex items-center gap-2 border border-cyan-800 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
                        <GoDotFill className="text-cyan-500" />
                        Automated Fix Suggestions
                    </div>

                    <div className="px-5 py-2 rounded-full flex items-center gap-2 border border-cyan-800 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
                        <GoDotFill className="text-cyan-500" />
                        Developer-Friendly Reports
                    </div>

                    <div className="px-5 py-2 rounded-full flex items-center gap-2 border border-cyan-800 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
                        <GoDotFill className="text-cyan-500" />
                        Intelligent Code Insights
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;