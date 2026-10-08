import React from "react";
import logo from "../../assets/logo3.png";

function Footer() {
    return (
        <footer className="bg-[#020617] text-white border-t border-slate-800">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ms:py-12 md:py-14">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-2">

                        <div className="flex items-center">
                            <img
                                src={logo}
                                alt="CodeSentinel Logo"
                                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                            />

                            <h1 className="text-lg sm:text-xl font-bold text-white">
                                Code<span className="text-cyan-400">Sentinel</span>
                                <span className="text-white"> - AI</span>
                            </h1>
                        </div>

                        <p className="mt-3 sm:mt-4 max-w-sm text-sm sm:text-base text-slate-500 leading-6 sm:leading-7">
                            AI-powered code auditing that helps developers find vulnerabilities, detect bugs, and ship safer software.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-sm font-semibold text-white">
                            Product
                        </h4>

                        <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-sm text-slate-500">

                            <a href="#feature" className="block hover:text-cyan-400 transition">
                                Features
                            </a>

                            <a href="#how-it-works" className="block hover:text-cyan-400 transition">
                                How It Works
                            </a>

                            <a href="#analysis" className="block hover:text-cyan-400 transition">
                                Analysis
                            </a>

                            <a href="#security" className="block hover:text-cyan-400 transition">
                                Security
                            </a>
                        </div>
                    </div>


                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-semibold text-white">
                            Resources
                        </h4>

                        <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-sm text-slate-500">

                            <a href="#" className="block hover:text-cyan-400 transition">
                                Documentation
                            </a>

                            <a href="#" className="block hover:text-cyan-400 transition">
                                GitHub
                            </a>

                            <a href="#" className="block hover:text-cyan-400 transition">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 sm:mt-12 md:mt-14 pt-5 sm:pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600 text-center sm:text-left">

                    <p>
                        © 2026 CodeSentinel AI. All rights reserved.
                    </p>

                    <p>
                        Analyze • Detect • Fix • Ship
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;