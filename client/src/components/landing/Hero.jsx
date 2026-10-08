import React from "react";
import { PiShootingStarLight } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

function Hero() {
    const features = [
        "Multi-Agent Analysis",
        "Security Scanning",
        "Automated Fix Suggestions",
        "Developer-Friendly Reports",
        "Intelligent Code Insights",
    ];

    return (
        <section>
            <div className="bg-gradient-to-b from-slate-50 to-sky-300 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
                <div className="flex-1 px-6 pt-20">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <div className="text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2">
                                <PiShootingStarLight size={21} className="text-cyan-600" />
                                Your Code’s First Line of Defense.
                            </div>
                        </div>

                        <div className="text-center mb-18">
                            <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
                                Secure Your Code with
                                <span className="relative inline-block">
                                    <span className="text-cyan-400 px-5 py-1 rounded-full">
                                        AI Intelligence
                                    </span>
                                </span>
                            </h1>

                            <p className="text-gray-500 mt-10 max-w-2xl mx-auto text-lg">
                                AI-powered code auditing that finds vulnerabilities, detects bugs, and helps you fix them before they reach production.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mt-15">
                                <button className="bg-[#020617] text-white px-10 py-3 rounded-full hover:opacity-90 transition shadow-md">
                                    Analyze Your Code
                                </button>

                                <button className="border border-gray-800 px-10 py-3 rounded-full hover:bg-cyan-100 transition">
                                    View Demo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Feature Pills */}
                    <div className="max-w-6xl mx-auto mt-15 sm:mt-20">
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">

                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-cyan-800/30 bg-white/65 backdrop-blur-md shadow-sm text-sm sm:text-base text-slate-700 hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
                                >
                                    <GoDotFill
                                        className="text-cyan-500 group-hover:scale-125 transition-transform"
                                        size={12}
                                    />

                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Small Bottom Text */}
                    <div className="flex justify-center mt-5">
                        <p className="text-xs sm:text-sm text-slate-500">
                            Analyze • Detect • Explain • Fix • Review • Report
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;