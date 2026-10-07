import React from "react";
import logo from "../../assets/logo3.png";

function Footer() {
    return (
        <footer className="bg-[#020617] text-white border-t border-slate-800">

            <div className="max-w-6xl mx-auto px-6 py-14">

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="lg:col-span-2">

                        <div className="flex items-center">
                            <img
                                src={logo}
                                alt="CodeSentinel Logo"
                                className="w-16 h-16 sm:w-16 sm:h-16 object-contain"
                            />

                            <h1 className="text-lg sm:text-xl font-bold text-white">
                                Code<span className="text-cyan-400">Sentinel</span>
                                <span className="text-white-400"> - AI</span>
                            </h1>
                        </div>

                        <p className="mt-4 max-w-sm text-slate-500 leading-7">
                            AI-powered code auditing that helps developers find vulnerabilities, detect bugs, and ship safer software.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-sm font-semibold text-white">
                            Product
                        </h4>

                        <div className="mt-5 space-y-3 text-sm text-slate-500">

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

                        <div className="mt-5 space-y-3 text-sm text-slate-500">

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
                <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between gap-4 text-sm text-slate-600">

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